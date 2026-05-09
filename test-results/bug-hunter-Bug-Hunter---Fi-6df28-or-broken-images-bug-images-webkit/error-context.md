# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bug-hunter.spec.js >> Bug Hunter - Find All Possible Bugs >> Check for broken images @bug @images
- Location: tests\bug-hunter.spec.js:64:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 9
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('Bug Hunter - Find All Possible Bugs', () => {
  4   |   test('Check for broken links @bug @links', async ({ page }) => {
  5   |     console.log('Starting: Broken links check');
  6   |     await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
  7   |     await page.waitForSelector('body', { timeout: 30000 });
  8   |     await page.waitForTimeout(3000);
  9   |     
  10  |     const links = await page.$$eval('a', anchors => 
  11  |       anchors.map(a => ({ href: a.href, text: a.textContent.trim() }))
  12  |         .filter(l => l.href && l.href.startsWith('http'))
  13  |     );
  14  |     
  15  |     console.log(`Checking ${links.length} links for broken status...`);
  16  |     const brokenLinks = [];
  17  |     
  18  |     for (const link of links.slice(0, 30)) {  // Check first 30 links
  19  |       try {
  20  |         const response = await page.request.get(link.href, { timeout: 10000 });
  21  |         if (response.status() >= 400) {
  22  |           brokenLinks.push({ ...link, status: response.status() });
  23  |           console.log(`BROKEN LINK: ${link.href} - Status: ${response.status()}`);
  24  |         }
  25  |       } catch (e) {
  26  |         brokenLinks.push({ ...link, error: e.message });
  27  |         console.log(`ERROR LINK: ${link.href} - ${e.message}`);
  28  |       }
  29  |     }
  30  |     
  31  |     if (brokenLinks.length > 0) {
  32  |       console.log(`FOUND ${brokenLinks.length} BROKEN LINKS:`);
  33  |       console.log(JSON.stringify(brokenLinks, null, 2));
  34  |     }
  35  |     expect(brokenLinks.length).toBe(0);
  36  |   });
  37  | 
  38  |   test('Check for console errors @bug @console', async ({ page }) => {
  39  |     console.log('Starting: Console errors check');
  40  |     const consoleErrors = [];
  41  |     
  42  |     page.on('console', msg => {
  43  |       if (msg.type() === 'error') {
  44  |         consoleErrors.push({ text: msg.text(), type: msg.type() });
  45  |         console.log(`CONSOLE ERROR: ${msg.text()}`);
  46  |       }
  47  |     });
  48  |     
  49  |     page.on('pageerror', error => {
  50  |       consoleErrors.push({ text: error.message, type: 'pageerror' });
  51  |       console.log(`PAGE ERROR: ${error.message}`);
  52  |     });
  53  |     
  54  |     await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
  55  |     await page.waitForSelector('body', { timeout: 30000 });
  56  |     await page.waitForTimeout(5000);  // Wait for any async errors
  57  |     
  58  |     if (consoleErrors.length > 0) {
  59  |       console.log(`FOUND ${consoleErrors.length} CONSOLE ERRORS`);
  60  |     }
  61  |     expect(consoleErrors.length).toBe(0);
  62  |   });
  63  | 
  64  |   test('Check for broken images @bug @images', async ({ page }) => {
  65  |     console.log('Starting: Broken images check');
  66  |     await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
  67  |     await page.waitForSelector('body', { timeout: 30000 });
  68  |     await page.waitForTimeout(3000);
  69  |     
  70  |     const brokenImages = await page.$$eval('img', images => {
  71  |       const broken = [];
  72  |       images.forEach((img, index) => {
  73  |         if (!img.src || img.src === '' || img.naturalWidth === 0) {
  74  |           broken.push({
  75  |             src: img.src,
  76  |             alt: img.alt,
  77  |             index: index,
  78  |             className: img.className
  79  |           });
  80  |         }
  81  |       });
  82  |       return broken;
  83  |     });
  84  |     
  85  |     if (brokenImages.length > 0) {
  86  |       console.log(`FOUND ${brokenImages.length} BROKEN IMAGES:`);
  87  |       console.log(JSON.stringify(brokenImages, null, 2));
  88  |     }
> 89  |     expect(brokenImages.length).toBe(0);
      |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  90  |   });
  91  | 
  92  |   test('Check responsive design breakpoints @bug @responsive', async ({ page }) => {
  93  |     console.log('Starting: Responsive design check');
  94  |     
  95  |     const viewports = [
  96  |       { width: 320, height: 568, name: 'iPhone SE' },
  97  |       { width: 375, height: 667, name: 'iPhone 8' },
  98  |       { width: 768, height: 1024, name: 'iPad' },
  99  |       { width: 1024, height: 768, name: 'iPad Landscape' },
  100 |       { width: 1280, height: 720, name: 'Desktop' },
  101 |       { width: 1920, height: 1080, name: 'Full HD' }
  102 |     ];
  103 |     
  104 |     const issues = [];
  105 |     
  106 |     for (const viewport of viewports) {
  107 |       await page.setViewportSize(viewport);
  108 |       await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
  109 |       await page.waitForSelector('body', { timeout: 30000 });
  110 |       await page.waitForTimeout(2000);
  111 |       
  112 |       // Check for horizontal scrollbar (layout overflow)
  113 |       const hasHorizontalScroll = await page.evaluate(() => {
  114 |         return document.body.scrollWidth > document.body.clientWidth;
  115 |       });
  116 |       
  117 |       if (hasHorizontalScroll) {
  118 |         issues.push({ viewport: viewport.name, issue: 'Horizontal scrollbar present' });
  119 |         console.log(`BUG: Horizontal scrollbar on ${viewport.name}`);
  120 |       }
  121 |       
  122 |       // Check for overlapping elements (basic check)
  123 |       const overlappingElements = await page.evaluate(() => {
  124 |         const elements = document.querySelectorAll('*');
  125 |         const overlapping = [];
  126 |         for (let i = 0; i < Math.min(elements.length, 100); i++) {
  127 |           const rect1 = elements[i].getBoundingClientRect();
  128 |           for (let j = i + 1; j < Math.min(elements.length, 100); j++) {
  129 |             const rect2 = elements[j].getBoundingClientRect();
  130 |             if (rect1.right > rect2.left && rect1.left < rect2.right &&
  131 |                 rect1.bottom > rect2.top && rect1.top < rect2.bottom) {
  132 |               // Elements overlap
  133 |             }
  134 |           }
  135 |         }
  136 |         return overlapping;
  137 |       });
  138 |     }
  139 |     
  140 |     if (issues.length > 0) {
  141 |       console.log(`FOUND ${issues.length} RESPONSIVE ISSUES`);
  142 |     }
  143 |   });
  144 | 
  145 |   test('Check form validation @bug @forms', async ({ page }) => {
  146 |     console.log('Starting: Form validation check');
  147 |     await page.goto('https://side.inc/contact', { waitUntil: 'domcontentloaded', timeout: 60000 });
  148 |     await page.waitForSelector('body', { timeout: 30000 });
  149 |     
  150 |     const forms = await page.$$('form');
  151 |     console.log(`Found ${forms.length} forms`);
  152 |     
  153 |     for (let i = 0; i < forms.length; i++) {
  154 |       console.log(`Checking form ${i + 1}...`);
  155 |       
  156 |       // Try submitting empty form
  157 |       const submitButton = await forms[i].$('button[type="submit"], button:has-text("Submit"), button:has-text("Send")');
  158 |       if (submitButton) {
  159 |         await submitButton.click();
  160 |         await page.waitForTimeout(1000);
  161 |         
  162 |         // Check for validation errors
  163 |         const validationErrors = await page.$$eval('form', form => {
  164 |           const errors = [];
  165 |           const inputs = form.querySelectorAll('input:invalid, textarea:invalid, select:invalid');
  166 |           inputs.forEach(input => {
  167 |             errors.push({
  168 |               type: input.type,
  169 |               name: input.name,
  170 |               required: input.required
  171 |             });
  172 |           });
  173 |           return errors;
  174 |         });
  175 |         
  176 |         if (validationErrors.length > 0) {
  177 |           console.log(`Form ${i + 1} validation errors:`, validationErrors);
  178 |         }
  179 |       }
  180 |     }
  181 |   });
  182 | 
  183 |   test('Check accessibility issues @bug @accessibility', async ({ page }) => {
  184 |     console.log('Starting: Accessibility check');
  185 |     await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
  186 |     await page.waitForSelector('body', { timeout: 30000 });
  187 |     
  188 |     const issues = [];
  189 |     
```