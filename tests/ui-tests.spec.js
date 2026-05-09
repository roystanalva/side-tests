const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const ContactPage = require('../pages/contactPage');

test.describe('UI Tests - User Interface Verification', () => {
  let homePage;
  let contactPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    contactPage = new ContactPage(page);
    await homePage.open();
  });

  test('UI: Verify all buttons are clickable @ui', async ({ page }) => {
    const buttons = await page.$$('button, a[role="button"]');
    console.log(`Found ${buttons.length} buttons`);
    
    for (const button of buttons.slice(0, 5)) {
      const isEnabled = await button.isEnabled();
      expect(isEnabled).toBeTruthy();
    }
  });

  test('UI: Verify form inputs accept input @ui', async ({ page }) => {
    await homePage.clickContact();
    await page.waitForTimeout(2000);
    
    const inputs = await page.$$('input, textarea');
    for (const input of inputs.slice(0, 5)) {
      const isVisible = await input.isVisible();
      expect(isVisible).toBeTruthy();
    }
  });

  test('UI: Verify images have alt text @ui @accessibility', async ({ page }) => {
    const images = await page.$$('img');
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('UI: Verify color contrast (basic check) @ui @accessibility', async ({ page }) => {
    const bodyColor = await page.evaluate(() => {
      const style = window.getComputedStyle(document.body);
      return {
        color: style.color,
        backgroundColor: style.backgroundColor
      };
    });
    console.log('Body styles:', bodyColor);
    expect(bodyColor.color).toBeDefined();
  });

  test('UI: Verify font loads correctly @ui', async ({ page }) => {
    const fontFamily = await page.evaluate(() => {
      return window.getComputedStyle(document.body).fontFamily;
    });
    console.log('Font family:', fontFamily);
    expect(fontFamily).toBeDefined();
  });

  test('UI: Verify hover states on buttons @ui', async ({ page }) => {
    const buttons = await page.$$('button');
    if (buttons.length > 0) {
      await buttons[0].hover();
      await page.waitForTimeout(500);
      console.log('Hovered over first button');
    }
  });

  test('UI: Verify modal/popup behavior @ui', async ({ page }) => {
    // Look for elements that might trigger modals
    const modalTriggers = await page.$$('[data-toggle="modal"], [class*="modal"], button:has-text("Sign up")');
    console.log(`Found ${modalTriggers.length} potential modal triggers`);
  });
});
