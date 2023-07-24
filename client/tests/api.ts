import { expect, test } from "@playwright/test";
import { mockServer } from "../src/server";

test.beforeAll(async () => {
	mockServer();
});

test("get book", async ({request}) => {
	const res = await request.get("/api/book");
	expect(res.ok()).toBeTruthy();
});
