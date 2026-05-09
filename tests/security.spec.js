const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('Security and Penetration Tests', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test('Check for HTTPS @security', async ({ page }) => {
    const url = await homePage.getUrl();
    expect(url).toMatch(/^https:/);
  });

  test('Check security headers @security', async ({ page }) => {
    const response = await page.request.get('https://side.inc');
    const headers = response.headers();
    
    // Check for important security headers
    expect(headers['x-content-type-options']).toBeDefined();
    expect(headers['x-frame-options']).toBeDefined();
  });

  test('XSS protection test @security @penetration', async ({ page }) => {
    await page.goto('https://side.inc');
    // Try to inject script in URL parameters
    await page.goto('https://side.inc/?q=<script>alert("XSS")</script>');
    const content = await page.content();
    expect(content).not.toContain('<script>alert("XSS")</script>');
  });

  test('Check for sensitive information in response @security', async ({ page }) => {
    const response = await page.request.get('https://side.inc');
    const body = await response.text();
    const sensitivePatterns = ['password', 'secret', 'api_key', 'private_key'];
    
    for (const pattern of sensitivePatterns) {
      expect(body.toLowerCase()).not.toContain(pattern + ':');
    }
  });

  test('Verify no open redirects @security', async ({ page }) => {
    const response = await page.request.get('https://side.inc', {
      maxRedirects: 0,
      failOnStatusCode: false
    });
    expect(response.status()).not.toBe(302);
  });

  test('Check for clickjacking protection @security', async ({ page }) => {
    const response = await page.request.get('https://side.inc');
    const headers = response.headers();
    expect(headers['x-frame-options'] || headers['content-security-policy']).toBeDefined();
  });
});
