import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	page.goto("/");
});

test.skip("get book", async () => {
	// todo
});
