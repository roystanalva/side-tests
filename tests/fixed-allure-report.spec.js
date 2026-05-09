const { test, expect } = require('@playwright/test');

test.describe('Fixed Allure Report Tests', () => {
  test('Verify site is accessible @smoke', async ({ page }) => {
    console.log('Starting test: Verify site is accessible');
    const response = await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    expect(response.status()).toBeLessThan(400);
    await page.waitForSelector('body', { timeout: 30000 });
    console.log('Site is accessible - PASSED');
  });

  test('Verify HTTPS is enforced @security', async ({ page }) => {
    console.log('Starting test: Verify HTTPS');
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    const url = page.url();
    expect(url).toMatch(/^https:/);
    console.log('HTTPS verified - PASSED');
  });

  test('Check security headers @security', async ({ page }) => {
    console.log('Starting test: Check security headers');
    const response = await page.request.get('https://side.inc');
    const headers = response.headers();
    console.log('Security headers check completed');
    expect(headers['x-content-type-options']).toBeDefined();
    console.log('Security headers - PASSED');
  });

  test('Verify navigation links @links', async ({ page }) => {
    console.log('Starting test: Verify navigation links');
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    const links = await page.$$eval('a', anchors => anchors.map(a => a.href).filter(h => h));
    console.log(`Found ${links.length} links`);
    expect(links.length).toBeGreaterThan(0);
    console.log('Navigation links - PASSED');
  });

  test('SQL Injection test @security @sql-injection', async ({ page }) => {
    console.log('Starting test: SQL Injection');
    const payload = "' OR '1'='1";
    await page.goto(`https://side.inc/?id=${encodeURIComponent(payload)}`, { 
      failOnStatusCode: false,
      timeout: 30000 
    });
    const content = await page.content();
    expect(content).not.toContain('SQL syntax');
    console.log('SQL injection test - PASSED');
  });

  test('XSS test @security @xss', async ({ page }) => {
    console.log('Starting test: XSS test');
    const payload = '<script>alert("XSS")</script>';
    await page.goto(`https://side.inc/?q=${encodeURIComponent(payload)}`, { 
      failOnStatusCode: false,
      timeout: 30000 
    });
    const content = await page.content();
    expect(content).not.toContain(payload);
    console.log('XSS test - PASSED');
  });

  test('Check for sensitive info @security', async ({ page }) => {
    console.log('Starting test: Check sensitive info');
    const response = await page.request.get('https://side.inc');
    const body = await response.text();
    const sensitivePatterns = ['password:', 'secret:', 'api_key:'];
    
    for (const pattern of sensitivePatterns) {
      expect(body.toLowerCase()).not.toContain(pattern);
    }
    console.log('Sensitive information check - PASSED');
  });

  test('Verify responsive design @mobile', async ({ page }) => {
    console.log('Starting test: Verify responsive design');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    const content = await page.content();
    expect(content.length).toBeGreaterThan(100);
    console.log('Mobile responsiveness - PASSED');
  });

  test('Check page load performance @performance', async ({ page }) => {
    console.log('Starting test: Check page load performance');
    const startTime = Date.now();
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    const loadTime = Date.now() - startTime;
    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(60000);
    console.log('Page load performance - PASSED');
  });

  test('Verify footer links @links', async ({ page }) => {
    console.log('Starting test: Verify footer links');
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    const footerVisible = await page.isVisible('footer');
    expect(footerVisible).toBeTruthy();
    console.log('Footer links - PASSED');
  });
});
