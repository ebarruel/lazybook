import { test, expect } from "./test.setup";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test("get book (currently reading)", async ({ page }) => {
	await expect(page.getByText("Currently Reading...")).toBeVisible();
	await expect(page.getByAltText("Currently Reading Cover Image")).toBeVisible();
});

test("get list (homepage)", async ({page}) => {
	await expect(page.getByText("List 1")).toBeVisible();
	
});