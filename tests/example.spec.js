// @ts-nocheck
const { test, expect } = require('@playwright/test');

let form_data = process.env.FORM_DATA;
//let d = JSON.parse(form_data);


test('get started link', async ({ page }) => {
  let d = JSON.parse(form_data);
  console.log('=== form_data ===')
  console.log(form_data)
  console.log('=== d ===')
  console.log(d)
});


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

