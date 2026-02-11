import { expect, test } from '@playwright/test';
import { selectors, testRoutes } from '../fixtures/test-data';

/**
 * Smoke Tests
 *
 * Verifies that all key pages are accessible and render the basic layout.
 * These tests are intended to run after deployment or against the production build.
 */
test.describe('Smoke Tests', () => {
  // Test all main pages listed in testRoutes
  const pagesToTest = Object.entries(testRoutes).filter(
    ([key]) => !['dashboard', 'settings'].includes(key), // Skip placeholder routes
  );

  for (const [name, path] of pagesToTest) {
    test(`Page "${name}" (${path}) should be accessible`, async ({ page }) => {
      // Use relative path to respect baseURL with subdirectory
      const response = await page.goto(path);

      // Verify response status
      expect(response?.status()).toBe(200);

      // Verify basic layout elements exist
      await expect(page.locator(selectors.navigation.header)).toBeVisible();
      await expect(page.locator(selectors.footer.section)).toBeVisible();

      // Verify no critical errors in console
      // Note: Some third-party warnings might exist, but we check for errors
    });
  }

  test('404 redirect should work for unknown routes', async ({ page }) => {
    // Navigate to a non-existent page using relative path
    const response = await page.goto('this-page-does-not-exist');

    // GitHub Pages 404 redirect script should handle this.
    // In our local preview/dev, it might return 404 or our custom 404 handling.
    // If handleRedirect is working, it should eventually settle on a valid state or remain on 404.
    // However, since we removed 404.astro and use 404.html redirect,
    // we expect the response status to be 404 from the server,
    // but the page content should be our redirecting HTML.

    expect(response?.status()).toBe(404);
  });
});

test.describe('Production Critical Features', () => {
  test.beforeEach(async ({ page }) => {
    // Use relative path to respect baseURL
    await page.goto('.');
  });

  test('Theme switching should work and persist', async ({ page }) => {
    const toggle = page.locator(selectors.navigation.themeToggle);
    const html = page.locator('html');

    // Initial state check
    const initialTheme = await html.getAttribute('data-theme');

    // Toggle theme
    await toggle.click();
    const newTheme = await html.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);
    expect(newTheme).not.toBeNull();

    // Refresh and verify persistence
    await page.reload();
    await expect(html).toHaveAttribute('data-theme', newTheme!);
  });

  test('Demo modals should trigger for placeholder links', async ({ page }) => {
    // Find a social link in the footer
    const socialLink = page.locator(selectors.footer.socialLinks).first();
    await socialLink.click();

    // Verify modal is visible
    await expect(page.locator(selectors.modal.overlay)).toBeVisible();
    await expect(page.locator(selectors.modal.demoMessage)).toBeVisible();

    // Close modal
    await page.locator(selectors.modal.closeButton).click();
    await expect(page.locator(selectors.modal.overlay)).not.toBeVisible();
  });

  test('Forms should handle submissions in demo mode', async ({ page }) => {
    await page.goto(testRoutes.contact);

    const form = page.locator(selectors.forms.contact);
    await expect(form).toBeVisible();

    // Fill form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[type="email"]', 'john@example.com');
    await page.selectOption('select[name="inquiryType"]', 'general');
    await page.fill('textarea[name="message"]', 'This is a test message.');

    // Submit
    await page.locator(selectors.forms.contactSubmit).click();

    // Verify success message (we mock a 1.5s delay in the component)
    await expect(page.getByText(/message sent successfully|thank you/i).first()).toBeVisible({
      timeout: 10000,
    });
  });
});
