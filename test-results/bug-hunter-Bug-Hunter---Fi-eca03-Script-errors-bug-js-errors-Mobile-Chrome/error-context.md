# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bug-hunter.spec.js >> Bug Hunter - Find All Possible Bugs >> Check JavaScript errors @bug @js-errors
- Location: tests\bug-hunter.spec.js:308:3

# Error details

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://side.inc/", waiting until "networkidle"

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
      - link "VIEW PROJECTS" [ref=e60] [cursor=pointer]:
        - /url: /projects
    - 'link "project image 1 project image 1 CLAIR OBSCUR: EXPEDITION 33" [ref=e63] [cursor=pointer]':
      - /url: /projects/clair-obscur-expedition-33
      - generic [ref=e64]:
        - img "project image 1" [ref=e65]
        - img "project image 1" [ref=e66]
      - 'heading "CLAIR OBSCUR: EXPEDITION 33" [level=3] [ref=e68]'
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
      - generic [active] [ref=f1e1]:
        - generic "YouTube Video Player" [ref=f1e3]
        - generic [ref=f1e5]:
          - generic:
            - generic:
              - button "Play video" [ref=f1e10] [cursor=pointer]
              - button "Hide player controls" [ref=f1e12] [cursor=pointer]
              - generic [ref=f1e14]:
                - generic [ref=f1e19]:
                  - generic [ref=f1e20]:
                    - link "Welcome to Our Side" [ref=f1e21] [cursor=pointer]:
                      - /url: https://www.youtube.com/watch?v=ojOrdNRwDiw
                    - link "Side" [ref=f1e22] [cursor=pointer]:
                      - /url: /channel/UC6lzy8iqR-BpB5RUO60uN_Q
                      - generic [ref=f1e23]: Side
                  - generic [ref=f1e24]:
                    - button [ref=f1e25] [cursor=pointer]
                    - generic [ref=f1e27]:
                      - generic: Side
                      - generic: 272 subscribers
                - generic [ref=f1e28]:
                  - button "Copy link" [ref=f1e31] [cursor=pointer]:
                    - generic [ref=f1e35]:
                      - img
                  - link "Watch on YouTube" [ref=f1e42] [cursor=pointer]:
                    - /url: https://www.youtube.com/watch?v=ojOrdNRwDiw
                    - generic [ref=f1e45]:
                      - text: Watch on
                      - img [ref=f1e47]:
                        - generic [ref=f1e49]:
                          - img
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
          - 'link "lab image lab image April 22, 2026 Localization Program Management: The Missing Layer in Game Production LOCALIZATION" [ref=e309] [cursor=pointer]':
            - /url: /lab/localization-program-management-missing-layer-in-game-production
            - generic [ref=e311]:
              - img "lab image" [ref=e312]
              - img "lab image" [ref=e313]
              - generic [ref=e314]:
                - generic [ref=e315]:
                  - paragraph [ref=e316]: April 22, 2026
                  - 'heading "Localization Program Management: The Missing Layer in Game Production" [level=2] [ref=e317]'
                - button "LOCALIZATION" [ref=e318]:
                  - generic [ref=e319]: LOCALIZATION
          - link "lab image lab image April 15, 2026 Meet Our Player Support Team at Side Tokyo PLAYER SUPPORT" [ref=e321] [cursor=pointer]:
            - /url: /lab/meet-our-player-support-team-tokyo-japan
            - generic [ref=e323]:
              - img "lab image" [ref=e324]
              - img "lab image" [ref=e325]
              - generic [ref=e326]:
                - generic [ref=e327]:
                  - paragraph [ref=e328]: April 15, 2026
                  - heading "Meet Our Player Support Team at Side Tokyo" [level=2] [ref=e329]
                - button "PLAYER SUPPORT" [ref=e330]:
                  - generic [ref=e331]: PLAYER SUPPORT
      - generic [ref=e333]:
        - heading "VIDEOS" [level=2] [ref=e335]:
          - generic [ref=e336]: VIDEOS
        - generic [ref=e337]:
          - generic [ref=e338]:
            - iframe [ref=e340]:
              - generic [active] [ref=f2e1]:
                - generic "YouTube Video Player" [ref=f2e3]
                - generic [ref=f2e5]:
                  - generic:
                    - generic:
                      - button "Play video" [ref=f2e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f2e12] [cursor=pointer]
                      - generic [ref=f2e14]:
                        - generic [ref=f2e19]:
                          - generic [ref=f2e20]:
                            - link "Inside Side Taipei" [ref=f2e21] [cursor=pointer]:
                              - /url: https://www.youtube.com/watch?v=gpVaiSx_XYM
                            - link "Side" [ref=f2e22] [cursor=pointer]:
                              - /url: /channel/UC6lzy8iqR-BpB5RUO60uN_Q
                              - generic [ref=f2e23]: Side
                          - generic [ref=f2e24]:
                            - button [ref=f2e25] [cursor=pointer]
                            - generic [ref=f2e27]:
                              - generic: Side
                              - generic: 272 subscribers
                        - generic [ref=f2e28]:
                          - button "Copy link" [ref=f2e31] [cursor=pointer]:
                            - generic [ref=f2e35]:
                              - img
                          - link "Watch on YouTube" [ref=f2e42] [cursor=pointer]:
                            - /url: https://www.youtube.com/watch?v=gpVaiSx_XYM
                            - generic [ref=f2e45]:
                              - text: Watch on
                              - img [ref=f2e47]:
                                - generic [ref=f2e49]:
                                  - img
            - generic [ref=e341]:
              - heading "Inside Side Taipei" [level=2] [ref=e342]
              - paragraph [ref=e343]: GAME DEVELOPMENT
          - link "VISIT OUR LAB" [ref=e346] [cursor=pointer]:
            - /url: /lab
  - generic [ref=e347]:
    - img "ptw-side" [ref=e349]
    - generic [ref=e351]:
      - heading "WE BELIEVE GREAT WORK GETS DONE BY TEAMS WHO LOVE WHAT THEY DO." [level=2] [ref=e352]
      - paragraph [ref=e353]: This is why we approach every solution with an all-minds-on-deck strategy that leverages our global workforce's strength, creativity, and passion.
      - link "LEARN MORE ABOUT US" [ref=e356] [cursor=pointer]:
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
        - link "side-ptw" [ref=e436] [cursor=pointer]:
          - /url: /
          - img "side-ptw" [ref=e437]
        - generic [ref=e438]:
          - heading "來吧！" [level=3] [ref=e439]
          - link "GET IN TOUCH" [ref=e442] [cursor=pointer]:
            - /url: /contact
        - separator [ref=e443]
        - generic [ref=e445]:
          - generic [ref=e446]:
            - list [ref=e447]:
              - listitem [ref=e448]:
                - link "PROJECTS" [ref=e449] [cursor=pointer]:
                  - /url: /projects
              - listitem [ref=e450]:
                - link "ABOUT" [ref=e451] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e452]:
                - link "CAREERS" [ref=e453] [cursor=pointer]:
                  - /url: /careers
              - listitem [ref=e454]:
                - link "NEWS & EVENTS" [ref=e455] [cursor=pointer]:
                  - /url: /news
              - listitem [ref=e456]:
                - link "LAB" [ref=e457] [cursor=pointer]:
                  - /url: /lab
            - separator [ref=e458]
          - generic [ref=e459]:
            - paragraph [ref=e460]: SERVICES
            - list [ref=e461]:
              - listitem [ref=e462]:
                - link "GAME DEVELOPMENT" [ref=e463] [cursor=pointer]:
                  - /url: /services/game-development
              - listitem [ref=e464]:
                - link "QUALITY ASSURANCE" [ref=e465] [cursor=pointer]:
                  - /url: /services/quality-assurance
              - listitem [ref=e466]:
                - link "ART PRODUCTION" [ref=e467] [cursor=pointer]:
                  - /url: /services/art-production
              - listitem [ref=e468]:
                - link "LOCALIZATION" [ref=e469] [cursor=pointer]:
                  - /url: /services/localization
              - listitem [ref=e470]:
                - link "AUDIO PRODUCTION" [ref=e471] [cursor=pointer]:
                  - /url: /services/audio-production
              - listitem [ref=e472]:
                - link "PLAYER SUPPORT" [ref=e473] [cursor=pointer]:
                  - /url: /services/player-support
              - listitem [ref=e474]:
                - link "LOCALIZATION QA" [ref=e475] [cursor=pointer]:
                  - /url: /services/localization-qa
              - listitem [ref=e476]:
                - link "DATASETS" [ref=e477] [cursor=pointer]:
                  - /url: /services/datasets
              - listitem [ref=e478]:
                - link "IT" [ref=e479] [cursor=pointer]:
                  - /url: /services/it-services
      - separator [ref=e480]
      - generic [ref=e481]:
        - generic [ref=e483]:
          - paragraph [ref=e484]:
            - link "CSR POLICY (INDIA)" [ref=e485] [cursor=pointer]:
              - /url: /Corporate Social Responsibility_V6.pdf
          - paragraph [ref=e486]:
            - link "TERMS OF USE" [ref=e487] [cursor=pointer]:
              - /url: https://side.inc/website-terms-of-usage
          - paragraph [ref=e488]:
            - link "PRIVACY POLICY" [ref=e489] [cursor=pointer]:
              - /url: https://side.inc/privacy-policy
          - paragraph [ref=e490]:
            - link "POLICIES" [ref=e491] [cursor=pointer]:
              - /url: https://side.inc/modern-slavery-statement
          - paragraph [ref=e492]:
            - link "POLE TO WIN HOLDINGS" [ref=e493] [cursor=pointer]:
              - /url: https://www.phd.inc/en/index.html
          - paragraph [ref=e494]: © SIDE 2026. ALL RIGHTS RESERVED.
        - generic [ref=e495]:
          - link [ref=e496] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/sideglobal
            - img [ref=e497]
          - link [ref=e501] [cursor=pointer]:
            - /url: https://www.instagram.com/sideglobal
            - img [ref=e502]
          - link [ref=e506] [cursor=pointer]:
            - /url: https://www.youtube.com/@sideglobal
            - img [ref=e507]
          - link [ref=e510] [cursor=pointer]:
            - /url: https://x.com/sideglobal
            - img [ref=e511]
          - link [ref=e513] [cursor=pointer]:
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
  264 |     console.log('Starting: SEO check');
  265 |     await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
  266 |     await page.waitForSelector('body', { timeout: 30000 });
  267 |     
  268 |     const issues = [];
  269 |     
  270 |     // Check for title
  271 |     const title = await page.title();
  272 |     if (!title || title.trim() === '') {
  273 |       issues.push({ type: 'Missing page title' });
  274 |       console.log('BUG: Missing page title');
  275 |     } else {
  276 |       console.log(`Title: ${title}`);
  277 |     }
  278 |     
  279 |     // Check for meta description
  280 |     const metaDescription = await page.$eval('meta[name="description"]', meta => meta.content).catch(() => null);
  281 |     if (!metaDescription) {
  282 |       issues.push({ type: 'Missing meta description' });
  283 |       console.log('BUG: Missing meta description');
  284 |     }
  285 |     
  286 |     // Check for h1 tags
  287 |     const h1Count = await page.$$eval('h1', h1s => h1s.length);
  288 |     if (h1Count === 0) {
  289 |       issues.push({ type: 'Missing H1 tag' });
  290 |       console.log('BUG: Missing H1 tag');
  291 |     } else if (h1Count > 1) {
  292 |       issues.push({ type: 'Multiple H1 tags', count: h1Count });
  293 |       console.log(`BUG: ${h1Count} H1 tags found (should be 1)`);
  294 |     }
  295 |     
  296 |     // Check for canonical URL
  297 |     const canonical = await page.$('link[rel="canonical"]');
  298 |     if (!canonical) {
  299 |       issues.push({ type: 'Missing canonical URL' });
  300 |       console.log('BUG: Missing canonical URL');
  301 |     }
  302 |     
  303 |     if (issues.length > 0) {
  304 |       console.log('SEO ISSUES FOUND:', JSON.stringify(issues, null, 2));
  305 |     }
  306 |   });
  307 | 
  308 |   test('Check JavaScript errors @bug @js-errors', async ({ page }) => {
  309 |     console.log('Starting: JavaScript errors check');
  310 |     const jsErrors = [];
  311 |     
  312 |     page.on('pageerror', (error) => {
  313 |       jsErrors.push({ message: error.message, stack: error.stack });
  314 |       console.log(`JS ERROR: ${error.message}`);
  315 |     });
  316 |     
> 317 |     await page.goto('https://side.inc', { waitUntil: 'networkidle', timeout: 60000 });
      |                ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  318 |     await page.waitForTimeout(5000);
  319 |     
  320 |     // Try clicking various elements to trigger potential JS errors
  321 |     const buttons = await page.$$('button');
  322 |     console.log(`Found ${buttons.length} buttons, clicking first 5...`);
  323 |     
  324 |     for (let i = 0; i < Math.min(buttons.length, 5); i++) {
  325 |       try {
  326 |         await buttons[i].click();
  327 |         await page.waitForTimeout(500);
  328 |       } catch (e) {
  329 |         // Ignore click errors
  330 |       }
  331 |     }
  332 |     
  333 |     if (jsErrors.length > 0) {
  334 |       console.log(`FOUND ${jsErrors.length} JAVASCRIPT ERRORS`);
  335 |     }
  336 |   });
  337 | 
  338 |   test('Check SSL/TLS issues @bug @ssl', async ({ page }) => {
  339 |     console.log('Starting: SSL/TLS check');
  340 |     
  341 |     // Check if site redirects HTTP to HTTPS
  342 |     const httpResponse = await page.request.get('http://side.inc', { 
  343 |       maxRedirects: 0, 
  344 |       failOnStatusCode: false 
  345 |     }).catch(() => null);
  346 |     
  347 |     if (httpResponse) {
  348 |       const status = httpResponse.status();
  349 |       if (status !== 301 && status !== 302 && status !== 307 && status !== 308) {
  350 |         console.log(`BUG: HTTP does not redirect to HTTPS (status: ${status})`);
  351 |       }
  352 |     }
  353 |     
  354 |     // Check SSL certificate (basic check)
  355 |     const httpsResponse = await page.request.get('https://side.inc');
  356 |     const headers = httpsResponse.headers();
  357 |     
  358 |     if (!headers['strict-transport-security']) {
  359 |       console.log('BUG: Missing HSTS header');
  360 |     }
  361 |     
  362 |     console.log('SSL/TLS check completed');
  363 |   });
  364 | 
  365 |   test('Check content issues @bug @content', async ({ page }) => {
  366 |     console.log('Starting: Content check');
  367 |     await page.goto('https://side.inc', { waitUntil: 'domcontentloaded', timeout: 60000 });
  368 |     await page.waitForSelector('body', { timeout: 30000 });
  369 |     
  370 |     const issues = [];
  371 |     
  372 |     // Check for placeholder text or lorem ipsum
  373 |     const bodyText = await page.textContent('body');
  374 |     
  375 |     if (bodyText.includes('Lorem ipsum') || bodyText.includes('lorem ipsum')) {
  376 |       issues.push({ type: 'Lorem ipsum text found' });
  377 |       console.log('BUG: Lorem ipsum text found');
  378 |     }
  379 |     
  380 |     // Check for broken language (mixed languages, encoding issues)
  381 |     const hasEncodingIssues = /��|�/.test(bodyText);
  382 |     if (hasEncodingIssues) {
  383 |       issues.push({ type: 'Text encoding issues' });
  384 |       console.log('BUG: Text encoding issues detected');
  385 |     }
  386 |     
  387 |     // Check for placeholder text in content
  388 |     const placeholderPatterns = ['Click here', 'Lorem ipsum', 'Placeholder', '[Placeholder]'];
  389 |     for (const pattern of placeholderPatterns) {
  390 |       if (bodyText.includes(pattern)) {
  391 |         issues.push({ type: `Placeholder text found: ${pattern}` });
  392 |         console.log(`BUG: Placeholder text found: ${pattern}`);
  393 |       }
  394 |     }
  395 |     
  396 |     if (issues.length > 0) {
  397 |       console.log('CONTENT ISSUES FOUND:', JSON.stringify(issues, null, 2));
  398 |     }
  399 |   });
  400 | });
  401 | 
```