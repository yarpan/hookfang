const { test, expect } = require('@playwright/test');

// WEBHOOK_PAYLOAD: ${{ toJson(github.event.client_payload) }}
// WEBHOOK_OBJECT: ${{ toJson(github.event.client_payload.user_data) }}

let payloadData = process.env.WEBHOOK_PAYLOAD;
let userData = process.env.WEBHOOK_OBJECT; 
// let userData = JSON.parse(payloadData);


test('get started link', async ({ page }) => {
  
  console.log('\n=== payloadData.unit ===')
  console.log(payloadData.unit)
  console.log('\n=== userData.user_name ===')
  console.log(userData.user_name)
});


// test.skip('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });

