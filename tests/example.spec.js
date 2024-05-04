// @ts-nocheck
const { test, expect } = require('@playwright/test');

let payloadData = process.env.PAYLOAD_DATA;
let payloadParse = JSON.parse(payloadData);
let payloadString = JSON.stringify(payloadData);
let payloadString2 = JSON.stringify(payloadParse);

test('get started link', async ({ page }) => {
  
  console.log('=== payloadData ===')
  console.log(payloadData)
  console.log('=== d ===')
  console.log(d)
});


test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

