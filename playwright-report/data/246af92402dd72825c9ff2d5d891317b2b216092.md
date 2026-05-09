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
Received: 6
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
        - button [ref=e10] [cursor=pointer]:
          - img [ref=e11]
        - generic [ref=e14]:
          - generic [ref=e15] [cursor=pointer]:
            - text: SERVICES
            - img [ref=e16]
          - separator [ref=e18]
          - generic [ref=e19] [cursor=pointer]: PROJECTS
          - separator [ref=e20]
          - generic [ref=e21] [cursor=pointer]: ABOUT
          - separator [ref=e22]
          - generic [ref=e23] [cursor=pointer]: CAREERS
          - separator [ref=e24]
          - generic [ref=e25] [cursor=pointer]: NEWS & EVENTS
          - separator [ref=e26]
          - generic [ref=e27] [cursor=pointer]: LAB
          - separator [ref=e28]
          - generic [ref=e30]:
            - button "English" [ref=e31] [cursor=pointer]
            - img [ref=e32] [cursor=pointer]
          - button "CONTACT" [ref=e35] [cursor=pointer]:
            - generic [ref=e36]: CONTACT
      - navigation
  - generic [ref=e39]:
    - heading "BRINGING YOUR STORY TO THE WORLD" [level=2] [ref=e40]:
      - generic [ref=e41]: BRINGING
      - generic [ref=e42]: YOUR
      - generic [ref=e43]: STORY
      - generic [ref=e44]: TO THE
      - generic [ref=e45]: WORLD
    - paragraph [ref=e46]: We bring games to life – by your side.
  - generic [ref=e48]:
    - generic [ref=e49]:
      - heading "GAMES BROUGHT TO LIFE" [level=2] [ref=e50]:
        - generic [ref=e51]: GAMES
        - generic [ref=e52]: BROUGHT
        - generic [ref=e53]: TO
        - generic [ref=e54]: LIFE
      - paragraph [ref=e55]:
        - generic [ref=e56]: For over 30 years, our award-winning team of technical and creative experts have been partnering up with some of the best to craft incredible gaming experiences. We work in every genre and on every platform.
      - link "VIEW PROJECTS" [ref=e60]:
        - /url: /projects
    - link "project image 2 project image 2 RESIDENT EVIL REQUIEM" [ref=e63]:
      - /url: /projects/resident-evil-requiem
      - generic [ref=e64]:
        - img "project image 2" [ref=e65]
        - img "project image 2" [ref=e66]
      - heading "RESIDENT EVIL REQUIEM" [level=3] [ref=e68]
  - generic [ref=e75]:
    - heading "OUR PARTNERS" [level=2] [ref=e76]:
      - generic [ref=e77]: OUR PARTNERS
    - generic [ref=e79]:
      - generic [ref=e81]:
        - img "partner-logo" [ref=e84]
        - img "partner-logo" [ref=e87]
        - img "partner-logo" [ref=e90]
        - img "partner-logo" [ref=e93]
        - img "partner-logo" [ref=e96]
        - img "partner-logo" [ref=e99]
        - img "partner-logo" [ref=e102]
        - img "partner-logo" [ref=e105]
        - img "partner-logo" [ref=e108]
        - img "partner-logo" [ref=e111]
        - img "partner-logo" [ref=e114]
        - img "partner-logo" [ref=e117]
        - img "partner-logo" [ref=e120]
        - img "partner-logo" [ref=e123]
        - img "partner-logo" [ref=e126]
        - img "partner-logo" [ref=e129]
        - img "partner-logo" [ref=e132]
        - img "partner-logo" [ref=e135]
        - img "partner-logo" [ref=e138]
        - img "partner-logo" [ref=e141]
        - img "partner-logo" [ref=e144]
        - img "partner-logo" [ref=e147]
        - img "partner-logo" [ref=e150]
        - img "partner-logo" [ref=e153]
        - img "partner-logo" [ref=e156]
        - img "partner-logo" [ref=e159]
        - img "partner-logo" [ref=e162]
        - img "partner-logo" [ref=e165]
        - img "partner-logo" [ref=e168]
        - img "partner-logo" [ref=e171]
        - img "partner-logo" [ref=e174]
        - img "partner-logo" [ref=e177]
        - img "partner-logo" [ref=e180]
        - img "partner-logo" [ref=e183]
        - img "partner-logo" [ref=e186]
        - img "partner-logo" [ref=e189]
        - img "partner-logo" [ref=e192]
        - img "partner-logo" [ref=e195]
        - img "partner-logo" [ref=e198]
      - generic [ref=e199]:
        - button
        - button
        - button
        - button
        - button
        - button
        - button
        - button
        - button
        - button
  - generic [ref=e200]:
    - img "side-ptw" [ref=e202]
    - iframe [ref=e205]:
      - generic "YouTube Video Player" [ref=f1e3]
    - generic [ref=e206]:
      - heading "WHAT WE DO" [level=2] [ref=e207]:
        - generic [ref=e208]: WHAT
        - generic [ref=e209]: WE DO
      - generic [ref=e212]:
        - link "game-development GAME DEVELOPMENT" [ref=e214] [cursor=pointer]:
          - /url: /services/game-development
          - img "game-development" [ref=e216]
          - heading "GAME DEVELOPMENT" [level=2] [ref=e217]:
            - generic [ref=e218]:
              - text: GAME
              - text: DEVELOPMENT
          - img [ref=e220]
        - link "quality-assurance QUALITY ASSURANCE" [ref=e223] [cursor=pointer]:
          - /url: /services/quality-assurance
          - img "quality-assurance" [ref=e225]
          - heading "QUALITY ASSURANCE" [level=2] [ref=e226]:
            - generic [ref=e227]:
              - text: QUALITY
              - text: ASSURANCE
          - img [ref=e229]
        - link "art-production ART PRODUCTION" [ref=e232] [cursor=pointer]:
          - /url: /services/art-production
          - img "art-production" [ref=e234]
          - heading "ART PRODUCTION" [level=2] [ref=e235]:
            - generic [ref=e236]:
              - text: ART
              - text: PRODUCTION
          - img [ref=e238]
        - link "localization LOCALIZATION" [ref=e241] [cursor=pointer]:
          - /url: /services/localization
          - img "localization" [ref=e243]
          - heading "LOCALIZATION" [level=2] [ref=e244]:
            - generic [ref=e245]: LOCALIZATION
          - img [ref=e247]
        - link "audio-production AUDIO PRODUCTION" [ref=e250] [cursor=pointer]:
          - /url: /services/audio-production
          - img "audio-production" [ref=e252]
          - heading "AUDIO PRODUCTION" [level=2] [ref=e253]:
            - generic [ref=e254]:
              - text: AUDIO
              - text: PRODUCTION
          - img [ref=e256]
        - link "player-support PLAYER SUPPORT" [ref=e259] [cursor=pointer]:
          - /url: /services/player-support
          - img "player-support" [ref=e261]
          - heading "PLAYER SUPPORT" [level=2] [ref=e262]:
            - generic [ref=e263]:
              - text: PLAYER
              - text: SUPPORT
          - img [ref=e265]
        - link "localization-qa LOCALIZATION QA" [ref=e268] [cursor=pointer]:
          - /url: /services/localization-qa
          - img "localization-qa" [ref=e270]
          - heading "LOCALIZATION QA" [level=2] [ref=e271]:
            - generic [ref=e272]:
              - text: LOCALIZATION
              - text: QA
          - img [ref=e274]
        - link "datasets DATASETS" [ref=e277] [cursor=pointer]:
          - /url: /services/datasets
          - img "datasets" [ref=e279]
          - heading "DATASETS" [level=2] [ref=e280]:
            - generic [ref=e281]: DATASETS
          - img [ref=e283]
        - link "it-services IT" [ref=e286] [cursor=pointer]:
          - /url: /services/it-services
          - img "it-services" [ref=e288]
          - heading "IT" [level=2] [ref=e289]:
            - generic [ref=e290]: IT
          - img [ref=e292]
  - generic [ref=e294]:
    - generic [ref=e295]:
      - heading "FROM THE LAB" [level=2] [ref=e296]:
        - generic [ref=e297]: FROM
        - generic [ref=e298]: THE LAB
      - paragraph [ref=e299]:
        - generic [ref=e300]: Our team is always experimenting in the Lab, ready to share their insights and approach across all areas of game development.
    - generic [ref=e301]:
      - generic [ref=e303]:
        - heading "ARTICLES" [level=2] [ref=e305]:
          - generic [ref=e306]: ARTICLES
        - generic [ref=e307]:
          - 'link "lab image lab image April 22, 2026 Localization Program Management: The Missing Layer in Game Production LOCALIZATION" [ref=e309]':
            - /url: /lab/localization-program-management-missing-layer-in-game-production
            - generic [ref=e311]:
              - img "lab image" [ref=e312]
              - img "lab image" [ref=e313]
              - generic [ref=e314]:
                - generic [ref=e315]:
                  - paragraph [ref=e316]: April 22, 2026
                  - 'heading "Localization Program Management: The Missing Layer in Game Production" [level=2] [ref=e317]'
                - button "LOCALIZATION" [ref=e318] [cursor=pointer]:
                  - generic [ref=e319]: LOCALIZATION
          - link "lab image lab image April 15, 2026 Meet Our Player Support Team at Side Tokyo PLAYER SUPPORT" [ref=e321]:
            - /url: /lab/meet-our-player-support-team-tokyo-japan
            - generic [ref=e323]:
              - img "lab image" [ref=e324]
              - img "lab image" [ref=e325]
              - generic [ref=e326]:
                - generic [ref=e327]:
                  - paragraph [ref=e328]: April 15, 2026
                  - heading "Meet Our Player Support Team at Side Tokyo" [level=2] [ref=e329]
                - button "PLAYER SUPPORT" [ref=e330] [cursor=pointer]:
                  - generic [ref=e331]: PLAYER SUPPORT
      - generic [ref=e333]:
        - heading "VIDEOS" [level=2] [ref=e335]:
          - generic [ref=e336]: VIDEOS
        - generic [ref=e337]:
          - generic [ref=e338]:
            - iframe [ref=e340]:
              - generic "YouTube Video Player" [ref=f2e3]
            - generic [ref=e341]:
              - heading "Inside Side Taipei" [level=2] [ref=e342]
              - paragraph [ref=e343]: GAME DEVELOPMENT
          - link "VISIT OUR LAB" [ref=e346]:
            - /url: /lab
  - generic [ref=e347]:
    - img "ptw-side" [ref=e349]
    - generic [ref=e351]:
      - heading "WE BELIEVE GREAT WORK GETS DONE BY TEAMS WHO LOVE WHAT THEY DO." [level=2] [ref=e352]
      - paragraph [ref=e353]: This is why we approach every solution with an all-minds-on-deck strategy that leverages our global workforce's strength, creativity, and passion.
      - link "LEARN MORE ABOUT US" [ref=e356]:
        - /url: /about
    - img "side-ptw" [ref=e358]
  - generic [ref=e359]:
    - heading "A GLOBAL TEAM OF CREATIVES & ENGINEERS" [level=2] [ref=e360]:
      - generic [ref=e361]: A GLOBAL TEAM
      - generic [ref=e362]: OF CREATIVES & ENGINEERS
    - button "EUROPE" [ref=e363] [cursor=pointer]:
      - text: EUROPE
      - img [ref=e364]
    - generic [ref=e366]:
      - generic [ref=e367]:
        - img "LONDON" [ref=e368]
        - heading "LONDON" [level=2] [ref=e371]
      - generic [ref=e372]:
        - img "PARIS" [ref=e373]
        - heading "PARIS" [level=2] [ref=e376]
      - generic [ref=e377]:
        - img "BRAGA" [ref=e378]
        - heading "BRAGA" [level=2] [ref=e381]
  - generic [ref=e382]:
    - button "JOIN OUR TEAM" [ref=e384] [cursor=pointer]
    - button "GET IN TOUCH" [ref=e385] [cursor=pointer]:
      - text: GET IN TOUCH
      - img [ref=e386]
  - generic [ref=e388]:
    - heading [level=6]
    - heading "LATEST NEWS & EVENTS" [level=2] [ref=e390]:
      - generic [ref=e391]: LATEST NEWS & EVENTS
    - generic [ref=e392]:
      - generic [ref=e394]:
        - generic [ref=e397]:
          - img "side-ptw-news-image" [ref=e398]
          - img "side-ptw-news-image" [ref=e399]
          - generic [ref=e400]:
            - generic [ref=e401]:
              - paragraph [ref=e402]: April 1, 2026
              - heading "Gamescom Latam 2026" [level=2] [ref=e403]
            - button "Event" [ref=e404] [cursor=pointer]:
              - generic [ref=e405]: Event
        - generic [ref=e408]:
          - img "side-ptw-news-image" [ref=e409]
          - img "side-ptw-news-image" [ref=e410]
          - generic [ref=e411]:
            - generic [ref=e412]:
              - paragraph [ref=e413]: March 31, 2026
              - heading "Side Co-Authors XDS 2026 Insights Report on the Future of External Development" [level=2] [ref=e414]
            - button "News" [ref=e415] [cursor=pointer]:
              - generic [ref=e416]: News
        - generic [ref=e419]:
          - img "side-ptw-news-image" [ref=e420]
          - img "side-ptw-news-image" [ref=e421]
          - generic [ref=e422]:
            - generic [ref=e423]:
              - paragraph [ref=e424]: March 24, 2026
              - heading "iicon 2026" [level=2] [ref=e425]
            - button "Event" [ref=e426] [cursor=pointer]:
              - generic [ref=e427]: Event
      - button "VIEW ALL" [ref=e429] [cursor=pointer]
  - contentinfo [ref=e430]:
    - generic [ref=e431]:
      - img "ptw-side" [ref=e433]
      - generic [ref=e434]:
        - link "side-ptw" [ref=e436]:
          - /url: /
          - img "side-ptw" [ref=e437]
        - generic [ref=e438]:
          - heading "謝辞" [level=3] [ref=e439]
          - link "GET IN TOUCH" [ref=e442]:
            - /url: /contact
        - separator [ref=e443]
        - generic [ref=e445]:
          - generic [ref=e446]:
            - list [ref=e447]:
              - listitem [ref=e448]:
                - link "PROJECTS" [ref=e449]:
                  - /url: /projects
              - listitem [ref=e450]:
                - link "ABOUT" [ref=e451]:
                  - /url: /about
              - listitem [ref=e452]:
                - link "CAREERS" [ref=e453]:
                  - /url: /careers
              - listitem [ref=e454]:
                - link "NEWS & EVENTS" [ref=e455]:
                  - /url: /news
              - listitem [ref=e456]:
                - link "LAB" [ref=e457]:
                  - /url: /lab
            - separator [ref=e458]
          - generic [ref=e459]:
            - paragraph [ref=e460]: SERVICES
            - list [ref=e461]:
              - listitem [ref=e462]:
                - link "GAME DEVELOPMENT" [ref=e463]:
                  - /url: /services/game-development
              - listitem [ref=e464]:
                - link "QUALITY ASSURANCE" [ref=e465]:
                  - /url: /services/quality-assurance
              - listitem [ref=e466]:
                - link "ART PRODUCTION" [ref=e467]:
                  - /url: /services/art-production
              - listitem [ref=e468]:
                - link "LOCALIZATION" [ref=e469]:
                  - /url: /services/localization
              - listitem [ref=e470]:
                - link "AUDIO PRODUCTION" [ref=e471]:
                  - /url: /services/audio-production
              - listitem [ref=e472]:
                - link "PLAYER SUPPORT" [ref=e473]:
                  - /url: /services/player-support
              - listitem [ref=e474]:
                - link "LOCALIZATION QA" [ref=e475]:
                  - /url: /services/localization-qa
              - listitem [ref=e476]:
                - link "DATASETS" [ref=e477]:
                  - /url: /services/datasets
              - listitem [ref=e478]:
                - link "IT" [ref=e479]:
                  - /url: /services/it-services
      - separator [ref=e480]
      - generic [ref=e481]:
        - generic [ref=e483]:
          - paragraph [ref=e484]:
            - link "CSR POLICY (INDIA)" [ref=e485]:
              - /url: /Corporate Social Responsibility_V6.pdf
          - paragraph [ref=e486]:
            - link "TERMS OF USE" [ref=e487]:
              - /url: https://side.inc/website-terms-of-usage
          - paragraph [ref=e488]:
            - link "PRIVACY POLICY" [ref=e489]:
              - /url: https://side.inc/privacy-policy
          - paragraph [ref=e490]:
            - link "POLICIES" [ref=e491]:
              - /url: https://side.inc/modern-slavery-statement
          - paragraph [ref=e492]:
            - link "POLE TO WIN HOLDINGS" [ref=e493]:
              - /url: https://www.phd.inc/en/index.html
          - paragraph [ref=e494]: © SIDE 2026. ALL RIGHTS RESERVED.
        - generic [ref=e495]:
          - link [ref=e496]:
            - /url: https://www.linkedin.com/company/sideglobal
            - img [ref=e497]
          - link [ref=e501]:
            - /url: https://www.instagram.com/sideglobal
            - img [ref=e502]
          - link [ref=e506]:
            - /url: https://www.youtube.com/@sideglobal
            - img [ref=e507]
          - link [ref=e510]:
            - /url: https://x.com/sideglobal
            - img [ref=e511]
          - link [ref=e513]:
            - /url: https://www.artstation.com/sideglobal
            - img [ref=e514]
  - generic [ref=e520]:
    - img "side-ptw" [ref=e521]
    - heading "Our Website uses cookies" [level=2] [ref=e522]:
      - generic [ref=e523]: Our
      - generic [ref=e524]: Website
      - generic [ref=e525]: uses
      - generic [ref=e526]: cookies
    - paragraph [ref=e528]:
      - text: Our website uses cookies. By continuing, we assume your permission to deploy cookies as detailed in our
      - link "Privacy Policy" [ref=e529] [cursor=pointer]:
        - /url: /privacy-policy
    - generic [ref=e530]:
      - button "ACCEPT ALL" [ref=e531] [cursor=pointer]:
        - text: ACCEPT ALL
        - img [ref=e532]
      - button "DECLINE" [ref=e534] [cursor=pointer]:
        - generic [ref=e535]: DECLINE
      - button "Video preview" [ref=e536] [cursor=pointer]:
        - img "Video preview" [ref=e537]
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