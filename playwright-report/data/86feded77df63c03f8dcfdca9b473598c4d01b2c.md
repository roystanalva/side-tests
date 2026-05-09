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
Received: 57
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
    - heading "BRINGING YOUR STORY TO THE WORLD" [level=2] [ref=e39]:
      - generic [ref=e40]: BRINGING
      - generic [ref=e41]: YOUR
      - generic [ref=e42]: STORY
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
    - 'link "project image 1 project image 1 CLAIR OBSCUR: EXPEDITION 33" [ref=e62] [cursor=pointer]':
      - /url: /projects/clair-obscur-expedition-33
      - generic [ref=e63]:
        - img "project image 1" [ref=e64]
        - img "project image 1" [ref=e65]
      - 'heading "CLAIR OBSCUR: EXPEDITION 33" [level=3] [ref=e67]'
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
    - iframe [ref=e206]:
      
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
      - generic:
        - img "side-ptw"
      - generic [ref=e277]:
        - generic [ref=e278]:
          - heading "ARTICLES" [level=2] [ref=e279]:
            - generic [ref=e280]: ARTICLES
          - link "VIEW ALL" [ref=e282] [cursor=pointer]:
            - /url: /lab
        - generic [ref=e283]:
          - 'link "lab image lab image April 22, 2026 Localization Program Management: The Missing Layer in Game Production LOCALIZATION" [ref=e285] [cursor=pointer]':
            - /url: /lab/localization-program-management-missing-layer-in-game-production
            - generic [ref=e287]:
              - img "lab image" [ref=e288]
              - img "lab image" [ref=e289]
              - generic [ref=e290]:
                - generic [ref=e291]:
                  - paragraph [ref=e292]: April 22, 2026
                  - 'heading "Localization Program Management: The Missing Layer in Game Production" [level=2] [ref=e293]'
                - button "LOCALIZATION" [ref=e294]:
                  - generic [ref=e295]: LOCALIZATION
          - link "lab image lab image April 15, 2026 Meet Our Player Support Team at Side Tokyo PLAYER SUPPORT" [ref=e297] [cursor=pointer]:
            - /url: /lab/meet-our-player-support-team-tokyo-japan
            - generic [ref=e299]:
              - img "lab image" [ref=e300]
              - img "lab image" [ref=e301]
              - generic [ref=e302]:
                - generic [ref=e303]:
                  - paragraph [ref=e304]: April 15, 2026
                  - heading "Meet Our Player Support Team at Side Tokyo" [level=2] [ref=e305]
                - button "PLAYER SUPPORT" [ref=e306]:
                  - generic [ref=e307]: PLAYER SUPPORT
      - generic [ref=e309]:
        - generic [ref=e310]:
          - heading "VIDEOS" [level=2] [ref=e311]:
            - generic [ref=e312]: VIDEOS
          - link "VIEW ALL" [ref=e314] [cursor=pointer]:
            - /url: /lab
        - generic [ref=e316]:
          - iframe [ref=e318]:
            
          - generic [ref=e319]:
            - heading "Inside Side Taipei" [level=2] [ref=e320]
            - paragraph [ref=e321]: GAME DEVELOPMENT
  - generic [ref=e322]:
    - generic:
      - img "ptw-side"
    - generic [ref=e324]:
      - heading "WE BELIEVE GREAT WORK GETS DONE BY TEAMS WHO LOVE WHAT THEY DO." [level=2] [ref=e325]
      - paragraph [ref=e326]: This is why we approach every solution with an all-minds-on-deck strategy that leverages our global workforce's strength, creativity, and passion.
      - link "LEARN MORE ABOUT US" [ref=e329] [cursor=pointer]:
        - /url: /about
    - img "side-ptw" [ref=e331]
  - generic [ref=e332]:
    - heading "JOIN 650+ DEVELOPERS AND PUBLISHERSTHAT WORK WITH US SIDE BY SIDE" [level=2] [ref=e333]:
      - generic [ref=e334]: JOIN 650+ DEVELOPERS AND PUBLISHERSTHAT WORK WITH US SIDE BY SIDE
    - generic:
      - img "Map"
    - generic [ref=e335]:
      - link "JOIN OUR TEAM" [ref=e337] [cursor=pointer]:
        - /url: /careers
      - link "GET IN TOUCH" [ref=e338] [cursor=pointer]:
        - /url: /contact
        - text: GET IN TOUCH
        - img [ref=e339]
  - generic [ref=e341]:
    - heading [level=6]
    - generic [ref=e342]:
      - heading "LATEST NEWS & EVENTS" [level=2] [ref=e343]:
        - generic [ref=e344]: LATEST NEWS & EVENTS
      - link "VIEW ALL" [ref=e346] [cursor=pointer]:
        - /url: /news
    - generic [ref=e347]:
      - link "side-ptw-news-image side-ptw-news-image April 1, 2026 Gamescom Latam 2026 Event" [ref=e349] [cursor=pointer]:
        - /url: /news/gamescom-latam-2026
        - generic [ref=e351]:
          - img "side-ptw-news-image" [ref=e352]
          - img "side-ptw-news-image" [ref=e353]
          - generic [ref=e354]:
            - generic [ref=e355]:
              - paragraph [ref=e356]: April 1, 2026
              - heading "Gamescom Latam 2026" [level=2] [ref=e357]
            - button "Event" [ref=e358]:
              - generic [ref=e359]: Event
      - link "side-ptw-news-image side-ptw-news-image March 31, 2026 Side Co-Authors XDS 2026 Insights Report on the Future of External Development News" [ref=e361] [cursor=pointer]:
        - /url: /news/side-coauthors-xds-2026-insights-report
        - generic [ref=e363]:
          - img "side-ptw-news-image" [ref=e364]
          - img "side-ptw-news-image" [ref=e365]
          - generic [ref=e366]:
            - generic [ref=e367]:
              - paragraph [ref=e368]: March 31, 2026
              - heading "Side Co-Authors XDS 2026 Insights Report on the Future of External Development" [level=2] [ref=e369]
            - button "News" [ref=e370]:
              - generic [ref=e371]: News
      - link "side-ptw-news-image side-ptw-news-image March 24, 2026 iicon 2026 Event" [ref=e373] [cursor=pointer]:
        - /url: /news/iicon-2026
        - generic [ref=e375]:
          - img "side-ptw-news-image" [ref=e376]
          - img "side-ptw-news-image" [ref=e377]
          - generic [ref=e378]:
            - generic [ref=e379]:
              - paragraph [ref=e380]: March 24, 2026
              - heading "iicon 2026" [level=2] [ref=e381]
            - button "Event" [ref=e382]:
              - generic [ref=e383]: Event
  - contentinfo [ref=e384]:
    - generic [ref=e385]:
      - generic:
        - img "ptw-side"
      - generic [ref=e386]:
        - link "side-ptw" [ref=e388] [cursor=pointer]:
          - /url: /
          - img "side-ptw"
        - generic [ref=e390]:
          - list [ref=e392]:
            - separator [ref=e393]
            - listitem [ref=e394]:
              - link "PROJECTS" [ref=e395] [cursor=pointer]:
                - /url: /projects
            - listitem [ref=e396]:
              - link "ABOUT" [ref=e397] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e398]:
              - link "CAREERS" [ref=e399] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e400]:
              - link "NEWS & EVENTS" [ref=e401] [cursor=pointer]:
                - /url: /news
            - listitem [ref=e402]:
              - link "LAB" [ref=e403] [cursor=pointer]:
                - /url: /lab
          - generic [ref=e404]:
            - paragraph [ref=e405]: SERVICES
            - list [ref=e406]:
              - listitem [ref=e407]:
                - link "GAME DEVELOPMENT" [ref=e408] [cursor=pointer]:
                  - /url: /services/game-development
              - listitem [ref=e409]:
                - link "QUALITY ASSURANCE" [ref=e410] [cursor=pointer]:
                  - /url: /services/quality-assurance
              - listitem [ref=e411]:
                - link "ART PRODUCTION" [ref=e412] [cursor=pointer]:
                  - /url: /services/art-production
              - listitem [ref=e413]:
                - link "LOCALIZATION" [ref=e414] [cursor=pointer]:
                  - /url: /services/localization
              - listitem [ref=e415]:
                - link "AUDIO PRODUCTION" [ref=e416] [cursor=pointer]:
                  - /url: /services/audio-production
              - listitem [ref=e417]:
                - link "PLAYER SUPPORT" [ref=e418] [cursor=pointer]:
                  - /url: /services/player-support
              - listitem [ref=e419]:
                - link "LOCALIZATION QA" [ref=e420] [cursor=pointer]:
                  - /url: /services/localization-qa
              - listitem [ref=e421]:
                - link "DATASETS" [ref=e422] [cursor=pointer]:
                  - /url: /services/datasets
              - listitem [ref=e423]:
                - link "IT" [ref=e424] [cursor=pointer]:
                  - /url: /services/it-services
      - generic [ref=e425]:
        - generic [ref=e427]:
          - heading "謝辞" [level=3] [ref=e428]
          - link "GET IN TOUCH" [ref=e431] [cursor=pointer]:
            - /url: /contact
          - generic [ref=e432]:
            - link [ref=e433] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/sideglobal
              - img [ref=e434]
            - link [ref=e440] [cursor=pointer]:
              - /url: https://www.instagram.com/sideglobal
              - img [ref=e441]
            - link [ref=e445] [cursor=pointer]:
              - /url: https://www.youtube.com/@sideglobal
              - img [ref=e446]
            - link [ref=e449] [cursor=pointer]:
              - /url: https://x.com/sideglobal
              - img [ref=e450]
            - link [ref=e452] [cursor=pointer]:
              - /url: https://www.artstation.com/sideglobal
              - img [ref=e453]
        - generic [ref=e458]:
          - paragraph [ref=e459]:
            - link "CSR POLICY (INDIA)" [ref=e460] [cursor=pointer]:
              - /url: /Corporate Social Responsibility_V6.pdf
          - paragraph [ref=e461]:
            - link "TERMS OF USE" [ref=e462] [cursor=pointer]:
              - /url: https://side.inc/website-terms-of-usage
          - paragraph [ref=e463]:
            - link "PRIVACY POLICY" [ref=e464] [cursor=pointer]:
              - /url: https://side.inc/privacy-policy
          - paragraph [ref=e465]:
            - link "POLICIES" [ref=e466] [cursor=pointer]:
              - /url: https://side.inc/modern-slavery-statement
          - paragraph [ref=e467]:
            - link "POLE TO WIN HOLDINGS" [ref=e468] [cursor=pointer]:
              - /url: https://www.phd.inc/en/index.html
          - paragraph [ref=e469]: © SIDE 2026. ALL RIGHTS RESERVED.
  - generic [ref=e471]:
    - generic [ref=e472]:
      - img "side-ptw" [ref=e473]
      - paragraph [ref=e475]:
        - text: Our website uses cookies. By continuing, we assume your permission to deploy cookies as detailed in our
        - link "Privacy Policy" [ref=e476] [cursor=pointer]:
          - /url: /privacy-policy
    - generic [ref=e478]:
      - button "ACCEPT ALL" [ref=e479] [cursor=pointer]:
        - text: ACCEPT ALL
        - img [ref=e480]
      - button "DECLINE" [ref=e482] [cursor=pointer]:
        - generic [ref=e483]: DECLINE
      - button "Video preview" [ref=e484] [cursor=pointer]:
        - img "Video preview" [ref=e485]
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