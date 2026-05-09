# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bug-hunter.spec.js >> Bug Hunter - Find All Possible Bugs >> Check form validation @bug @forms
- Location: tests\bug-hunter.spec.js:145:3

# Error details

```
Error: page.$$eval: TypeError: form.querySelectorAll is not a function. (In 'form.querySelectorAll('input:invalid, textarea:invalid, select:invalid')', 'form.querySelectorAll' is undefined)
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e4]:
      - navigation "Global" [ref=e5]:
        - link "side logo" [ref=e7] [cursor=pointer]:
          - /url: /
          - img "side logo" [ref=e8]
      - navigation [ref=e9]:
        - list [ref=e10]:
          - listitem [ref=e11]:
            - button "SERVICES" [ref=e12] [cursor=pointer]:
              - generic [ref=e13]: SERVICES
              - img [ref=e14]
          - listitem [ref=e16]:
            - link "PROJECTS" [ref=e17]:
              - /url: /projects
          - listitem [ref=e18]:
            - link "ABOUT" [ref=e19]:
              - /url: /about
          - listitem [ref=e20]:
            - link "CAREERS" [ref=e21]:
              - /url: /careers
          - listitem [ref=e22]:
            - link "NEWS & EVENTS" [ref=e23]:
              - /url: /news
          - listitem [ref=e24]:
            - link "LAB" [ref=e25]:
              - /url: /lab
        - generic [ref=e26]:
          - listitem [ref=e28]:
            - button "English" [ref=e29] [cursor=pointer]:
              - text: English
              - img [ref=e30]
          - link "CONTACT" [ref=e32]:
            - /url: /contact
            - button "CONTACT" [ref=e33] [cursor=pointer]
  - main [ref=e34]:
    - generic [ref=e35]:
      - img "side-ptw" [ref=e37]
      - img "ptw-side" [ref=e39]
      - generic [ref=e40]:
        - generic [ref=e41]:
          - heading "TELL US YOUR STORY" [level=3] [ref=e42]
          - heading "안녕하세요" [level=2] [ref=e43]
        - generic [ref=e44]:
          - generic [ref=e45]:
            - generic [ref=e46]:
              - generic:
                - text: First Name
                - img
              - textbox [active] [ref=e47]
              - paragraph [ref=e48]: Please enter a name consisting of three or more characters.
            - generic [ref=e49]:
              - generic:
                - text: Last Name
                - img
              - textbox [ref=e50]
              - paragraph [ref=e51]: Please enter a name consisting of three or more characters.
          - generic [ref=e52]:
            - generic [ref=e53]:
              - generic:
                - text: Email Address
                - img
              - textbox [ref=e54]
              - paragraph [ref=e55]: Please enter a valid email address.
            - generic [ref=e56]:
              - generic: Telephone
              - textbox [ref=e57]
          - generic [ref=e60] [cursor=pointer]:
            - generic [ref=e61]: Where did you hear about us?
            - img "side-ptw" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - generic [ref=e67] [cursor=pointer]:
                - generic [ref=e68]:
                  - text: Location
                  - img [ref=e69]
                - img "side-ptw" [ref=e72]
              - paragraph [ref=e73]: Please select a Location.
            - generic [ref=e74]:
              - generic: Company / Organization
              - textbox [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e78] [cursor=pointer]:
              - generic [ref=e79]:
                - text: Which industry best describes your company?
                - img [ref=e80]
              - img "side-ptw" [ref=e83]
            - paragraph [ref=e85]: Please select an industry
          - generic [ref=e86]:
            - generic [ref=e88] [cursor=pointer]:
              - generic [ref=e89]:
                - text: Nature Of Enquiry
                - img [ref=e90]
              - img "side-ptw" [ref=e93]
            - paragraph [ref=e95]: Please select Nature Of Enquiry.
          - generic [ref=e96]:
            - generic:
              - text: Message
              - img
            - textbox [ref=e97]
            - paragraph [ref=e98]: Please enter a message consisting of twenty or more characters.
          - generic [ref=e99]:
            - generic [ref=e100]:
              - checkbox "By ticking this box, I give consent to process my personal data provided in accordance with thePrivacy Policy." [ref=e101] [cursor=pointer]
              - generic [ref=e102]:
                - text: By ticking this box, I give consent to process my personal data provided in accordance with the
                - link "Privacy Policy." [ref=e103]:
                  - /url: https://www.side.inc/privacy-policy
            - paragraph [ref=e105]: Please agree to the Privacy Policy.
          - generic [ref=e107]:
            - iframe [ref=e113]:
              - generic [ref=f1e2]:
                - generic [ref=f1e3]:
                  - checkbox "I'm not a robot" [ref=f1e7]
                  - generic [ref=f1e11]: I'm not a robot
                - generic [ref=f1e15]: reCAPTCHA
            - button "Submit" [ref=e115] [cursor=pointer]
          - paragraph [ref=e117]: Please Validate CAPTCHA
    - generic [ref=e118]:
      - img "ptw-side" [ref=e119]
      - generic [ref=e121]:
        - heading "OUR LOCATIONS" [level=2] [ref=e122]
        - generic [ref=e123]:
          - generic [ref=e124]:
            - heading "EUROPE" [level=3] [ref=e125]
            - button [ref=e126] [cursor=pointer]:
              - img [ref=e127]
          - separator [ref=e129]
          - generic [ref=e131]:
            - generic [ref=e133]:
              - generic [ref=e134]:
                - img "side-ptw" [ref=e135]
                - generic [ref=e137]:
                  - button [disabled] [ref=e138]:
                    - img [ref=e139]
                  - button [ref=e141] [cursor=pointer]:
                    - img [ref=e142]
              - generic [ref=e144]:
                - heading "PARIS" [level=3] [ref=e145]
                - paragraph [ref=e146]: "72 Rue Sadi Carnot 92170 Vanves France. Phone: +33 7 83 41 05 73"
            - generic [ref=e148]:
              - generic [ref=e149]:
                - img "side-ptw" [ref=e150]
                - generic [ref=e152]:
                  - button [disabled] [ref=e153]:
                    - img [ref=e154]
                  - button [ref=e156] [cursor=pointer]:
                    - img [ref=e157]
              - generic [ref=e159]:
                - heading "LONDON" [level=3] [ref=e160]
                - paragraph [ref=e161]: "Unit A12, Tileyard London, 105 Blundell Street - King's Cross, London N7 9BN, United Kingdom. Phone: +44 (0)20 76 314 800"
            - generic [ref=e163]:
              - generic [ref=e164]:
                - img "side-ptw" [ref=e165]
                - generic [ref=e167]:
                  - button [disabled] [ref=e168]:
                    - img [ref=e169]
                  - button [ref=e171] [cursor=pointer]:
                    - img [ref=e172]
              - generic [ref=e174]:
                - heading "BRAGA" [level=3] [ref=e175]
                - paragraph [ref=e176]: Centro Empresarial de Ferreiros, Rua Professor Henrique Barros Lote B5, 4705-319 Ferreiros, Braga, Portugal
        - generic [ref=e177]:
          - generic [ref=e178]:
            - heading "ASIA" [level=3] [ref=e179]
            - button [ref=e180] [cursor=pointer]:
              - img [ref=e181]
          - separator [ref=e183]
        - generic [ref=e184]:
          - generic [ref=e185]:
            - heading "NORTH AMERICA" [level=3] [ref=e186]
            - button [ref=e187] [cursor=pointer]:
              - img [ref=e188]
          - separator [ref=e190]
        - generic [ref=e191]:
          - generic [ref=e192]:
            - heading "SOUTH AMERICA" [level=3] [ref=e193]
            - button [ref=e194] [cursor=pointer]:
              - img [ref=e195]
          - separator [ref=e197]
      - generic [ref=e199]:
        - img "ptw-side" [ref=e201]
        - generic [ref=e202]:
          - link "side-ptw" [ref=e204]:
            - /url: /
            - img "side-ptw" [ref=e205]
          - generic [ref=e207]:
            - list [ref=e209]:
              - separator [ref=e210]
              - listitem [ref=e211]:
                - link "PROJECTS" [ref=e212]:
                  - /url: /projects
              - listitem [ref=e213]:
                - link "ABOUT" [ref=e214]:
                  - /url: /about
              - listitem [ref=e215]:
                - link "CAREERS" [ref=e216]:
                  - /url: /careers
              - listitem [ref=e217]:
                - link "NEWS & EVENTS" [ref=e218]:
                  - /url: /news
              - listitem [ref=e219]:
                - link "LAB" [ref=e220]:
                  - /url: /lab
            - generic [ref=e221]:
              - paragraph [ref=e222]: SERVICES
              - list [ref=e223]:
                - listitem [ref=e224]:
                  - link "GAME DEVELOPMENT" [ref=e225]:
                    - /url: /services/game-development
                - listitem [ref=e226]:
                  - link "QUALITY ASSURANCE" [ref=e227]:
                    - /url: /services/quality-assurance
                - listitem [ref=e228]:
                  - link "ART PRODUCTION" [ref=e229]:
                    - /url: /services/art-production
                - listitem [ref=e230]:
                  - link "LOCALIZATION" [ref=e231]:
                    - /url: /services/localization
                - listitem [ref=e232]:
                  - link "AUDIO PRODUCTION" [ref=e233]:
                    - /url: /services/audio-production
                - listitem [ref=e234]:
                  - link "PLAYER SUPPORT" [ref=e235]:
                    - /url: /services/player-support
                - listitem [ref=e236]:
                  - link "LOCALIZATION QA" [ref=e237]:
                    - /url: /services/localization-qa
                - listitem [ref=e238]:
                  - link "DATASETS" [ref=e239]:
                    - /url: /services/datasets
                - listitem [ref=e240]:
                  - link "IT" [ref=e241]:
                    - /url: /services/it-services
        - generic [ref=e242]:
          - generic [ref=e244]:
            - heading "N'HÉSITEZ PAS!" [level=3] [ref=e245]
            - link "GET IN TOUCH" [ref=e248]:
              - /url: /contact
            - generic [ref=e249]:
              - link [ref=e250]:
                - /url: https://www.linkedin.com/company/sideglobal
                - img [ref=e251]
              - link [ref=e255]:
                - /url: https://www.instagram.com/sideglobal
                - img [ref=e256]
              - link [ref=e260]:
                - /url: https://www.youtube.com/@sideglobal
                - img [ref=e261]
              - link [ref=e264]:
                - /url: https://x.com/sideglobal
                - img [ref=e265]
              - link [ref=e267]:
                - /url: https://www.artstation.com/sideglobal
                - img [ref=e268]
          - generic [ref=e273]:
            - paragraph [ref=e274]:
              - link "CSR POLICY (INDIA)" [ref=e275]:
                - /url: /Corporate Social Responsibility_V6.pdf
            - paragraph [ref=e276]:
              - link "TERMS OF USE" [ref=e277]:
                - /url: https://side.inc/website-terms-of-usage
            - paragraph [ref=e278]:
              - link "PRIVACY POLICY" [ref=e279]:
                - /url: https://side.inc/privacy-policy
            - paragraph [ref=e280]:
              - link "POLICIES" [ref=e281]:
                - /url: https://side.inc/modern-slavery-statement
            - paragraph [ref=e282]:
              - link "POLE TO WIN HOLDINGS" [ref=e283]:
                - /url: https://www.phd.inc/en/index.html
            - paragraph [ref=e284]: © SIDE 2026. ALL RIGHTS RESERVED.
  - region "Notifications Alt+T"
  - generic [ref=e286]:
    - generic [ref=e287]:
      - img "side-ptw" [ref=e288]
      - paragraph [ref=e290]:
        - text: Our website uses cookies. By continuing, we assume your permission to deploy cookies as detailed in our
        - link "Privacy Policy" [ref=e291] [cursor=pointer]:
          - /url: /privacy-policy
    - generic [ref=e293]:
      - button "ACCEPT ALL" [ref=e294] [cursor=pointer]:
        - text: ACCEPT ALL
        - img [ref=e295]
      - button "DECLINE" [ref=e297] [cursor=pointer]:
        - generic [ref=e298]: DECLINE
      - button "Video preview" [ref=e299] [cursor=pointer]:
        - img "Video preview" [ref=e300]
```

