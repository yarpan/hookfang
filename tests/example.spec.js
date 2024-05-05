const { test, expect } = require('@playwright/test');

// WEBHOOK_PAYLOAD: ${{ toJson(github.event.client_payload) }}
// WEBHOOK_OBJECT: ${{ toJson(github.event.client_payload.user_data) }}

let payloadData = process.env.WEBHOOK_PAYLOAD;
let userData = process.env.WEBHOOK_OBJECT; 
// let userData = JSON.parse(payloadData);
// let payloadString = JSON.stringify(payloadData);
// let payloadString2 = JSON.stringify(payloadParse);

test('get started link', async ({ page }) => {
  
  console.log('\n=== payloadData ===')
  console.log(payloadData)
  console.log('\n=== userData ===')
  console.log(userData)
});


test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

