/* eslint-disable */
import { spawn } from 'child_process';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function waitForServer(url) {
  const start = Date.now();
  while (Date.now() - start < 30000) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch (e) {
      // ignore
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error('Server timed out');
}

function checkMetrics(reportPath, page) {
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const audits = report.audits;

  const lcp = audits['largest-contentful-paint']?.numericValue || 0;
  const cls = audits['cumulative-layout-shift']?.numericValue || 0;
  const tti = audits['interactive']?.numericValue || 0;
  const tbt = audits['total-blocking-time']?.numericValue || 0;

  // CWV Targets
  const LCP_TARGET = 2500; // 2.5s
  const CLS_TARGET = 0.1;
  const TBT_TARGET = 300; // FID/INP proxy in Lighthouse lab data, relaxed slightly for local runs

  console.log(`\nMetrics for ${page}:`);
  console.log(`- LCP: ${(lcp / 1000).toFixed(2)}s ${lcp <= LCP_TARGET ? '✅' : '❌'}`);
  console.log(`- CLS: ${cls.toFixed(3)} ${cls <= CLS_TARGET ? '✅' : '❌'}`);
  console.log(`- TBT: ${tbt.toFixed(0)}ms ${tbt <= TBT_TARGET ? '✅' : '❌'}`);
  console.log(`- TTI: ${(tti / 1000).toFixed(2)}s`);
  console.log(`- Performance Score: ${Math.round(report.categories.performance.score * 100)}%`);

  const failed = lcp > LCP_TARGET || cls > CLS_TARGET || tbt > TBT_TARGET;
  return !failed;
}

async function run() {
  const pages = [
    '/',
    '/features/',
    '/pricing/',
    '/about/',
    '/blog/',
    '/blog/introducing-modern-saas-2-0/',
  ];

  const PORT = 3000;
  const tempDir = path.join(process.cwd(), 'temp', `lh-user-data-${Date.now()}`);
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  console.log('Building project...');
  execSync('bun run build', { stdio: 'inherit' });

  // Try to kill any process on port 3000 (Windows)
  try {
    const output = execSync(`netstat -ano | findstr :${PORT}`).toString();
    const lines = output.split('\n');
    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      if (parts.length > 4 && parts[1].endsWith(`:${PORT}`)) {
        const pid = parts[4];
        if (pid !== '0') {
          console.log(`Killing process ${pid} on port ${PORT}...`);
          execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
        }
      }
    }
  } catch (e) {
    // Ignore if no process found
  }

  console.log(`Starting preview server on port ${PORT}...`);
  const preview = spawn('bun', ['run', 'astro', 'preview', '--port', PORT.toString()], {
    stdio: 'inherit',
    shell: true,
  });

  try {
    console.log('Waiting for server to be ready...');
    await waitForServer(`http://localhost:${PORT}`);

    const results = [];
    let allPassed = true;

    for (const page of pages) {
      const url = `http://localhost:${PORT}${page}`;
      const safePage = page === '/' ? 'home' : page.replace(/\//g, '-').replace(/^-/, '');
      const reportPath = `./lighthouse-${safePage}.json`;
      console.log(`\nRunning Lighthouse for ${url}...`);

      try {
        execSync(
          `npx lighthouse ${url} --chrome-flags="--headless --no-sandbox --disable-gpu --user-data-dir=${tempDir}" --quiet --output json --output-path ${reportPath}`,
          { stdio: 'inherit' },
        );
      } catch (e) {
        // Lighthouse CLI often fails with EPERM on Windows during temp dir cleanup
        // We ignore the error if the report was successfully generated
        if (fs.existsSync(reportPath)) {
          console.log(`Lighthouse report generated for ${page} despite CLI cleanup error.`);
        } else {
          throw e;
        }
      }

      const passed = checkMetrics(reportPath, page);
      if (!passed) allPassed = false;
      results.push({ page, reportPath, passed });
    }

    console.log('\nLighthouse audit complete.');
    if (allPassed) {
      console.log('All pages meet Core Web Vitals targets! 🎉');
    } else {
      console.error('Some pages failed Core Web Vitals targets. ❌');
      process.exit(1);
    }
  } catch (err) {
    console.error('Error during Lighthouse run:', err);
    process.exit(1);
  } finally {
    console.log('Stopping preview server...');
    if (process.platform === 'win32') {
      try {
        execSync('taskkill /F /T /PID ' + preview.pid, { stdio: 'ignore' });
      } catch (e) {}
    } else {
      try {
        process.kill(-preview.pid);
      } catch (e) {}
    }

    // Clean up temp dir
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

run();
