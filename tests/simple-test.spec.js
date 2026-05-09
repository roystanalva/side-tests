const { test, expect } = require('@playwright/test');

test('Simple navigation test', async ({ page }) => {
  console.log('Starting test...');
  const response = await page.goto('https://side.inc', { 
    waitUntil: 'domcontentloaded', 
    timeout: 60000 
  });
  console.log('Navigation done, status:', response.status());
  expect(response.status()).toBeLessThan(400);
  
  await page.waitForSelector('body', { timeout: 30000 });
  console.log('Body found');
  
  const title = await page.title();
  console.log('Title:', title);
  
  const content = await page.content();
  console.log('Content length:', content.length);
  
  console.log('Test completed successfully');
});
