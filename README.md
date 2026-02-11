# ModernSaaS Landing Page Template

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://MasuRii.github.io/ModernSaaS-LandingPage-Template/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.17-orange)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8)](https://tailwindcss.com/)

A production-ready, visually stunning SaaS startup landing page template
featuring modern 2026 design trends, comprehensive light/dark mode support, Core
Web Vitals optimization, and seamless GitHub Pages deployment.

## ✨ Features

- **🚀 High Performance**: Built with Astro 5 for near-zero JavaScript by
  default. Perfect Lighthouse scores.
- **🎨 Modern Design**: 2026 design trends including glassmorphism, bento grids,
  and mesh gradients.
- **🌓 Dark Mode**: First-class dark mode support with automatic system
  preference detection and persistent toggle.
- **📱 Fully Responsive**: Optimized for all devices from 320px mobile to
  ultra-wide desktops.
- **🔍 SEO Optimized**: Built-in JSON-LD structured data, automatic sitemaps,
  and optimized meta tags.
- **🧪 Production-Grade Testing**: 1,100+ unit tests and comprehensive E2E suite
  using Playwright.
- **📦 Atomic Components**: Highly reusable UI components built with React and
  Tailwind CSS v4.
- **🎬 Fluid Animations**: Smooth, hardware-accelerated animations using Motion
  One with reduced motion support.
- **📄 Content Driven**: Easily customizable via centralized data files.

## 🛠️ Tech Stack

