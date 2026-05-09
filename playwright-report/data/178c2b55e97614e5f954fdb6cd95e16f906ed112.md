# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bug-hunter.spec.js >> Bug Hunter - Find All Possible Bugs >> Check performance issues @bug @performance
- Location: tests\bug-hunter.spec.js:232:3

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
      - navigation [ref=e9]:
        - list [ref=e10]:
          - listitem [ref=e11]:
            - button "SERVICES" [ref=e12] [cursor=pointer]:
              - generic [ref=e13]: SERVICES
              - img [ref=e14]
          - listitem [ref=e16]:
            - link "PROJECTS" [ref=e17] [cursor=pointer]:
              - /url: /projects
          - listitem [ref=e18]:
            - link "ABOUT" [ref=e19] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e20]:
            - link "CAREERS" [ref=e21] [cursor=pointer]:
              - /url: /careers
          - listitem [ref=e22]:
            - link "NEWS & EVENTS" [ref=e23] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e24]:
            - link "LAB" [ref=e25] [cursor=pointer]:
              - /url: /lab
        - generic [ref=e26]:
          - listitem [ref=e28]:
            - button "English" [ref=e29] [cursor=pointer]:
              - text: English
              - img [ref=e30]
          - link "CONTACT" [ref=e32] [cursor=pointer]:
            - /url: /contact
            - button "CONTACT" [ref=e33]
  - generic [ref=e36]:
    - heading "BRINGING YOUR VOICE TO THE WORLD" [level=2] [ref=e37]:
      - generic [ref=e38]: BRINGING
      - generic [ref=e39]: YOUR
      - generic [ref=e40]: VOICE
      - generic [ref=e41]: TO THE
      - generic [ref=e42]: WORLD
    - paragraph [ref=e43]: We bring games to life – by your side.
  - generic [ref=e45]:
    - generic [ref=e46]:
      - heading "GAMES BROUGHT TO LIFE" [level=2] [ref=e47]:
        - generic [ref=e48]: GAMES
        - generic [ref=e49]: BROUGHT
        - generic [ref=e50]: TO
        - generic [ref=e51]: LIFE
      - paragraph [ref=e52]:
        - generic [ref=e53]: For over 30 years, our award-winning team of technical and creative experts have been partnering up with some of the best to craft incredible gaming experiences. We work in every genre and on every platform.
      - link "VIEW PROJECTS" [ref=e57] [cursor=pointer]:
        - /url: /projects
    - link "project image 3 project image 3 KINGDOM COME DELIVERANCE II" [ref=e60] [cursor=pointer]:
      - /url: /projects/kingdom-come-deliverance-ii
      - generic [ref=e61]:
        - img "project image 3" [ref=e62]
        - img "project image 3" [ref=e63]
      - heading "KINGDOM COME DELIVERANCE II" [level=3] [ref=e65]
  - generic [ref=e72]:
    - heading "OUR PARTNERS" [level=2] [ref=e73]:
      - generic [ref=e74]: OUR PARTNERS
    - generic [ref=e75]:
      - generic:
        - img "side-ptw" [ref=e76]
        - img "side-ptw" [ref=e77]
      - generic [ref=e78]:
        - generic [ref=e80]:
          - img "partner-logo" [ref=e83]
          - img "partner-logo" [ref=e86]
          - img "partner-logo" [ref=e89]
          - img "partner-logo" [ref=e92]
          - img "partner-logo" [ref=e95]
          - img "partner-logo" [ref=e98]
          - img "partner-logo" [ref=e101]
          - img "partner-logo" [ref=e104]
          - img "partner-logo" [ref=e107]
          - img "partner-logo" [ref=e110]
          - img "partner-logo" [ref=e113]
          - img "partner-logo" [ref=e116]
          - img "partner-logo" [ref=e119]
          - img "partner-logo" [ref=e122]
          - img "partner-logo" [ref=e125]
          - img "partner-logo" [ref=e128]
          - img "partner-logo" [ref=e131]
          - img "partner-logo" [ref=e134]
          - img "partner-logo" [ref=e137]
          - img "partner-logo" [ref=e140]
          - img "partner-logo" [ref=e143]
          - img "partner-logo" [ref=e146]
          - img "partner-logo" [ref=e149]
          - img "partner-logo" [ref=e152]
          - img "partner-logo" [ref=e155]
          - img "partner-logo" [ref=e158]
          - img "partner-logo" [ref=e161]
          - img "partner-logo" [ref=e164]
          - img "partner-logo" [ref=e167]
          - img "partner-logo" [ref=e170]
          - img "partner-logo" [ref=e173]
          - img "partner-logo" [ref=e176]
          - img "partner-logo" [ref=e179]
          - img "partner-logo" [ref=e182]
          - img "partner-logo" [ref=e185]
          - img "partner-logo" [ref=e188]
          - img "partner-logo" [ref=e191]
          - img "partner-logo" [ref=e194]
          - img "partner-logo" [ref=e197]
        - generic [ref=e198]:
          - button
          - button
          - button
  - generic [ref=e199]:
    - img "side-ptw" [ref=e201]
    - iframe [ref=e204]:
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
    - generic [ref=e205]:
      - heading "WHAT WE DO" [level=2] [ref=e206]:
        - generic [ref=e207]: WHAT
        - generic [ref=e208]: WE DO
      - generic [ref=e211]:
        - link "game-development GAME DEVELOPMENT" [ref=e213] [cursor=pointer]:
          - /url: /services/game-development
          - img "game-development" [ref=e215]
          - heading "GAME DEVELOPMENT" [level=2] [ref=e216]:
            - generic [ref=e217]:
              - text: GAME
              - text: DEVELOPMENT
        - link "quality-assurance QUALITY ASSURANCE" [ref=e219] [cursor=pointer]:
          - /url: /services/quality-assurance
          - img "quality-assurance" [ref=e221]
          - heading "QUALITY ASSURANCE" [level=2] [ref=e222]:
            - generic [ref=e223]:
              - text: QUALITY
              - text: ASSURANCE
        - link "art-production ART PRODUCTION" [ref=e225] [cursor=pointer]:
          - /url: /services/art-production
          - img "art-production" [ref=e227]
          - heading "ART PRODUCTION" [level=2] [ref=e228]:
            - generic [ref=e229]:
              - text: ART
              - text: PRODUCTION
        - link "localization LOCALIZATION" [ref=e231] [cursor=pointer]:
          - /url: /services/localization
          - img "localization" [ref=e233]
          - heading "LOCALIZATION" [level=2] [ref=e234]:
            - generic [ref=e235]: LOCALIZATION
        - link "audio-production AUDIO PRODUCTION" [ref=e237] [cursor=pointer]:
          - /url: /services/audio-production
          - img "audio-production" [ref=e239]
          - heading "AUDIO PRODUCTION" [level=2] [ref=e240]:
            - generic [ref=e241]:
              - text: AUDIO
              - text: PRODUCTION
        - link "player-support PLAYER SUPPORT" [ref=e243] [cursor=pointer]:
          - /url: /services/player-support
          - img "player-support" [ref=e245]
          - heading "PLAYER SUPPORT" [level=2] [ref=e246]:
            - generic [ref=e247]:
              - text: PLAYER
              - text: SUPPORT
        - link "localization-qa LOCALIZATION QA" [ref=e249] [cursor=pointer]:
          - /url: /services/localization-qa
          - img "localization-qa" [ref=e251]
          - heading "LOCALIZATION QA" [level=2] [ref=e252]:
            - generic [ref=e253]:
              - text: LOCALIZATION
              - text: QA
        - link "datasets DATASETS" [ref=e255] [cursor=pointer]:
          - /url: /services/datasets
          - img "datasets" [ref=e257]
          - heading "DATASETS" [level=2] [ref=e258]:
            - generic [ref=e259]: DATASETS
        - link "it-services IT" [ref=e261] [cursor=pointer]:
          - /url: /services/it-services
          - img "it-services" [ref=e263]
          - heading "IT" [level=2] [ref=e264]:
            - generic [ref=e265]: IT
  - generic [ref=e266]:
    - generic [ref=e267]:
      - heading "FROM THE LAB" [level=2] [ref=e268]:
        - generic [ref=e269]: FROM
        - generic [ref=e270]: THE LAB
      - paragraph [ref=e271]:
        - generic [ref=e272]: Our team is always experimenting in the Lab, ready to share their insights and approach across all areas of game development.
    - generic [ref=e273]:
      - img "side-ptw" [ref=e275]
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
          - generic [ref=e319]:
            - heading "Inside Side Taipei" [level=2] [ref=e320]
            - paragraph [ref=e321]: GAME DEVELOPMENT
  - generic [ref=e322]:
    - img "ptw-side" [ref=e324]
    - generic [ref=e326]:
      - heading "WE BELIEVE GREAT WORK GETS DONE BY TEAMS WHO LOVE WHAT THEY DO." [level=2] [ref=e327]
      - paragraph [ref=e328]: This is why we approach every solution with an all-minds-on-deck strategy that leverages our global workforce's strength, creativity, and passion.
      - link "LEARN MORE ABOUT US" [ref=e331] [cursor=pointer]:
        - /url: /about
    - img "side-ptw" [ref=e333]
  - generic [ref=e334]:
    - heading "JOIN 650+ DEVELOPERS AND PUBLISHERSTHAT WORK WITH US SIDE BY SIDE" [level=2] [ref=e335]:
      - generic [ref=e336]: JOIN 650+ DEVELOPERS AND PUBLISHERSTHAT WORK WITH US SIDE BY SIDE
    - img "Map" [ref=e338]
    - generic [ref=e339]:
      - link "JOIN OUR TEAM" [ref=e341] [cursor=pointer]:
        - /url: /careers
      - link "GET IN TOUCH" [ref=e342] [cursor=pointer]:
        - /url: /contact
        - text: GET IN TOUCH
        - img [ref=e343]
  - generic [ref=e345]:
    - heading [level=6]
    - generic [ref=e346]:
      - heading "LATEST NEWS & EVENTS" [level=2] [ref=e347]:
        - generic [ref=e348]: LATEST NEWS & EVENTS
      - link "VIEW ALL" [ref=e350] [cursor=pointer]:
        - /url: /news
    - generic [ref=e351]:
      - link "side-ptw-news-image side-ptw-news-image April 1, 2026 Gamescom Latam 2026 Event" [ref=e353] [cursor=pointer]:
        - /url: /news/gamescom-latam-2026
        - generic [ref=e355]:
          - img "side-ptw-news-image" [ref=e356]
          - img "side-ptw-news-image" [ref=e357]
          - generic [ref=e358]:
            - generic [ref=e359]:
              - paragraph [ref=e360]: April 1, 2026
              - heading "Gamescom Latam 2026" [level=2] [ref=e361]
            - button "Event" [ref=e362]:
              - generic [ref=e363]: Event
      - link "side-ptw-news-image side-ptw-news-image March 31, 2026 Side Co-Authors XDS 2026 Insights Report on the Future of External Development News" [ref=e365] [cursor=pointer]:
        - /url: /news/side-coauthors-xds-2026-insights-report
        - generic [ref=e367]:
          - img "side-ptw-news-image" [ref=e368]
          - img "side-ptw-news-image" [ref=e369]
          - generic [ref=e370]:
            - generic [ref=e371]:
              - paragraph [ref=e372]: March 31, 2026
              - heading "Side Co-Authors XDS 2026 Insights Report on the Future of External Development" [level=2] [ref=e373]
            - button "News" [ref=e374]:
              - generic [ref=e375]: News
      - link "side-ptw-news-image side-ptw-news-image March 24, 2026 iicon 2026 Event" [ref=e377] [cursor=pointer]:
        - /url: /news/iicon-2026
        - generic [ref=e379]:
          - img "side-ptw-news-image" [ref=e380]
          - img "side-ptw-news-image" [ref=e381]
          - generic [ref=e382]:
            - generic [ref=e383]:
              - paragraph [ref=e384]: March 24, 2026
              - heading "iicon 2026" [level=2] [ref=e385]
            - button "Event" [ref=e386]:
              - generic [ref=e387]: Event
  - contentinfo [ref=e388]:
    - generic [ref=e389]:
      - img "ptw-side" [ref=e391]
      - generic [ref=e392]:
        - link "side-ptw" [ref=e394] [cursor=pointer]:
          - /url: /
          - img "side-ptw" [ref=e395]
        - generic [ref=e397]:
          - list [ref=e399]:
            - separator [ref=e400]
            - listitem [ref=e401]:
              - link "PROJECTS" [ref=e402] [cursor=pointer]:
                - /url: /projects
            - listitem [ref=e403]:
              - link "ABOUT" [ref=e404] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e405]:
              - link "CAREERS" [ref=e406] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e407]:
              - link "NEWS & EVENTS" [ref=e408] [cursor=pointer]:
                - /url: /news
            - listitem [ref=e409]:
              - link "LAB" [ref=e410] [cursor=pointer]:
                - /url: /lab
          - generic [ref=e411]:
            - paragraph [ref=e412]: SERVICES
            - list [ref=e413]:
              - listitem [ref=e414]:
                - link "GAME DEVELOPMENT" [ref=e415] [cursor=pointer]:
                  - /url: /services/game-development
              - listitem [ref=e416]:
                - link "QUALITY ASSURANCE" [ref=e417] [cursor=pointer]:
                  - /url: /services/quality-assurance
              - listitem [ref=e418]:
                - link "ART PRODUCTION" [ref=e419] [cursor=pointer]:
                  - /url: /services/art-production
              - listitem [ref=e420]:
                - link "LOCALIZATION" [ref=e421] [cursor=pointer]:
                  - /url: /services/localization
              - listitem [ref=e422]:
                - link "AUDIO PRODUCTION" [ref=e423] [cursor=pointer]:
                  - /url: /services/audio-production
              - listitem [ref=e424]:
                - link "PLAYER SUPPORT" [ref=e425] [cursor=pointer]:
                  - /url: /services/player-support
              - listitem [ref=e426]:
                - link "LOCALIZATION QA" [ref=e427] [cursor=pointer]:
                  - /url: /services/localization-qa
              - listitem [ref=e428]:
                - link "DATASETS" [ref=e429] [cursor=pointer]:
                  - /url: /services/datasets
              - listitem [ref=e430]:
                - link "IT" [ref=e431] [cursor=pointer]:
                  - /url: /services/it-services
      - generic [ref=e432]:
        - generic [ref=e434]:
          - heading "N'HÉSITEZ PAS!" [level=3] [ref=e435]
          - link "GET IN TOUCH" [ref=e438] [cursor=pointer]:
            - /url: /contact
          - generic [ref=e439]:
            - link [ref=e440] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/sideglobal
              - img [ref=e441]
            - link [ref=e445] [cursor=pointer]:
              - /url: https://www.instagram.com/sideglobal
              - img [ref=e446]
            - link [ref=e450] [cursor=pointer]:
              - /url: https://www.youtube.com/@sideglobal
              - img [ref=e451]
            - link [ref=e454] [cursor=pointer]:
              - /url: https://x.com/sideglobal
              - img [ref=e455]
            - link [ref=e457] [cursor=pointer]:
              - /url: https://www.artstation.com/sideglobal
              - img [ref=e458]
        - generic [ref=e463]:
          - paragraph [ref=e464]:
            - link "CSR POLICY (INDIA)" [ref=e465] [cursor=pointer]:
              - /url: /Corporate Social Responsibility_V6.pdf
          - paragraph [ref=e466]:
            - link "TERMS OF USE" [ref=e467] [cursor=pointer]:
              - /url: https://side.inc/website-terms-of-usage
          - paragraph [ref=e468]:
            - link "PRIVACY POLICY" [ref=e469] [cursor=pointer]:
              - /url: https://side.inc/privacy-policy
          - paragraph [ref=e470]:
            - link "POLICIES" [ref=e471] [cursor=pointer]:
              - /url: https://side.inc/modern-slavery-statement
          - paragraph [ref=e472]:
            - link "POLE TO WIN HOLDINGS" [ref=e473] [cursor=pointer]:
              - /url: https://www.phd.inc/en/index.html
          - paragraph [ref=e474]: © SIDE 2026. ALL RIGHTS RESERVED.
  - generic [ref=e476]:
    - generic [ref=e477]:
      - img "side-ptw" [ref=e478]
      - paragraph [ref=e480]:
        - text: Our website uses cookies. By continuing, we assume your permission to deploy cookies as detailed in our
        - link "Privacy Policy" [ref=e481] [cursor=pointer]:
          - /url: /privacy-policy
    - generic [ref=e483]:
      - button "ACCEPT ALL" [ref=e484] [cursor=pointer]:
        - text: ACCEPT ALL
        - img [ref=e485]
      - button "DECLINE" [ref=e487] [cursor=pointer]:
        - generic [ref=e488]: DECLINE
      - button "Video preview" [ref=e489] [cursor=pointer]:
        - img "Video preview" [ref=e490]
```

# Test source

```ts
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
> 237 |     await page.goto('https://side.inc', { waitUntil: 'networkidle', timeout: 60000 });
      |                ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
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
  317 |     await page.goto('https://side.inc', { waitUntil: 'networkidle', timeout: 60000 });
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
```