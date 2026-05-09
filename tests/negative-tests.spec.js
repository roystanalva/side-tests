const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('Negative Test Cases', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('Negative: Access non-existent page @negative', async ({ page }) => {
    const response = await page.goto('https://side.inc/non-existent-page', { failOnStatusCode: false });
    console.log('Non-existent page status:', response.status());
    expect(response.status()).toBe(404);
  });

  test('Negative: Navigate to invalid URL @negative', async ({ page }) => {
    const response = await page.goto('https://side.inc/invalid-path', { failOnStatusCode: false });
    console.log('Invalid path status:', response.status());
    expect([404, 200, 301, 302]).toContain(response.status());
  });

  test('Edge: Verify page handles slow network @edge', async ({ page }) => {
    // Simulate slow network
    await page.route('**/*', async route => {
      await new Promise(resolve => setTimeout(resolve, 100));
      await route.continue();
    });
    
    await homePage.open();
    const title = await page.title();
    expect(title !== null).toBeTruthy();
    console.log('Page loaded with simulated slow network');
  });

  test('Boundary: Check with large viewport @boundary', async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await homePage.open();
    const isVisible = await homePage.isVisible(homePage.heroSection);
    expect(isVisible).toBeTruthy();
    console.log('Page works with large viewport');
  });

  test('Boundary: Check with small viewport @boundary', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await homePage.open();
    const isVisible = await homePage.isVisible(homePage.heroSection);
    expect(isVisible).toBeTruthy();
    console.log('Page works with small viewport');
  });
});