| Technology                                      | Justification                                                                     |
| ----------------------------------------------- | --------------------------------------------------------------------------------- |
| **[Astro 5](https://astro.build/)**             | Zero-JS-by-default architecture for maximum performance and native static export. |
| **[React 19](https://react.dev/)**              | Selective hydration for interactive components using the "Islands" architecture.  |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Next-gen utility-first styling with zero-runtime overhead and excellent DX.       |
| **[Motion One](https://motion.dev/)**           | High-performance animations built on the Web Animations API (WAAPI).              |
| **[Radix UI](https://www.radix-ui.com/)**       | Accessible, unstyled primitives for robust interactive components.                |
| **[Vitest](https://vitest.dev/)**               | Modern, fast unit testing framework compatible with Vite.                         |
| **[Playwright](https://playwright.dev/)**       | Comprehensive E2E and visual regression testing across all major browsers.        |
| **[Bun](https://bun.sh/)**                      | Ultra-fast package manager and test runner.                                       |

## 📁 Project Structure

```text
├── .github/workflows/  # CI/CD (GitHub Actions)
├── docs/               # Project documentation and research
├── e2e/                # End-to-end tests (Playwright)
├── public/             # Static assets (images, fonts, robots.txt)
├── scripts/            # Utility scripts (image fetching, deployment)
├── src/
│   ├── assets/         # Project-specific assets
│   ├── components/     # UI components (Atomic design)
│   ├── config/         # Centralized configuration (site, paths, animation)
│   ├── data/           # Content data files (JSON/TS)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages and routing
│   ├── styles/         # Global styles and tokens
│   ├── utils/          # Shared utilities
│   └── types/          # TypeScript definitions
└── tests/              # Unit and integration tests (Vitest)
```

## 🚀 Quick Start

Ensure you have [Bun](https://bun.sh/) installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MasuRii/ModernSaaS-LandingPage-Template.git
   cd ModernSaaS-LandingPage-Template
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Start development server:**

   ```bash
   bun run dev
   ```

4. **Build for production:**
   ```bash
   bun run build
   ```

## 🎨 Customization

This template is designed to be easily brandable and customizable.

### 1. Branding & Identity

Update `src/config/site.ts` to change:

- **Company Name**: `company.name`
- **Tagline**: `company.tagline`
- **Social Links**: `social` object
- **Contact Info**: `contact` object
- **SEO Defaults**: `seo` object

### 2. Colors & Typography

Styling is managed via CSS variables in `src/styles/tokens.css`.

- **Primary Color**: Update `--primitive-color-primary-*` scale.
- **Secondary Color**: Update `--primitive-color-secondary-*` scale.
- **Accent Color**: Update `--primitive-color-accent-*` scale.
- **Typography**: Update `--font-family-sans` and `--font-size-*` tokens.

The template uses **Tailwind CSS v4**, so these tokens are automatically
available as utility classes.

### 3. Content Data

Most page content is centralized in `src/data/`:

- **Features**: `src/data/features.ts`
- **Pricing**: `src/data/pricing.ts`
- **Testimonials**: `src/data/testimonials.ts`
- **Team**: `src/data/team.ts`
- **Integrations**: `src/data/integrations.ts`
- **FAQs**: `src/data/faq.ts`

### 4. Logos & Icons

- **Text-based Logo**: Automatically updates via `company.name` in
  `src/config/site.ts`.
- **Logo Icon**: The default `Zap` icon is used in `Header.tsx`. Replace it with
  your own SVG or icon component in `src/components/layout/Header.tsx`.

## ⚙️ Configuration

Beyond visual customization, the template provides several configuration hooks.

### 1. Site Configuration

The `src/config/site.ts` file contains more than just branding.

- **Analytics**: Set your IDs for `googleAnalyticsId`, `plausibleDomain`, or
  `posthogKey` in the `analytics` object.
- **Feature Flags**: Toggle core features (e.g., `newsletter`, `search`,
  `darkMode`) in the `featureFlags` object.
- **Demo Mode**: Set `demoMode: true` to intercept placeholder links with
  informational modals.

### 2. Environment Variables

The template uses environment variables to control build behavior:

- `SITE_URL`: The production URL (e.g., `https://my-saas.com`). Used for
  sitemaps and canonical URLs.
- `BASE_PATH`: The subdirectory path (e.g., `/my-repo`). Defaults to `/` unless
  running in GitHub Actions.
- `GITHUB_PAGES`: Set to `true` by GitHub Actions to automatically detect
  project subdirectory names.

### 3. Astro Configuration

Key settings in `astro.config.mjs`:

- `trailingSlash`: Set to `'always'` to ensure consistent URL patterns.
- `compressHTML`: Set to `true` for optimized production builds.
- `image.service`: Configured to use Sharp for high-performance image
  processing.

## 🚀 Deployment

The template is optimized for static hosting and can be deployed to any major
provider.

### 1. GitHub Pages (Recommended)

This template is pre-configured for seamless GitHub Pages deployment via GitHub
Actions.

1. **Push your code** to a GitHub repository.
2. **Enable GitHub Pages** in your repository settings:
   - Go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` will automatically build and
   deploy your site whenever you push to the `main` branch.

**Note**: If deploying to a project site (e.g.,
`https://username.github.io/repo-name/`), the template automatically handles the
subdirectory path resolution.

### 2. Vercel

Vercel is an excellent choice for Astro projects.

1. Import your repository into the [Vercel Dashboard](https://vercel.com/new).
2. Vercel will automatically detect Astro and use the correct build settings.
3. Add the following **Environment Variables** (optional but recommended):
   - `SITE_URL`: Your production URL.
4. Click **Deploy**.

### 3. Netlify

1. Create a new site from [Netlify Dashboard](https://app.netlify.com/start).
2. Connect your repository.
3. Use the following build settings (should be auto-detected):
   - **Build command**: `bun run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

### 4. Custom Domains

When using a custom domain:

1. Update `SITE_URL` in your deployment environment variables to match your
   custom domain.
2. If using GitHub Pages with a custom domain, ensure you update the `base` path
   in `astro.config.mjs` to `/` (if it's not a subdirectory) or use the
   `BASE_PATH` environment variable.
3. Follow your provider's instructions for DNS configuration (A records, CNAME,
   etc.).

## 📸 Screenshots

### Light Mode

_Modern, clean, and professional interface with blue trust signals._
![Homepage Light Mode](./docs/screenshots/home-light.png)

### Dark Mode

_Sleek, futuristic dark interface with vibrant purple accents and mesh
gradients._ ![Homepage Dark Mode](./docs/screenshots/home-dark.png)

## 📖 Documentation

- [Test Summary](./docs/TEST_SUMMARY.md)
- [Deployment Verification](./docs/DEPLOYMENT_VERIFICATION.md)
- [Design Guidelines](./docs/research/DESIGN_GUIDELINES.md)
- [Tech Stack Evaluation](./docs/research/CHOSEN_TECH_STACK.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## ✨ Credits

- Icons: [Lucide React](https://lucide.dev/)
- Typography: [Inter Variable](https://rsms.me/inter/)
- Images: [Unsplash](https://unsplash.com/) via automated fetching script.
