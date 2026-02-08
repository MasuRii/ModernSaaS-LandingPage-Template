// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Determines the base path for deployment
 * - GitHub Project Pages: /repository-name/
 * - GitHub User/Org Pages: /
 * - Custom Domain: /
 */
const getBasePath = () => {
  // GitHub Actions sets this for project pages
  if (process.env.GITHUB_PAGES === 'true') {
    const repo = process.env.GITHUB_REPOSITORY;
    if (repo) {
      const [, repoName] = repo.split('/');
      return repoName ? `/${repoName}` : '/';
    }
  }
  // Local development or user/org pages
  return process.env.BASE_PATH || '/';
};

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: getBasePath(),
  output: 'static',
  trailingSlash: 'always',
});
