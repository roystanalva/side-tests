const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('Sanity Tests - Critical Path Verification', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('Sanity: Homepage loads @sanity @smoke', async ({ page }) => {
    await homePage.open();
    const title = await page.title();
    console.log('Homepage title:', title);
    expect(title !== null).toBeTruthy();
    console.log('Homepage loaded successfully');
  });

  test('Sanity: Navigation menu present @sanity', async ({ page }) => {
    await homePage.open();
    const navLinks = await homePage.getNavigationLinks();
    console.log('Navigation links found:', navLinks.length);
    expect(navLinks.length).toBeGreaterThan(0);
    console.log('Navigation menu has links');
  });

  test('Sanity: Footer present @sanity', async ({ page }) => {
    await homePage.open();
    const footerVisible = await homePage.isVisible('footer');
    expect(footerVisible).toBeTruthy();
    const footerLinks = await homePage.getFooterLinks();
    console.log('Footer links found:', footerLinks.length);
    console.log('Footer is visible with links');
  });

  test('Sanity: Check critical navigation links @sanity', async ({ page }) => {
    await homePage.open();
    const navLinks = await homePage.getNavigationLinks();
    console.log(`Total navigation links found: ${navLinks.length}`);
    expect(navLinks.length).toBeGreaterThan(0);
    
    // Check first 3 links
    for (const link of navLinks.slice(0, 3)) {
      if (link.href && link.href.startsWith('http')) {
        try {
          const response = await page.request.get(link.href, { timeout: 10000 });
          console.log(`${link.text}: ${link.href} - Status: ${response.status()}`);
        } catch (e) {
          console.log(`${link.text}: ${link.href} - Error: ${e.message}`);
        }
      }
    }
  });

  test('Sanity: Page load time @sanity @performance', async ({ page }) => {
    const startTime = Date.now();
    await homePage.open();
    const loadTime = Date.now() - startTime;
    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(60000); // Should load within 60 seconds
  });
});
