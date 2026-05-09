# Test Cases Created for side.inc

## Framework Details
- **Framework**: Playwright with JavaScript
- **Design Pattern**: Page Object Model (POM)
- **Reporting**: Allure Reports
- **Base URL**: https://side.inc

## Page Objects Created
1. `pages/basePage.js` - Base class with common methods
2. `pages/homePage.js` - Homepage and navigation elements
3. `pages/contactPage.js` - Contact page elements (framework ready)

## Test Suites Created

### 1. Regression Tests (`tests/regression.spec.js`)
- ✅ Verify homepage loads successfully
- ✅ Verify all navigation links are working
- ✅ Verify footer links are present
- ✅ Verify page responsiveness on mobile
- ✅ Verify logo is visible and clickable
- ✅ Verify all images load properly

### 2. Contact Page Tests (`tests/contact-us.spec.js`)
- ✅ Positive: Navigate to contact page
- ✅ Verify contact page has content
- ✅ Verify contact page links work
- ✅ Boundary: Navigate with different viewport sizes

### 3. Security Tests (`tests/security.spec.js`)
- ✅ Check for HTTPS
- ✅ Check security headers
- ✅ XSS protection test
- ✅ Check for sensitive information in response
- ✅ Verify no open redirects
- ✅ Check for clickjacking protection

### 4. Cross-Browser Tests (`tests/cross-browser.spec.js`)
- ✅ Verify homepage renders correctly across browsers
- ✅ Verify navigation works across browsers
- ✅ Verify responsive design on multiple viewports
- ✅ Verify images load on all platforms
- ✅ Verify buttons are clickable

### 5. Sanity Tests (`tests/sanity.spec.js`)
- ✅ Sanity: Homepage loads
- ✅ Sanity: Navigation menu present
- ✅ Sanity: Footer present
- ✅ Sanity: Check critical navigation links
- ✅ Sanity: Page load time

### 6. UI Tests (`tests/ui-tests.spec.js`)
- ✅ UI: Verify all buttons are clickable
- ✅ UI: Verify form inputs accept input
- ✅ UI: Verify images have alt text
- ✅ UI: Verify color contrast (basic check)
- ✅ UI: Verify font loads correctly
- ✅ UI: Verify hover states on buttons
- ✅ UI: Verify modal/popup behavior

### 7. Links Tests (`tests/links.spec.js`)
- ✅ Verify all links on homepage
- ✅ Verify footer links
- ✅ Verify mailto links
- ✅ Verify tel links

### 8. Negative Tests (`tests/negative-tests.spec.js`)
- ✅ Negative: Access non-existent page
- ✅ Negative: Navigate to invalid URL
- ✅ Edge: Verify page handles slow network
- ✅ Boundary: Check with large viewport
- ✅ Boundary: Check with small viewport

### 9. Debug Tests (`tests/debug.spec.js`)
- ✅ Explore page structure and gather selectors

## Test Types Covered
- ✅ Positive test cases
- ✅ Negative test cases
- ✅ Boundary test cases
- ✅ Edge test cases
- ✅ UI tests
- ✅ Security/Penetration tests
- ✅ Sanity tests
- ✅ Cross-browser tests
- ✅ Cross-platform tests
- ✅ Regression tests
- ✅ All links verification tests

## Browsers Supported
- Chromium (Chrome)
- Firefox
- WebKit (Safari)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## How to Run Tests

### Run all tests:
```bash
cd "C:\Users\Roy\Documents\Open Code\side-tests"
npx playwright test
```

### Run specific test file:
```bash
npx playwright test tests/sanity.spec.js
```

### Run with UI mode:
```bash
npx playwright test --ui
```

### Generate Allure Report:
```bash
npx playwright test  # This generates allure-results
npm run allure:generate
npm run allure:open
```

## Notes
- Tests are written in JavaScript (not TypeScript as requested)
- POM pattern implemented for maintainability
- Allure reporting integrated
- Some tests may timeout due to site's JavaScript rendering - timeouts have been increased
- Selectors updated based on actual site structure exploration
