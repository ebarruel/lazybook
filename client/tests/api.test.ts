import { test, expect } from "./test.setup";

test.beforeEach(async ({ page }) => {
	page.goto("/");
});

test("get book", async ({ page }) => {
	await expect(page.getByText("Currently Reading...")).toBeVisible();
	await expect(page.getByAltText("Currently Reading Cover Image")).toBeVisible();
});
