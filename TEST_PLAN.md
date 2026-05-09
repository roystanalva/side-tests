# Test Plan for side.inc

## Overview
Comprehensive test automation framework for https://side.inc using Playwright with JavaScript and Page Object Model (POM) design pattern.

## Test Strategy
- **Framework**: Playwright with JavaScript
- **Design Pattern**: Page Object Model (POM)
- **Reporting**: Allure Reports
- **Test Types**: UI, Security, Sanity, Regression, Cross-browser, Cross-platform, Link verification

## Test Environment
- **Base URL**: https://side.inc
- **Browsers**: Chromium, Firefox, WebKit (Safari)
- **Mobile Devices**: Pixel 5 (Chrome), iPhone 12 (Safari)
- **Platforms**: Windows, macOS, Linux (via CI/CD)

## Test Cases Created

### 1. Regression Tests (regression.spec.js)
- Verify homepage loads successfully
- Verify all navigation links are working
- Verify footer links are present
- Verify page responsiveness on mobile
- Verify logo is visible and clickable
- Verify all images load properly

### 2. Contact Page Tests (contact-us.spec.js)
**Positive Cases:**
- Submit valid contact form

**Negative Cases:**
- Submit empty form
- Invalid email format

**Boundary Cases:**
- Maximum length name
- Maximum length message

**Edge Cases:**
- Special characters in name
- SQL injection attempt

### 3. Security Tests (security.spec.js)
- Check for HTTPS
- Check security headers
- XSS protection test
- Check for sensitive information in response
- Verify no open redirects
- Check for clickjacking protection

### 4. Cross-Browser Tests (cross-browser.spec.js)
- Verify homepage renders correctly across browsers
- Verify navigation works across browsers
- Verify responsive design on multiple viewports
- Verify forms work across browsers
- Verify images load on all platforms

### 5. Sanity Tests (sanity.spec.js)
- Homepage loads
- Navigation menu present
- Footer present
- Check all critical links
- Page load time verification

### 6. UI Tests (ui-tests.spec.js)
- Verify all buttons are clickable
- Verify form inputs accept input
- Verify images have alt text
- Verify color contrast (basic check)
- Verify font loads correctly
- Verify hover states on buttons
- Verify modal/popup behavior

### 7. Links Tests (links.spec.js)
- Verify all links on homepage
- Verify external links open correctly
- Verify anchor links work
- Verify mailto links
- Verify tel links
- Verify footer links

### 8. Negative Tests (negative-tests.spec.js)
- Access non-existent page
- Submit form with SQL injection
- Submit form with XSS
- Invalid email formats
- Submit form with extremely long input
- Submit form with special characters

## Test Execution

### Run All Tests
```bash
npm test
```

### Run Specific Test Types
```bash
npx playwright test tests/sanity.spec.js --grep @sanity
npx playwright test tests/regression.spec.js
npx playwright test tests/security.spec.js
```

### Run with UI Mode
```bash
npm run test:ui
```

### Generate Allure Report
```bash
npm run allure:generate
npm run allure:open
```

## Success Criteria
- All smoke tests pass
- No broken links found
- All security headers present
- Cross-browser compatibility verified
- Responsive design works on mobile and desktop
- Form validation works correctly

## Known Limitations
- Some dynamic content may require additional wait strategies
- Third-party integrations may need mock responses
- Captcha/rate limiting may affect automated tests

## Maintainance
- Update selectors when UI changes
- Add new test cases for new features
- Review and update test data regularly
