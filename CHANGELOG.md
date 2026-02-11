# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-02-12

### Added

- **Core Architecture**
  - Built with Astro 5 for high-performance static generation.
  - React 19 integration for interactive "islands".
  - Tailwind CSS v4 for utility-first styling.
  - Bun as the primary package manager and runner.
- **Design & UI**
  - Modern 2026 design trends (glassmorphism, bento grids, gradients).
  - First-class dark mode support with system preference detection and
    persistence.
  - Fully responsive layouts for all devices (320px to ultra-wide).
  - High-performance animations using Motion One.
  - Accessible UI primitives using Radix UI.
- **Pages & Sections**
  - Comprehensive Homepage with 12 sections.
  - Features page with zigzag layouts and comparison tables.
  - Conversion-optimized Pricing page with billing toggle.
  - About page with company story, values, and team.
  - Blog system with search, category filtering, and pagination.
  - Interactive Demo Link modals for placeholder functionality.
  - Functional Contact, Login, and Signup mockup forms.
- **SEO & Performance**
  - Optimized Core Web Vitals (Perfect Lighthouse scores).
  - JSON-LD Structured Data (FAQ, Person, Organization).
  - Automatic sitemap and robots.txt generation.
  - Image optimization pipeline.
- **Testing & Quality**
  - 1,100+ Unit tests using Vitest.
  - Comprehensive E2E suite using Playwright (Cross-browser, Responsive, User
    Journeys).
  - Automated accessibility audits (Axe-core).
  - Performance monitoring with Lighthouse CI.
  - Deployment verification scripts for broken links and assets.
- **DevOps & Documentation**
  - GitHub Actions workflow for automated GitHub Pages deployment.
  - Centralized path management for subdirectory support.
  - SPA routing strategy for GitHub Pages (404.html redirect).
  - Comprehensive README with customization, configuration, and testing guides.

### Fixed

- Resolved hydration mismatches in SEO schemas and complex forms.
- Fixed path resolution issues for GitHub Pages subdirectories.
- Corrected color contrast violations for WCAG AA compliance.
- Fixed layout overflows and responsiveness bugs on small viewports.
- Standardized trailing slash behavior across all internal links.
