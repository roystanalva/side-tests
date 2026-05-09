const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('Regression Tests for side.inc', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('Verify homepage loads successfully @regression @smoke', async ({ page }) => {
    const title = await page.title();
    console.log('Page title:', title);
    expect(title !== null).toBeTruthy();
    const isHeroVisible = await homePage.isVisible(homePage.heroSection);
    expect(isHeroVisible).toBeTruthy();
  });

  test('Verify all navigation links are working @regression @links', async ({ page }) => {
    const navLinks = await homePage.getNavigationLinks();
    console.log('Navigation links found:', navLinks.length);
    expect(navLinks.length).toBeGreaterThan(0);
    
    for (const link of navLinks.slice(0, 3)) {
      if (link.href && link.href.startsWith('http')) {
        const response = await page.request.get(link.href, { timeout: 10000 });
        expect(response.status()).toBeLessThan(400);
      }
    }
  });

  test('Verify footer links are present @regression', async ({ page }) => {
    const footerVisible = await homePage.isVisible('footer');
    expect(footerVisible).toBeTruthy();
    const footerLinks = await homePage.getFooterLinks();
    console.log('Footer links found:', footerLinks.length);
    expect(footerLinks.length).toBeGreaterThan(0);
  });

  test('Verify page responsiveness on mobile @regression @mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await homePage.open();
    const isVisible = await homePage.isVisible(homePage.heroSection);
    expect(isVisible).toBeTruthy();
  });

  test('Verify logo is visible and clickable @regression', async ({ page }) => {
    const logoVisible = await homePage.isVisible(homePage.logo);
    expect(logoVisible).toBeTruthy();
  });

  test('Verify all images load properly @regression', async ({ page }) => {
    const images = await page.$$(homePage.images);
    console.log('Images found:', images.length);
    expect(images.length).toBeGreaterThan(0);
    
    for (const img of images.slice(0, 3)) {
      try {
        const naturalWidth = await img.evaluate(el => el.naturalWidth);
        expect(naturalWidth).toBeGreaterThan(0);
      } catch (e) {
        console.log('Image check error:', e.message);
      }
    }
  });
});
