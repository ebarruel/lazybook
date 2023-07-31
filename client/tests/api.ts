import { expect, test } from "@playwright/test";
import { mockServer } from "../src/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let server: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// let apiContext: any;

test.beforeAll(async ({browser}) => {
	const page = await browser.newPage();
	page.on('console', msg => console.log(msg.text()));

	server = mockServer() //{ environment: 'test' });
	server.logging = true;
});

test.afterAll(async () => {
	server.shutdown();
	// Dispose all responses.
	// await apiContext.dispose();
});

test("get book", async ({request}) => {
	console.log("!!! SERVER !!!:", server);
	const book = await request.get("/api/books");
	// console.log("!!!!! REQUESTS !!!!!:", server.pretender.handledRequests());
	expect(book.ok()).toBeTruthy();
	console.log(await book.json());
});