const { test, expect } = require('@playwright/test');

test.describe('Debug - Explore side.inc Page Structure', () => {
  test('Get page title and structure @debug', async ({ page }) => {
    await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
    
    const title = await page.title();
    console.log('Page Title:', title);
    
    const url = page.url();
    console.log('Current URL:', url);
    
    // Get all navigation links
    const navLinks = await page.$$eval('nav a, [role="navigation"] a, header a', links => 
      links.map(a => ({ text: a.textContent.trim(), href: a.href })).filter(l => l.text)
    );
    console.log('Navigation Links:', JSON.stringify(navLinks, null, 2));
    
    // Check if footer exists
    const footerExists = await page.isVisible('footer');
    console.log('Footer visible:', footerExists);
    
    // Get footer links
    if (footerExists) {
      const footerLinks = await page.$$eval('footer a', links => 
        links.map(a => ({ text: a.textContent.trim(), href: a.href })).filter(l => l.text)
      );
      console.log('Footer Links:', JSON.stringify(footerLinks, null, 2));
    }
    
    // Get all images
    const images = await page.$$eval('img', imgs => imgs.map(img => ({ src: img.src, alt: img.alt })));
    console.log('Images count:', images.length);
    
    // Check for forms
    const forms = await page.$$('form');
    console.log('Forms count:', forms.length);
    
    // Get all buttons
    const buttons = await page.$$eval('button, a[role="button"]', btns => 
      btns.map(b => b.textContent.trim()).filter(t => t)
    );
    console.log('Buttons:', buttons);
    
    // Check viewport
    const viewport = page.viewportSize();
    console.log('Viewport:', viewport);
  });
});
