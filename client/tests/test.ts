import { expect, test } from "@playwright/test";

// test("index page has expected h1", async ({ page }) => {
// 	await page.goto("/");
// 	await expect(page.getByRole("heading", { name: "Welcome to SvelteKit" })).toBeVisible();
// });

test("open PWA", async ({page}) => {
	await page.goto("/");
	await expect(page.getByRole('navigation').locator('div')).toBeVisible();
});

test("nav exists", async ({page}) => {
	await page.goto("/");
	await expect(page.getByText('home lib pub search user')).toBeVisible();
});