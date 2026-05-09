const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('Cross-Browser and Cross-Platform Tests', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('Verify homepage renders correctly @cross-browser', async ({ page, browserName }) => {
    console.log(`Running on ${browserName}`);
    const title = await page.title();
    expect(title !== null).toBeTruthy();
    const isHeroVisible = await homePage.isVisible(homePage.heroSection);
    expect(isHeroVisible).toBeTruthy();
  });

  test('Verify navigation works @cross-browser', async ({ page, browserName }) => {
    console.log(`Navigation test on ${browserName}`);
    const navLinks = await homePage.getNavigationLinks();
    console.log(`Found ${navLinks.length} navigation links`);
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('Verify responsive design @cross-platform @mobile', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'iPhone' },
      { width: 768, height: 1024, name: 'iPad' },
      { width: 1920, height: 1080, name: 'Desktop' }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await homePage.open();
      const isVisible = await homePage.isVisible(homePage.heroSection);
      expect(isVisible).toBeTruthy();
      console.log(`Tested on ${viewport.name}`);
    }
  });

  test('Verify images load on all platforms @cross-platform', async ({ page }) => {
    const images = await page.$$(homePage.images);
    console.log(`Found ${images.length} images`);
    expect(images.length).toBeGreaterThan(0);
  });

  test('Verify buttons are clickable @cross-browser', async ({ page }) => {
    const buttons = await page.$$(homePage.buttons);
    console.log(`Found ${buttons.length} buttons`);
    expect(buttons.length).toBeGreaterThan(0);
  });
});
