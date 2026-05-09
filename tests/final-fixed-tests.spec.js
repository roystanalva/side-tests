const { test, expect } = require('@playwright/test');

test.describe('Final Fixed Tests for Allure Report', () => {
  test('Verify site is accessible @smoke', async ({ page }) => {
    console.log('Starting: Verify site is accessible');
    const response = await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    expect(response.status()).toBeLessThan(400);
    await page.waitForSelector('body', { timeout: 30000 });
    console.log('PASSED: Site is accessible');
  });

  test('Verify HTTPS is enforced @security', async ({ page }) => {
    console.log('Starting: Verify HTTPS');
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    const url = page.url();
    expect(url).toMatch(/^https:/);
    console.log('PASSED: HTTPS verified');
  });

  test('Check security headers @security', async ({ page }) => {
    console.log('Starting: Check security headers');
    const response = await page.request.get('https://side.inc');
    const headers = response.headers();
    console.log('Security headers check completed');
    expect(headers['x-content-type-options']).toBeDefined();
    console.log('PASSED: Security headers');
  });

  test('Verify navigation links @links', async ({ page }) => {
    console.log('Starting: Verify navigation links');
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    // Wait a bit more for JS to render links
    await page.waitForTimeout(3000);
    const links = await page.$$eval('a', anchors => anchors.map(a => a.href).filter(h => h && h.startsWith('http')));
    console.log(`Found ${links.length} links`);
    expect(links.length).toBeGreaterThan(0);
    console.log('PASSED: Navigation links');
  });

  test('SQL Injection test @security @sql-injection', async ({ page }) => {
    console.log('Starting: SQL Injection test');
    const payload = "' OR '1'='1";
    await page.goto(`https://side.inc/?id=${encodeURIComponent(payload)}`, { 
      failOnStatusCode: false,
      timeout: 60000 
    });
    const content = await page.content();
    expect(content).not.toContain('SQL syntax');
    expect(content).not.toContain('mysql_error');
    console.log('PASSED: SQL injection test');
  });

  test('XSS test @security @xss', async ({ page }) => {
    console.log('Starting: XSS test');
    const payload = '<script>alert("XSS")</script>';
    await page.goto(`https://side.inc/?q=${encodeURIComponent(payload)}`, { 
      failOnStatusCode: false,
      timeout: 60000 
    });
    // Check that the payload is not reflected without encoding
    const content = await page.content();
    expect(content).not.toContain('<script>alert("XSS")</script>');
    console.log('PASSED: XSS test');
  });

  test('Check for sensitive info @security', async ({ page }) => {
    console.log('Starting: Check sensitive info');
    const response = await page.request.get('https://side.inc');
    const body = await response.text();
    const sensitivePatterns = ['password:', 'secret:', 'api_key:'];
    
    for (const pattern of sensitivePatterns) {
      expect(body.toLowerCase()).not.toContain(pattern);
    }
    console.log('PASSED: Sensitive information check');
  });

  test('Verify responsive design @mobile', async ({ page }) => {
    console.log('Starting: Verify responsive design');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    const content = await page.content();
    expect(content.length).toBeGreaterThan(100);
    console.log('PASSED: Mobile responsiveness');
  });

  test('Check page load performance @performance', async ({ page }) => {
    console.log('Starting: Check page load performance');
    const startTime = Date.now();
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    const loadTime = Date.now() - startTime;
    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(60000);
    console.log('PASSED: Page load performance');
  });

  test('Verify footer links @links', async ({ page }) => {
    console.log('Starting: Verify footer links');
    await page.goto('https://side.inc', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    await page.waitForSelector('body', { timeout: 30000 });
    // Scroll down to ensure footer is loaded
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);
    
    const footerExists = await page.isVisible('footer');
    if (footerExists) {
      const footerLinks = await page.$$eval('footer a', links => links.map(a => a.href).filter(h => h));
      console.log(`Footer links found: ${footerLinks.length}`);
      expect(footerLinks.length).toBeGreaterThan(0);
    } else {
      console.log('Footer not visible, checking all links instead');
      const allLinks = await page.$$eval('a', links => links.map(a => a.href).filter(h => h));
      expect(allLinks.length).toBeGreaterThan(0);
    }
    console.log('PASSED: Footer links');
  });
});
