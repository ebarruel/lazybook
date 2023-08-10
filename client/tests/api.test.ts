import { test, expect } from "./test.setup";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test("get book (currently reading)", async ({ page }) => {
	await expect(page.getByRole("heading", {name: "Currently Reading..."})).toBeVisible();
	await expect(page.getByAltText("Currently Reading Cover Image")).toBeVisible();
});

test.skip("get list (homepage)", async ({page}) => {
	await expect(page.getByRole("heading", {name: "List 1"})).toBeVisible();
	
	// expect at least 3 books in list
	for (let i = 0; i < 3; i++) {
		await expect(page.getByAltText("List 1 Book Cover ${i}")).toBeVisible();
	};
});