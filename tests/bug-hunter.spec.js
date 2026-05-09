const { test, expect } = require('@playwright/test');

test.describe('Bug Hunter - Find All Possible Bugs', () => {
  test('Check for broken links @bug @links', async ({ page }) => {
    console.log('Starting: Broken links check');
    await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('body', { timeout: 30000 });
    await page.waitForTimeout(3000);
    
    const links = await page.$$eval('a', anchors => 
      anchors.map(a => ({ href: a.href, text: a.textContent.trim() }))
        .filter(l => l.href && l.href.startsWith('http'))
    );
    
    console.log(`Checking ${links.length} links for broken status...`);
    const brokenLinks = [];
    
    for (const link of links.slice(0, 30)) {  // Check first 30 links
      try {
        const response = await page.request.get(link.href, { timeout: 10000 });
        if (response.status() >= 400) {
          brokenLinks.push({ ...link, status: response.status() });
          console.log(`BROKEN LINK: ${link.href} - Status: ${response.status()}`);
        }
      } catch (e) {
        brokenLinks.push({ ...link, error: e.message });
        console.log(`ERROR LINK: ${link.href} - ${e.message}`);
      }
    }
    
    if (brokenLinks.length > 0) {
      console.log(`FOUND ${brokenLinks.length} BROKEN LINKS:`);
      console.log(JSON.stringify(brokenLinks, null, 2));
    }
    expect(brokenLinks.length).toBe(0);
  });

  test('Check for console errors @bug @console', async ({ page }) => {
    console.log('Starting: Console errors check');
    const consoleErrors = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push({ text: msg.text(), type: msg.type() });
        console.log(`CONSOLE ERROR: ${msg.text()}`);
      }
    });
    
    page.on('pageerror', error => {
      consoleErrors.push({ text: error.message, type: 'pageerror' });
      console.log(`PAGE ERROR: ${error.message}`);
    });
    
    await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('body', { timeout: 30000 });
    await page.waitForTimeout(5000);  // Wait for any async errors
    
    if (consoleErrors.length > 0) {
      console.log(`FOUND ${consoleErrors.length} CONSOLE ERRORS`);
    }
    expect(consoleErrors.length).toBe(0);
  });

  test('Check for broken images @bug @images', async ({ page }) => {
    console.log('Starting: Broken images check');
    await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('body', { timeout: 30000 });
    await page.waitForTimeout(3000);
    
    const brokenImages = await page.$$eval('img', images => {
      const broken = [];
      images.forEach((img, index) => {
        if (!img.src || img.src === '' || img.naturalWidth === 0) {
          broken.push({
            src: img.src,
            alt: img.alt,
            index: index,
            className: img.className
          });
        }
      });
      return broken;
    });
    
    if (brokenImages.length > 0) {
      console.log(`FOUND ${brokenImages.length} BROKEN IMAGES:`);
      console.log(JSON.stringify(brokenImages, null, 2));
    }
    expect(brokenImages.length).toBe(0);
  });

  test('Check responsive design breakpoints @bug @responsive', async ({ page }) => {
    console.log('Starting: Responsive design check');
    
    const viewports = [
      { width: 320, height: 568, name: 'iPhone SE' },
      { width: 375, height: 667, name: 'iPhone 8' },
      { width: 768, height: 1024, name: 'iPad' },
      { width: 1024, height: 768, name: 'iPad Landscape' },
      { width: 1280, height: 720, name: 'Desktop' },
      { width: 1920, height: 1080, name: 'Full HD' }
    ];
    
    const issues = [];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForSelector('body', { timeout: 30000 });
      await page.waitForTimeout(2000);
      
      // Check for horizontal scrollbar (layout overflow)
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.body.scrollWidth > document.body.clientWidth;
      });
      
      if (hasHorizontalScroll) {
        issues.push({ viewport: viewport.name, issue: 'Horizontal scrollbar present' });
        console.log(`BUG: Horizontal scrollbar on ${viewport.name}`);
      }
      
      // Check for overlapping elements (basic check)
      const overlappingElements = await page.evaluate(() => {
        const elements = document.querySelectorAll('*');
        const overlapping = [];
        for (let i = 0; i < Math.min(elements.length, 100); i++) {
          const rect1 = elements[i].getBoundingClientRect();
          for (let j = i + 1; j < Math.min(elements.length, 100); j++) {
            const rect2 = elements[j].getBoundingClientRect();
            if (rect1.right > rect2.left && rect1.left < rect2.right &&
                rect1.bottom > rect2.top && rect1.top < rect2.bottom) {
              // Elements overlap
            }
          }
        }
        return overlapping;
      });
    }
    
    if (issues.length > 0) {
      console.log(`FOUND ${issues.length} RESPONSIVE ISSUES`);
    }
  });

  test('Check form validation @bug @forms', async ({ page }) => {
    console.log('Starting: Form validation check');
    await page.goto('https://side.inc/contact', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('body', { timeout: 30000 });
    
    const forms = await page.$$('form');
    console.log(`Found ${forms.length} forms`);
    
    for (let i = 0; i < forms.length; i++) {
      console.log(`Checking form ${i + 1}...`);
      
      // Try submitting empty form
      const submitButton = await forms[i].$('button[type="submit"], button:has-text("Submit"), button:has-text("Send")');
      if (submitButton) {
        await submitButton.click();
        await page.waitForTimeout(1000);
        
        // Check for validation errors
        const validationErrors = await page.$$eval('form', form => {
          const errors = [];
          const inputs = form.querySelectorAll('input:invalid, textarea:invalid, select:invalid');
          inputs.forEach(input => {
            errors.push({
              type: input.type,
              name: input.name,
              required: input.required
            });
          });
          return errors;
        });
        
        if (validationErrors.length > 0) {
          console.log(`Form ${i + 1} validation errors:`, validationErrors);
        }
      }
    }
  });

  test('Check accessibility issues @bug @accessibility', async ({ page }) => {
    console.log('Starting: Accessibility check');
    await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('body', { timeout: 30000 });
    
    const issues = [];
    
    // Check for images without alt text
    const imagesWithoutAlt = await page.$$eval('img', imgs => {
      return imgs.filter(img => !img.alt || img.alt.trim() === '')
        .map(img => ({ src: img.src, className: img.className }));
    });
    
    if (imagesWithoutAlt.length > 0) {
      issues.push({ type: 'Missing alt text', count: imagesWithoutAlt.length, items: imagesWithoutAlt.slice(0, 5) });
      console.log(`BUG: ${imagesWithoutAlt.length} images without alt text`);
    }
    
    // Check for empty links
    const emptyLinks = await page.$$eval('a', links => {
      return links.filter(a => (!a.textContent || a.textContent.trim() === '') && !a.querySelector('img'))
        .map(a => ({ href: a.href, className: a.className }));
    });
    
    if (emptyLinks.length > 0) {
      issues.push({ type: 'Empty links', count: emptyLinks.length, items: emptyLinks.slice(0, 5) });
      console.log(`BUG: ${emptyLinks.length} empty links`);
    }
    
    // Check for missing form labels
    const inputsWithoutLabels = await page.$$eval('input, textarea, select', inputs => {
      return Array.from(inputs).filter(input => {
        const id = input.id;
        const hasLabel = id && document.querySelector(`label[for="${id}"]`);
        const hasAriaLabel = input.hasAttribute('aria-label') || input.hasAttribute('aria-labelledby');
        return !hasLabel && !hasAriaLabel;
      }).map(input => ({ type: input.type, name: input.name }));
    });
    
    if (inputsWithoutLabels.length > 0) {
      issues.push({ type: 'Inputs without labels', count: inputsWithoutLabels.length, items: inputsWithoutLabels.slice(0, 5) });
      console.log(`BUG: ${inputsWithoutLabels.length} inputs without labels`);
    }
    
    if (issues.length > 0) {
      console.log('ACCESSIBILITY ISSUES FOUND:', JSON.stringify(issues, null, 2));
    }
  });

  test('Check performance issues @bug @performance', async ({ page }) => {
    console.log('Starting: Performance check');
    
    const metrics = [];
    
    await page.goto('https://side.inc', { waitUntil: 'networkidle', timeout: 60000 });
    
    const performanceTiming = await page.evaluate(() => {
      const timing = performance.timing;
      return {
        domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
        fullyLoaded: timing.loadEventEnd - timing.navigationStart,
        dns: timing.domainLookupEnd - timing.domainLookupStart,
        tcp: timing.connectEnd - timing.connectStart,
        ttfb: timing.responseStart - timing.navigationStart
      };
    });
    
    console.log('Performance metrics:', performanceTiming);
    
    if (performanceTiming.fullyLoaded > 10000) {
      console.log(`BUG: Slow page load time: ${performanceTiming.fullyLoaded}ms`);
    }
    
    if (performanceTiming.ttfb > 3000) {
      console.log(`BUG: Slow time to first byte: ${performanceTiming.ttfb}ms`);
    }
    
    metrics.push(performanceTiming);
  });

  test('Check SEO issues @bug @seo', async ({ page }) => {
    console.log('Starting: SEO check');
    await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('body', { timeout: 30000 });
    
    const issues = [];
    
    // Check for title
    const title = await page.title();
    if (!title || title.trim() === '') {
      issues.push({ type: 'Missing page title' });
      console.log('BUG: Missing page title');
    } else {
      console.log(`Title: ${title}`);
    }
    
    // Check for meta description
    const metaDescription = await page.$eval('meta[name="description"]', meta => meta.content).catch(() => null);
    if (!metaDescription) {
      issues.push({ type: 'Missing meta description' });
      console.log('BUG: Missing meta description');
    }
    
    // Check for h1 tags
    const h1Count = await page.$$eval('h1', h1s => h1s.length);
    if (h1Count === 0) {
      issues.push({ type: 'Missing H1 tag' });
      console.log('BUG: Missing H1 tag');
    } else if (h1Count > 1) {
      issues.push({ type: 'Multiple H1 tags', count: h1Count });
      console.log(`BUG: ${h1Count} H1 tags found (should be 1)`);
    }
    
    // Check for canonical URL
    const canonical = await page.$('link[rel="canonical"]');
    if (!canonical) {
      issues.push({ type: 'Missing canonical URL' });
      console.log('BUG: Missing canonical URL');
    }
    
    if (issues.length > 0) {
      console.log('SEO ISSUES FOUND:', JSON.stringify(issues, null, 2));
    }
  });

  test('Check JavaScript errors @bug @js-errors', async ({ page }) => {
    console.log('Starting: JavaScript errors check');
    const jsErrors = [];
    
    page.on('pageerror', (error) => {
      jsErrors.push({ message: error.message, stack: error.stack });
      console.log(`JS ERROR: ${error.message}`);
    });
    
    await page.goto('https://side.inc', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(5000);
    
    // Try clicking various elements to trigger potential JS errors
    const buttons = await page.$$('button');
    console.log(`Found ${buttons.length} buttons, clicking first 5...`);
    
    for (let i = 0; i < Math.min(buttons.length, 5); i++) {
      try {
        await buttons[i].click();
        await page.waitForTimeout(500);
      } catch (e) {
        // Ignore click errors
      }
    }
    
    if (jsErrors.length > 0) {
      console.log(`FOUND ${jsErrors.length} JAVASCRIPT ERRORS`);
    }
  });

  test('Check SSL/TLS issues @bug @ssl', async ({ page }) => {
    console.log('Starting: SSL/TLS check');
    
    // Check if site redirects HTTP to HTTPS
    const httpResponse = await page.request.get('http://side.inc', { 
      maxRedirects: 0, 
      failOnStatusCode: false 
    }).catch(() => null);
    
    if (httpResponse) {
      const status = httpResponse.status();
      if (status !== 301 && status !== 302 && status !== 307 && status !== 308) {
        console.log(`BUG: HTTP does not redirect to HTTPS (status: ${status})`);
      }
    }
    
    // Check SSL certificate (basic check)
    const httpsResponse = await page.request.get('https://side.inc');
    const headers = httpsResponse.headers();
    
    if (!headers['strict-transport-security']) {
      console.log('BUG: Missing HSTS header');
    }
    
    console.log('SSL/TLS check completed');
  });

  test('Check content issues @bug @content', async ({ page }) => {
    console.log('Starting: Content check');
    await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('body', { timeout: 30000 });
    
    const issues = [];
    
    // Check for placeholder text or lorem ipsum
    const bodyText = await page.textContent('body');
    
    if (bodyText.includes('Lorem ipsum') || bodyText.includes('lorem ipsum')) {
      issues.push({ type: 'Lorem ipsum text found' });
      console.log('BUG: Lorem ipsum text found');
    }
    
    // Check for broken language (mixed languages, encoding issues)
    const hasEncodingIssues = /��|�/.test(bodyText);
    if (hasEncodingIssues) {
      issues.push({ type: 'Text encoding issues' });
      console.log('BUG: Text encoding issues detected');
    }
    
    // Check for placeholder text in content
    const placeholderPatterns = ['Click here', 'Lorem ipsum', 'Placeholder', '[Placeholder]'];
    for (const pattern of placeholderPatterns) {
      if (bodyText.includes(pattern)) {
        issues.push({ type: `Placeholder text found: ${pattern}` });
        console.log(`BUG: Placeholder text found: ${pattern}`);
      }
    }
    
    if (issues.length > 0) {
      console.log('CONTENT ISSUES FOUND:', JSON.stringify(issues, null, 2));
    }
  });
});
