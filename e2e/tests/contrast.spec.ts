import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { testRoutes } from '../fixtures/test-data';

/**
 * Color Contrast Verification Tests
 *
 * Specifically validates that all text meets WCAG contrast requirements:
 * - Normal text: 4.5:1 ratio
 * - Large text: 3:1 ratio
 *
 * These tests run in both Light and Dark modes across all major pages.
 */
test.describe('Color Contrast Verification', () => {
  // Key pages to verify
  const routes = [
    testRoutes.home,
    testRoutes.features,
    testRoutes.pricing,
    testRoutes.about,
    testRoutes.blog,
    testRoutes.contact,
    testRoutes.support,
    testRoutes.changelog,
    testRoutes.roadmap,
    testRoutes.privacy,
    testRoutes.terms,
  ];

  for (const route of routes) {
    test.describe(`Page: ${route}`, () => {
      test('should pass contrast checks in light mode', async ({ page }) => {
        await page.goto(route);
        await page.waitForLoadState('networkidle');

        // Ensure light mode
        const isDark = await page.evaluate(() =>
          document.documentElement.classList.contains('dark'),
        );
        if (isDark) {
          const themeToggle = page.locator('[data-testid="theme-toggle"]');
          if (await themeToggle.isVisible()) {
            await themeToggle.click();
            await page.waitForTimeout(300);
          }
        }

        const accessibilityScanResults = await new AxeBuilder({ page })
          .withRules(['color-contrast'])
          .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });

      test('should pass contrast checks in dark mode', async ({ page }) => {
        await page.goto(route);
        await page.waitForLoadState('networkidle');

        // Ensure dark mode
        const isDark = await page.evaluate(() =>
          document.documentElement.classList.contains('dark'),
        );
        if (!isDark) {
          const themeToggle = page.locator('[data-testid="theme-toggle"]');
          if (await themeToggle.isVisible()) {
            await themeToggle.click();
            await page.waitForTimeout(300);
          }
        }

        const accessibilityScanResults = await new AxeBuilder({ page })
          .withRules(['color-contrast'])
          .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });
  }
});
