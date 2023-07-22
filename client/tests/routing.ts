import { expect, test } from "@playwright/test";

test("open PWA", async ({page}) => {
	await page.goto("/");
	await expect(page.getByRole('navigation').locator('div')).toBeVisible();
});

test("nav exists", async ({page}) => {
	await page.goto("/");
	await expect(page.getByText('home lib pub search user')).toBeVisible();
});

// test("home button", async ({page}) => {
// 	await page.goto("/");
// 	await page.locator('#tab-button-home').getByRole('img').click();
// 	await expect(page.getByRole('navigation').locator('div')).toBeVisible();
// });