# Test source

```ts
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
  89  |     expect(brokenImages.length).toBe(0);
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
> 163 |         const validationErrors = await page.$$eval('form', form => {
      |                                             ^ Error: page.$$eval: TypeError: form.querySelectorAll is not a function. (In 'form.querySelectorAll('input:invalid, textarea:invalid, select:invalid')', 'form.querySelectorAll' is undefined)
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
  190 |     // Check for images without alt text
  191 |     const imagesWithoutAlt = await page.$$eval('img', imgs => {
  192 |       return imgs.filter(img => !img.alt || img.alt.trim() === '')
  193 |         .map(img => ({ src: img.src, className: img.className }));
  194 |     });
  195 |     
  196 |     if (imagesWithoutAlt.length > 0) {
  197 |       issues.push({ type: 'Missing alt text', count: imagesWithoutAlt.length, items: imagesWithoutAlt.slice(0, 5) });
  198 |       console.log(`BUG: ${imagesWithoutAlt.length} images without alt text`);
  199 |     }
  200 |     
  201 |     // Check for empty links
  202 |     const emptyLinks = await page.$$eval('a', links => {
  203 |       return links.filter(a => (!a.textContent || a.textContent.trim() === '') && !a.querySelector('img'))
  204 |         .map(a => ({ href: a.href, className: a.className }));
  205 |     });
  206 |     
  207 |     if (emptyLinks.length > 0) {
  208 |       issues.push({ type: 'Empty links', count: emptyLinks.length, items: emptyLinks.slice(0, 5) });
  209 |       console.log(`BUG: ${emptyLinks.length} empty links`);
  210 |     }
  211 |     
  212 |     // Check for missing form labels
  213 |     const inputsWithoutLabels = await page.$$eval('input, textarea, select', inputs => {
  214 |       return Array.from(inputs).filter(input => {
  215 |         const id = input.id;
  216 |         const hasLabel = id && document.querySelector(`label[for="${id}"]`);
  217 |         const hasAriaLabel = input.hasAttribute('aria-label') || input.hasAttribute('aria-labelledby');
  218 |         return !hasLabel && !hasAriaLabel;
  219 |       }).map(input => ({ type: input.type, name: input.name }));
  220 |     });
  221 |     
  222 |     if (inputsWithoutLabels.length > 0) {
  223 |       issues.push({ type: 'Inputs without labels', count: inputsWithoutLabels.length, items: inputsWithoutLabels.slice(0, 5) });
  224 |       console.log(`BUG: ${inputsWithoutLabels.length} inputs without labels`);
  225 |     }
  226 |     
  227 |     if (issues.length > 0) {
  228 |       console.log('ACCESSIBILITY ISSUES FOUND:', JSON.stringify(issues, null, 2));
  229 |     }
  230 |   });
  231 | 
  232 |   test('Check performance issues @bug @performance', async ({ page }) => {
  233 |     console.log('Starting: Performance check');
  234 |     
  235 |     const metrics = [];
  236 |     
  237 |     await page.goto('https://side.inc', { waitUntil: 'networkidle', timeout: 60000 });
  238 |     
  239 |     const performanceTiming = await page.evaluate(() => {
  240 |       const timing = performance.timing;
  241 |       return {
  242 |         domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
  243 |         fullyLoaded: timing.loadEventEnd - timing.navigationStart,
  244 |         dns: timing.domainLookupEnd - timing.domainLookupStart,
  245 |         tcp: timing.connectEnd - timing.connectStart,
  246 |         ttfb: timing.responseStart - timing.navigationStart
  247 |       };
  248 |     });
  249 |     
  250 |     console.log('Performance metrics:', performanceTiming);
  251 |     
  252 |     if (performanceTiming.fullyLoaded > 10000) {
  253 |       console.log(`BUG: Slow page load time: ${performanceTiming.fullyLoaded}ms`);
  254 |     }
  255 |     
  256 |     if (performanceTiming.ttfb > 3000) {
  257 |       console.log(`BUG: Slow time to first byte: ${performanceTiming.ttfb}ms`);
  258 |     }
  259 |     
  260 |     metrics.push(performanceTiming);
  261 |   });
  262 | 
  263 |   test('Check SEO issues @bug @seo', async ({ page }) => {
```