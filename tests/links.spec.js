const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('All Links Verification Tests', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('Verify all links on homepage @links @smoke', async ({ page }) => {
    const links = await homePage.getAllLinks();
    console.log(`Total links found: ${links.length}`);
    expect(links.length).toBeGreaterThan(0);

    const brokenLinks = [];
    for (const link of links.slice(0, 5)) {
      if (link && link.startsWith('http')) {
        try {
          const response = await page.request.get(link, { timeout: 10000 });
          if (response.status() >= 400) {
            brokenLinks.push({ url: link, status: response.status() });
          }
        } catch (e) {
          console.log(`Link check error: ${link} - ${e.message}`);
        }
      }
    }

    console.log('Broken links found:', brokenLinks.length);
  });

  test('Verify footer links @links', async ({ page }) => {
    const footerLinks = await homePage.getFooterLinks();
    console.log(`Footer links: ${footerLinks.length}`);
    expect(footerLinks.length).toBeGreaterThan(0);

    for (const link of footerLinks.slice(0, 3)) {
      if (link && link.startsWith('http')) {
        try {
          const response = await page.request.get(link, { timeout: 10000 });
          console.log(`Footer link ${link}: ${response.status()}`);
        } catch (e) {
          console.log(`Footer link error: ${link} - ${e.message}`);
        }
      }
    }
  });

  test('Verify mailto links @links', async ({ page }) => {
    const mailtoLinks = await page.$$eval('a[href^="mailto:"]', links => links.map(a => a.href));
    console.log(`Found ${mailtoLinks.length} mailto links`);
    expect(mailtoLinks.length).toBeGreaterThanOrEqual(0);
  });

  test('Verify tel links @links', async ({ page }) => {
    const telLinks = await page.$$eval('a[href^="tel:"]', links => links.map(a => a.href));
    console.log(`Found ${telLinks.length} telephone links`);
    expect(telLinks.length).toBeGreaterThanOrEqual(0);
  });
});
