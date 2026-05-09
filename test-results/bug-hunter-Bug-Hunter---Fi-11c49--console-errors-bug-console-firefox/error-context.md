# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bug-hunter.spec.js >> Bug Hunter - Find All Possible Bugs >> Check for console errors @bug @console
- Location: tests\bug-hunter.spec.js:38:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 19
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
          - listitem [ref=e17]:
            - link "PROJECTS" [ref=e18] [cursor=pointer]:
              - /url: /projects
          - listitem [ref=e19]:
            - link "ABOUT" [ref=e20] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e21]:
            - link "CAREERS" [ref=e22] [cursor=pointer]:
              - /url: /careers
          - listitem [ref=e23]:
            - link "NEWS & EVENTS" [ref=e24] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e25]:
            - link "LAB" [ref=e26] [cursor=pointer]:
              - /url: /lab
        - generic [ref=e27]:
          - listitem [ref=e29]:
            - button "English" [ref=e30] [cursor=pointer]:
              - text: English
              - img [ref=e31]
          - link "CONTACT" [ref=e34] [cursor=pointer]:
            - /url: /contact
            - button "CONTACT" [ref=e35]
  - generic [ref=e38]:
    - heading "BRINGING YOUR VOICE TO THE WORLD" [level=2] [ref=e39]:
      - generic [ref=e40]: BRINGING
      - generic [ref=e41]: YOUR
      - generic [ref=e42]: VOICE
      - generic [ref=e43]: TO THE
      - generic [ref=e44]: WORLD
    - paragraph [ref=e45]: We bring games to life – by your side.
  - generic [ref=e47]:
    - generic [ref=e48]:
      - heading "GAMES BROUGHT TO LIFE" [level=2] [ref=e49]:
        - generic [ref=e50]: GAMES
        - generic [ref=e51]: BROUGHT
        - generic [ref=e52]: TO
        - generic [ref=e53]: LIFE
      - paragraph [ref=e54]:
        - generic [ref=e55]: For over 30 years, our award-winning team of technical and creative experts have been partnering up with some of the best to craft incredible gaming experiences. We work in every genre and on every platform.
      - link "VIEW PROJECTS" [ref=e59] [cursor=pointer]:
        - /url: /projects
    - link "project image 2 project image 2 RESIDENT EVIL REQUIEM" [ref=e62] [cursor=pointer]:
      - /url: /projects/resident-evil-requiem
      - generic [ref=e63]:
        - img "project image 2" [ref=e64]
        - img "project image 2" [ref=e65]
      - heading "RESIDENT EVIL REQUIEM" [level=3] [ref=e67]
  - generic [ref=e74]:
    - heading "OUR PARTNERS" [level=2] [ref=e75]:
      - generic [ref=e76]: OUR PARTNERS
    - generic [ref=e77]:
      - generic:
        - img "side-ptw" [ref=e78]
        - img "side-ptw" [ref=e79]
      - generic [ref=e80]:
        - generic [ref=e82]:
          - img "partner-logo" [ref=e85]
          - img "partner-logo" [ref=e88]
          - img "partner-logo" [ref=e91]
          - img "partner-logo" [ref=e94]
          - img "partner-logo" [ref=e97]
          - img "partner-logo" [ref=e100]
          - img "partner-logo" [ref=e103]
          - img "partner-logo" [ref=e106]
          - img "partner-logo" [ref=e109]
          - img "partner-logo" [ref=e112]
          - img "partner-logo" [ref=e115]
          - img "partner-logo" [ref=e118]
          - img "partner-logo" [ref=e121]
          - img "partner-logo" [ref=e124]
          - img "partner-logo" [ref=e127]
          - img "partner-logo" [ref=e130]
          - img "partner-logo" [ref=e133]
          - img "partner-logo" [ref=e136]
          - img "partner-logo" [ref=e139]
          - img "partner-logo" [ref=e142]
          - img "partner-logo" [ref=e145]
          - img "partner-logo" [ref=e148]
          - img "partner-logo" [ref=e151]
          - img "partner-logo" [ref=e154]
          - img "partner-logo" [ref=e157]
          - img "partner-logo" [ref=e160]
          - img "partner-logo" [ref=e163]
          - img "partner-logo" [ref=e166]
          - img "partner-logo" [ref=e169]
          - img "partner-logo" [ref=e172]
          - img "partner-logo" [ref=e175]
          - img "partner-logo" [ref=e178]
          - img "partner-logo" [ref=e181]
          - img "partner-logo" [ref=e184]
          - img "partner-logo" [ref=e187]
          - img "partner-logo" [ref=e190]
          - img "partner-logo" [ref=e193]
          - img "partner-logo" [ref=e196]
          - img "partner-logo" [ref=e199]
        - generic [ref=e200]:
          - button
          - button
          - button
  - generic [ref=e201]:
    - img "side-ptw" [ref=e203]
    - iframe [ref=e206]
    - generic [ref=e207]:
      - heading "WHAT WE DO" [level=2] [ref=e208]:
        - generic [ref=e209]: WHAT
        - generic [ref=e210]: WE DO
      - generic [ref=e213]:
        - link "game-development GAME DEVELOPMENT" [ref=e215] [cursor=pointer]:
          - /url: /services/game-development
          - img "game-development" [ref=e217]
          - heading "GAME DEVELOPMENT" [level=2] [ref=e218]:
            - generic [ref=e219]:
              - text: GAME
              - text: DEVELOPMENT
        - link "quality-assurance QUALITY ASSURANCE" [ref=e221] [cursor=pointer]:
          - /url: /services/quality-assurance
          - img "quality-assurance" [ref=e223]
          - heading "QUALITY ASSURANCE" [level=2] [ref=e224]:
            - generic [ref=e225]:
              - text: QUALITY
              - text: ASSURANCE
        - link "art-production ART PRODUCTION" [ref=e227] [cursor=pointer]:
          - /url: /services/art-production
          - img "art-production" [ref=e229]
          - heading "ART PRODUCTION" [level=2] [ref=e230]:
            - generic [ref=e231]:
              - text: ART
              - text: PRODUCTION
        - link "localization LOCALIZATION" [ref=e233] [cursor=pointer]:
          - /url: /services/localization
          - img "localization" [ref=e235]
          - heading "LOCALIZATION" [level=2] [ref=e236]:
            - generic [ref=e237]: LOCALIZATION
        - link "audio-production AUDIO PRODUCTION" [ref=e239] [cursor=pointer]:
          - /url: /services/audio-production
          - img "audio-production" [ref=e241]
          - heading "AUDIO PRODUCTION" [level=2] [ref=e242]:
            - generic [ref=e243]:
              - text: AUDIO
              - text: PRODUCTION
        - link "player-support PLAYER SUPPORT" [ref=e245] [cursor=pointer]:
          - /url: /services/player-support
          - img "player-support" [ref=e247]
          - heading "PLAYER SUPPORT" [level=2] [ref=e248]:
            - generic [ref=e249]:
              - text: PLAYER
              - text: SUPPORT
        - link "localization-qa LOCALIZATION QA" [ref=e251] [cursor=pointer]:
          - /url: /services/localization-qa
          - img "localization-qa" [ref=e253]
          - heading "LOCALIZATION QA" [level=2] [ref=e254]:
            - generic [ref=e255]:
              - text: LOCALIZATION
              - text: QA
        - link "datasets DATASETS" [ref=e257] [cursor=pointer]:
          - /url: /services/datasets
          - img "datasets" [ref=e259]
          - heading "DATASETS" [level=2] [ref=e260]:
            - generic [ref=e261]: DATASETS
        - link "it-services IT" [ref=e263] [cursor=pointer]:
          - /url: /services/it-services
          - img "it-services" [ref=e265]
          - heading "IT" [level=2] [ref=e266]:
            - generic [ref=e267]: IT
  - generic [ref=e268]:
    - generic [ref=e269]:
      - heading "FROM THE LAB" [level=2] [ref=e270]:
        - generic [ref=e271]: FROM
        - generic [ref=e272]: THE LAB
      - paragraph [ref=e273]:
        - generic [ref=e274]: Our team is always experimenting in the Lab, ready to share their insights and approach across all areas of game development.
    - generic [ref=e275]:
      - img "side-ptw" [ref=e277]
      - generic [ref=e279]:
        - generic [ref=e280]:
          - heading "ARTICLES" [level=2] [ref=e281]:
            - generic [ref=e282]: ARTICLES
          - link "VIEW ALL" [ref=e284] [cursor=pointer]:
            - /url: /lab
        - generic [ref=e285]:
          - 'link "lab image lab image April 22, 2026 Localization Program Management: The Missing Layer in Game Production LOCALIZATION" [ref=e287] [cursor=pointer]':
            - /url: /lab/localization-program-management-missing-layer-in-game-production
            - generic [ref=e289]:
              - img "lab image" [ref=e290]
              - img "lab image" [ref=e291]
              - generic [ref=e292]:
                - generic [ref=e293]:
                  - paragraph [ref=e294]: April 22, 2026
                  - 'heading "Localization Program Management: The Missing Layer in Game Production" [level=2] [ref=e295]'
                - button "LOCALIZATION" [ref=e296]:
                  - generic [ref=e297]: LOCALIZATION
          - link "lab image lab image April 15, 2026 Meet Our Player Support Team at Side Tokyo PLAYER SUPPORT" [ref=e299] [cursor=pointer]:
            - /url: /lab/meet-our-player-support-team-tokyo-japan
            - generic [ref=e301]:
              - img "lab image" [ref=e302]
              - img "lab image" [ref=e303]
              - generic [ref=e304]:
                - generic [ref=e305]:
                  - paragraph [ref=e306]: April 15, 2026
                  - heading "Meet Our Player Support Team at Side Tokyo" [level=2] [ref=e307]
                - button "PLAYER SUPPORT" [ref=e308]:
                  - generic [ref=e309]: PLAYER SUPPORT
      - generic [ref=e311]:
        - generic [ref=e312]:
          - heading "VIDEOS" [level=2] [ref=e313]:
            - generic [ref=e314]: VIDEOS
          - link "VIEW ALL" [ref=e316] [cursor=pointer]:
            - /url: /lab
        - generic [ref=e318]:
          - iframe [ref=e320]
          - generic [ref=e321]:
            - heading "Inside Side Taipei" [level=2] [ref=e322]
            - paragraph [ref=e323]: GAME DEVELOPMENT
  - generic [ref=e324]:
    - img "ptw-side" [ref=e326]
    - generic [ref=e328]:
      - heading "WE BELIEVE GREAT WORK GETS DONE BY TEAMS WHO LOVE WHAT THEY DO." [level=2] [ref=e329]
      - paragraph [ref=e330]: This is why we approach every solution with an all-minds-on-deck strategy that leverages our global workforce's strength, creativity, and passion.
      - link "LEARN MORE ABOUT US" [ref=e333] [cursor=pointer]:
        - /url: /about
    - img "side-ptw" [ref=e335]
  - generic [ref=e336]:
    - heading "JOIN 650+ DEVELOPERS AND PUBLISHERSTHAT WORK WITH US SIDE BY SIDE" [level=2] [ref=e337]:
      - generic [ref=e338]: JOIN 650+ DEVELOPERS AND PUBLISHERSTHAT WORK WITH US SIDE BY SIDE
    - img "Map" [ref=e340]
    - generic [ref=e341]:
      - link "JOIN OUR TEAM" [ref=e343] [cursor=pointer]:
        - /url: /careers
      - link "GET IN TOUCH" [ref=e344] [cursor=pointer]:
        - /url: /contact
        - text: GET IN TOUCH
        - img [ref=e345]
  - generic [ref=e347]:
    - heading [level=6]
    - generic [ref=e348]:
      - heading "LATEST NEWS & EVENTS" [level=2] [ref=e349]:
        - generic [ref=e350]: LATEST NEWS & EVENTS
      - link "VIEW ALL" [ref=e352] [cursor=pointer]:
        - /url: /news
    - generic [ref=e353]:
      - link "side-ptw-news-image side-ptw-news-image April 1, 2026 Gamescom Latam 2026 Event" [ref=e355] [cursor=pointer]:
        - /url: /news/gamescom-latam-2026
        - generic [ref=e357]:
          - img "side-ptw-news-image" [ref=e358]
          - img "side-ptw-news-image" [ref=e359]
          - generic [ref=e360]:
            - generic [ref=e361]:
              - paragraph [ref=e362]: April 1, 2026
              - heading "Gamescom Latam 2026" [level=2] [ref=e363]
            - button "Event" [ref=e364]:
              - generic [ref=e365]: Event
      - link "side-ptw-news-image side-ptw-news-image March 31, 2026 Side Co-Authors XDS 2026 Insights Report on the Future of External Development News" [ref=e367] [cursor=pointer]:
        - /url: /news/side-coauthors-xds-2026-insights-report
        - generic [ref=e369]:
          - img "side-ptw-news-image" [ref=e370]
          - img "side-ptw-news-image" [ref=e371]
          - generic [ref=e372]:
            - generic [ref=e373]:
              - paragraph [ref=e374]: March 31, 2026
              - heading "Side Co-Authors XDS 2026 Insights Report on the Future of External Development" [level=2] [ref=e375]
            - button "News" [ref=e376]:
              - generic [ref=e377]: News
      - link "side-ptw-news-image side-ptw-news-image March 24, 2026 iicon 2026 Event" [ref=e379] [cursor=pointer]:
        - /url: /news/iicon-2026
        - generic [ref=e381]:
          - img "side-ptw-news-image" [ref=e382]
          - img "side-ptw-news-image" [ref=e383]
          - generic [ref=e384]:
            - generic [ref=e385]:
              - paragraph [ref=e386]: March 24, 2026
              - heading "iicon 2026" [level=2] [ref=e387]
            - button "Event" [ref=e388]:
              - generic [ref=e389]: Event
  - contentinfo [ref=e390]:
    - generic [ref=e391]:
      - img "ptw-side" [ref=e393]
      - generic [ref=e394]:
        - link "side-ptw" [ref=e396] [cursor=pointer]:
          - /url: /
          - img "side-ptw" [ref=e397]
        - generic [ref=e399]:
          - list [ref=e401]:
            - separator [ref=e402]
            - listitem [ref=e403]:
              - link "PROJECTS" [ref=e404] [cursor=pointer]:
                - /url: /projects
            - listitem [ref=e405]:
              - link "ABOUT" [ref=e406] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e407]:
              - link "CAREERS" [ref=e408] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e409]:
              - link "NEWS & EVENTS" [ref=e410] [cursor=pointer]:
                - /url: /news
            - listitem [ref=e411]:
              - link "LAB" [ref=e412] [cursor=pointer]:
                - /url: /lab
          - generic [ref=e413]:
            - paragraph [ref=e414]: SERVICES
            - list [ref=e415]:
              - listitem [ref=e416]:
                - link "GAME DEVELOPMENT" [ref=e417] [cursor=pointer]:
                  - /url: /services/game-development
              - listitem [ref=e418]:
                - link "QUALITY ASSURANCE" [ref=e419] [cursor=pointer]:
                  - /url: /services/quality-assurance
              - listitem [ref=e420]:
                - link "ART PRODUCTION" [ref=e421] [cursor=pointer]:
                  - /url: /services/art-production
              - listitem [ref=e422]:
                - link "LOCALIZATION" [ref=e423] [cursor=pointer]:
                  - /url: /services/localization
              - listitem [ref=e424]:
                - link "AUDIO PRODUCTION" [ref=e425] [cursor=pointer]:
                  - /url: /services/audio-production
              - listitem [ref=e426]:
                - link "PLAYER SUPPORT" [ref=e427] [cursor=pointer]:
                  - /url: /services/player-support
              - listitem [ref=e428]:
                - link "LOCALIZATION QA" [ref=e429] [cursor=pointer]:
                  - /url: /services/localization-qa
              - listitem [ref=e430]:
                - link "DATASETS" [ref=e431] [cursor=pointer]:
                  - /url: /services/datasets
              - listitem [ref=e432]:
                - link "IT" [ref=e433] [cursor=pointer]:
                  - /url: /services/it-services
      - generic [ref=e434]:
        - generic [ref=e436]:
          - heading "SHOUT OUT!" [level=3] [ref=e437]
          - link "GET IN TOUCH" [ref=e440] [cursor=pointer]:
            - /url: /contact
          - generic [ref=e441]:
            - link [ref=e442] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/sideglobal
              - img [ref=e443]
            - link [ref=e449] [cursor=pointer]:
              - /url: https://www.instagram.com/sideglobal
              - img [ref=e450]
            - link [ref=e454] [cursor=pointer]:
              - /url: https://www.youtube.com/@sideglobal
              - img [ref=e455]
            - link [ref=e458] [cursor=pointer]:
              - /url: https://x.com/sideglobal
              - img [ref=e459]
            - link [ref=e461] [cursor=pointer]:
              - /url: https://www.artstation.com/sideglobal
              - img [ref=e462]
        - generic [ref=e467]:
          - paragraph [ref=e468]:
            - link "CSR POLICY (INDIA)" [ref=e469] [cursor=pointer]:
              - /url: /Corporate Social Responsibility_V6.pdf
          - paragraph [ref=e470]:
            - link "TERMS OF USE" [ref=e471] [cursor=pointer]:
              - /url: https://side.inc/website-terms-of-usage
          - paragraph [ref=e472]:
            - link "PRIVACY POLICY" [ref=e473] [cursor=pointer]:
              - /url: https://side.inc/privacy-policy
          - paragraph [ref=e474]:
            - link "POLICIES" [ref=e475] [cursor=pointer]:
              - /url: https://side.inc/modern-slavery-statement
          - paragraph [ref=e476]:
            - link "POLE TO WIN HOLDINGS" [ref=e477] [cursor=pointer]:
              - /url: https://www.phd.inc/en/index.html
          - paragraph [ref=e478]: © SIDE 2026. ALL RIGHTS RESERVED.
  - generic [ref=e480]:
    - generic [ref=e481]:
      - img "side-ptw" [ref=e482]
      - paragraph [ref=e484]:
        - text: Our website uses cookies. By continuing, we assume your permission to deploy cookies as detailed in our
        - link "Privacy Policy" [ref=e485] [cursor=pointer]:
          - /url: /privacy-policy
    - generic [ref=e487]:
      - button "ACCEPT ALL" [ref=e488] [cursor=pointer]:
        - text: ACCEPT ALL
        - img [ref=e489]
      - button "DECLINE" [ref=e491] [cursor=pointer]:
        - generic [ref=e492]: DECLINE
      - button "Video preview" [ref=e493] [cursor=pointer]:
        - img "Video preview" [ref=e494]
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
> 61  |     expect(consoleErrors.length).toBe(0);
      |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
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
```