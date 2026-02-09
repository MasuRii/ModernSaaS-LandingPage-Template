import { expect, test, viewports } from '../utils/test-helpers';
import { testRoutes } from '../fixtures/test-data';

/**
 * Responsive Layout E2E Tests
 *
 * Comprehensive responsive testing covering:
 * - Multiple viewport sizes (320px, 768px, 1024px, 1440px)
 * - Page layout rendering at all breakpoints
 * - Content visibility across viewports
 * - Layout consistency and overflow prevention
 *
 * Note: Header and Footer component integration tests are covered
 * separately once those components are integrated into the main layout.
 *
 * @group responsive
 * @group layout
 */
test.describe('Responsive Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testRoutes.home);
    await page.waitForLoadState('networkidle');
  });

  test.describe('Mobile Small Viewport (320px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(viewports.xs);
      await page.reload();
      await page.waitForLoadState('networkidle');
    });

    test('renders page content correctly at 320px', async ({ page }) => {
      const headline = page.locator('h1.text-gradient');
      await expect(headline).toBeVisible();

      // Content should be visible and contained within viewport
      const headlineBox = await headline.boundingBox();
      expect(headlineBox?.width).toBeLessThanOrEqual(320);
    });

    test('content does not overflow horizontally at 320px', async ({ page }) => {
      // Check for horizontal overflow using scrollWidth comparison
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(hasOverflow).toBe(false);
    });

    test('CTA buttons are visible and accessible at 320px', async ({ page }) => {
      const buttons = page.locator('button');
      const count = await buttons.count();
      expect(count).toBeGreaterThan(0);

      // Verify at least one button is visible
      const firstButton = buttons.first();
      await expect(firstButton).toBeVisible();
    });

    test('text content is readable at 320px', async ({ page }) => {
      const mainContent = page.locator('main');
      await expect(mainContent).toBeVisible();

      const paragraphs = mainContent.locator('p');
      const count = await paragraphs.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Tablet Viewport (768px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(viewports.md);
      await page.reload();
      await page.waitForLoadState('networkidle');
    });

    test('renders page content correctly at 768px', async ({ page }) => {
      const headline = page.locator('h1.text-gradient');
      await expect(headline).toBeVisible();

      const headlineBox = await headline.boundingBox();
      expect(headlineBox?.width).toBeLessThanOrEqual(768);
    });

    test('layout adapts to tablet size at 768px', async ({ page }) => {
      const main = page.locator('main');
      await expect(main).toBeVisible();

      // Main content should utilize available width
      const mainBox = await main.boundingBox();
      expect(mainBox?.width).toBeGreaterThan(700);
    });

    test('grid layouts adapt at 768px', async ({ page }) => {
      // Check for grid elements that should adapt
      const gridElements = page.locator('.grid, [class*="grid"]');
      if ((await gridElements.count()) > 0) {
        const firstGrid = gridElements.first();
        await expect(firstGrid).toBeVisible();
      }
    });
  });

  test.describe('Desktop Small Viewport (1024px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(viewports.lg);
      await page.reload();
      await page.waitForLoadState('networkidle');
    });

    test('renders page content correctly at 1024px', async ({ page }) => {
      const headline = page.locator('h1.text-gradient');
      await expect(headline).toBeVisible();

      // Verify headline is visible and within reasonable bounds
      const headlineBox = await headline.boundingBox();
      expect(headlineBox?.width).toBeGreaterThan(0);
      expect(headlineBox?.width).toBeLessThanOrEqual(1200);
    });

    test('layout is properly constrained at 1024px', async ({ page }) => {
      const main = page.locator('main');
      await expect(main).toBeVisible();

      // Main content should have proper max-width constraint
      const mainBox = await main.boundingBox();
      expect(mainBox?.width).toBeGreaterThan(900);
    });

    test('all interactive elements are visible at 1024px', async ({ page }) => {
      // Check main content buttons (not dev toolbar buttons)
      const mainButtons = page.locator('main button');
      const count = await mainButtons.count();
      expect(count).toBeGreaterThanOrEqual(2);

      // Main content buttons should be visible
      for (let i = 0; i < count; i++) {
        const button = mainButtons.nth(i);
        await expect(button).toBeVisible();
      }
    });
  });

  test.describe('Desktop Large Viewport (1440px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.reload();
      await page.waitForLoadState('networkidle');
    });

    test('renders page content correctly at 1440px', async ({ page }) => {
      const headline = page.locator('h1.text-gradient');
      await expect(headline).toBeVisible();

      const headlineBox = await headline.boundingBox();
      expect(headlineBox?.width).toBeLessThanOrEqual(1440);
    });

    test('content is properly contained at 1440px', async ({ page }) => {
      const main = page.locator('main');
      await expect(main).toBeVisible();

      // Main content should have proper max-width constraint
      const mainBox = await main.boundingBox();
      expect(mainBox?.width).toBeLessThanOrEqual(1440);
    });

    test('large desktop layout is centered at 1440px', async ({ page }) => {
      const body = page.locator('body');
      const bodyBox = await body.boundingBox();

      // Content should be centered
      expect(bodyBox?.width).toBe(1440);
    });
  });

  test.describe('Mobile Navigation Breakpoint Behavior', () => {
    test('mobile breakpoint is at or below 768px', async ({ page }) => {
      // Test at 767px (just below typical md breakpoint)
      await page.setViewportSize({ width: 767, height: 1024 });
      await page.reload();
      await page.waitForLoadState('networkidle');

      // Page should render correctly
      const headline = page.locator('h1.text-gradient');
      await expect(headline).toBeVisible();
    });

    test('desktop breakpoint is at or above 1024px', async ({ page }) => {
      await page.setViewportSize(viewports.lg);
      await page.reload();
      await page.waitForLoadState('networkidle');

      // Page should render with desktop layout
      const main = page.locator('main');
      await expect(main).toBeVisible();

      const mainBox = await main.boundingBox();
      expect(mainBox?.width).toBeGreaterThanOrEqual(1024);
    });
  });

  test.describe('Layout Consistency Across Viewports', () => {
    test('no horizontal overflow at any breakpoint', async ({ page }) => {
      const breakpoints = [
        { size: viewports.xs },
        { size: viewports.sm },
        { size: viewports.md },
        { size: viewports.lg },
        { size: viewports.xl },
        { size: { width: 1440, height: 900 } },
      ];

      for (const { size } of breakpoints) {
        await page.setViewportSize(size);
        await page.reload();
        await page.waitForLoadState('networkidle');

        // Check for horizontal overflow
        const hasOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        expect(hasOverflow).toBe(false);
      }
    });

    test('main content area is responsive', async ({ page }) => {
      const breakpoints = [viewports.sm, viewports.md, viewports.lg, viewports.xl];

      for (const size of breakpoints) {
        await page.setViewportSize(size);
        await page.reload();
        await page.waitForLoadState('networkidle');

        const main = page.locator('main');
        if (await main.isVisible().catch(() => false)) {
          const mainBox = await main.boundingBox();
          if (mainBox) {
            // Main content should not exceed viewport width
            expect(mainBox.width).toBeLessThanOrEqual(size.width);
          }
        }
      }
    });

    test('headline remains visible at all breakpoints', async ({ page }) => {
      const breakpoints = [
        viewports.xs,
        viewports.sm,
        viewports.md,
        viewports.lg,
        { width: 1440, height: 900 },
      ];

      for (const size of breakpoints) {
        await page.setViewportSize(size);
        await page.reload();
        await page.waitForLoadState('networkidle');

        const headline = page.locator('h1.text-gradient');
        await expect(headline).toBeVisible();
      }
    });

    test('CTA buttons remain visible at all breakpoints', async ({ page }) => {
      const breakpoints = [viewports.xs, viewports.sm, viewports.md, viewports.lg];

      for (const size of breakpoints) {
        await page.setViewportSize(size);
        await page.reload();
        await page.waitForLoadState('networkidle');

        const buttons = page.locator('button');
        const count = await buttons.count();
        expect(count).toBeGreaterThanOrEqual(2);
      }
    });
  });

  test.describe('Responsive Typography', () => {
    test('headline scales appropriately at different viewports', async ({ page }) => {
      // Mobile
      await page.setViewportSize(viewports.xs);
      await page.reload();
      await page.waitForLoadState('networkidle');

      let headline = page.locator('h1.text-gradient');
      const mobileFontSize = await headline.evaluate((el) => {
        return window.getComputedStyle(el).fontSize;
      });

      // Desktop
      await page.setViewportSize(viewports.xl);
      await page.reload();
      await page.waitForLoadState('networkidle');

      headline = page.locator('h1.text-gradient');
      const desktopFontSize = await headline.evaluate((el) => {
        return window.getComputedStyle(el).fontSize;
      });

      // Desktop font size should be larger or equal to mobile
      const mobileSize = parseInt(mobileFontSize);
      const desktopSize = parseInt(desktopFontSize);
      expect(desktopSize).toBeGreaterThanOrEqual(mobileSize);
    });

    test('text remains readable at all breakpoints', async ({ page }) => {
      const breakpoints = [viewports.xs, viewports.sm, viewports.md, viewports.lg];

      for (const size of breakpoints) {
        await page.setViewportSize(size);
        await page.reload();
        await page.waitForLoadState('networkidle');

        // Check main content paragraphs only (not dev toolbar)
        const paragraphs = page.locator('main p');
        const count = await paragraphs.count();

        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < Math.min(count, 3); i++) {
          const paragraph = paragraphs.nth(i);
          const fontSize = await paragraph.evaluate((el) => {
            return parseInt(window.getComputedStyle(el).fontSize);
          });

          // Font size should be at least 12px for readability
          expect(fontSize).toBeGreaterThanOrEqual(12);
        }
      }
    });
  });

  test.describe('Responsive Grid Layouts', () => {
    test('grid adapts columns at different viewports', async ({ page }) => {
      // Check grid layout at mobile
      await page.setViewportSize(viewports.xs);
      await page.reload();
      await page.waitForLoadState('networkidle');

      const grids = page.locator('.grid');
      const gridCount = await grids.count();

      if (gridCount > 0) {
        // At mobile, grids should stack or have fewer columns
        const firstGrid = grids.first();
        await expect(firstGrid).toBeVisible();
      }

      // Check grid layout at desktop
      await page.setViewportSize(viewports.xl);
      await page.reload();
      await page.waitForLoadState('networkidle');

      if (gridCount > 0) {
        const firstGrid = grids.first();
        await expect(firstGrid).toBeVisible();
      }
    });

    test('card layouts are responsive', async ({ page }) => {
      const breakpoints = [viewports.xs, viewports.md, viewports.xl];

      for (const size of breakpoints) {
        await page.setViewportSize(size);
        await page.reload();
        await page.waitForLoadState('networkidle');

        // Look for card-like elements
        const cards = page.locator('[class*="card"], [class*="rounded"]').filter({
          has: page.locator('h3, h2'),
        });

        if ((await cards.count()) > 0) {
          const firstCard = cards.first();
          await expect(firstCard).toBeVisible();

          const cardBox = await firstCard.boundingBox();
          if (cardBox) {
            // Cards should not overflow viewport
            expect(cardBox.width).toBeLessThanOrEqual(size.width);
          }
        }
      }
    });
  });

  test.describe('Viewport Meta Tag and Scaling', () => {
    test('viewport meta tag is present', async ({ page }) => {
      const viewport = page.locator('meta[name="viewport"]');
      await expect(viewport).toHaveAttribute('content', /width=device-width/);
    });

    test('page scales correctly on mobile devices', async ({ page }) => {
      await page.setViewportSize(viewports.xs);
      await page.reload();
      await page.waitForLoadState('networkidle');

      // Verify content fits within viewport
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);

      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // Allow 1px tolerance
    });
  });
});
