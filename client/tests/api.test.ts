import { expect, test } from "@playwright/test";

test.beforeEach( async ({page}) => {
	page.goto("/");
})

test("get book", async ({request}) => {
	const response = await request.get("/books");
	await expect(response).toBeOK();
});