const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('Contact Page Tests', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
    // Accept cookies if present
    try {
      await page.click('button:has-text("ACCEPT"), button:has-text("Accept")', { timeout: 3000 });
    } catch (e) {
      // No cookie banner
    }
  });

  test('Positive: Navigate to contact page @positive @smoke', async ({ page }) => {
    await homePage.clickContact();
    await page.waitForTimeout(3000);
    const url = page.url();
    console.log('Navigated to:', url);
    expect(url).toContain('contact');
  });

  test('Verify contact page has content @positive', async ({ page }) => {
    await homePage.clickContact();
    await page.waitForTimeout(3000);
    const bodyText = await page.textContent('body');
    expect(bodyText.length).toBeGreaterThan(100);
    console.log('Contact page has content');
  });

  test('Verify contact page links work @positive', async ({ page }) => {
    await homePage.clickContact();
    await page.waitForTimeout(3000);
    const links = await page.$$eval('a', links => links.map(a => a.href).filter(h => h));
    console.log('Links on contact page:', links.length);
    expect(links.length).toBeGreaterThan(0);
  });

  test('Boundary: Navigate with different viewport sizes @boundary', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1920, height: 1080 }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await homePage.clickContact();
      await page.waitForTimeout(2000);
      const url = page.url();
      expect(url).toContain('contact');
      console.log(`Contact page works at ${viewport.width}x${viewport.height}`);
    }
  });
});
