import { expect, test } from "@playwright/test";
import { server } from "../src/mocks/server";

test.beforeAll(async ({browser}) => {
	const page = await browser.newPage();
	page.on('console', msg => console.log(msg.text()));

	server.listen();
});

test.afterEach(async () => {
	server.resetHandlers();
});

test.afterAll(async () => {
	server.close();
});

test.skip("get book", () => {
	console.log("TODO");
});