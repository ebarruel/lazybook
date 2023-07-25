import { expect, test, request, chromium } from "@playwright/test";
import { mockServer } from "../src/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let server: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let apiContext: any;

test.beforeAll(async () => {
	server = mockServer({ environment: 'test' });
	console.log("LOADED SERVER:", server);

	const browser = await chromium.launch();
	const page = browser.newPage();
	(await page).on('console', msg => console.log(msg.text()));

	apiContext = await request.newContext({
		// All requests we send go to this API endpoint.
		baseURL: 'http://localhost:4174',
	});
	console.log("LOADED API CONTEXT:", apiContext);
});

test.afterAll(async () => {
	server.shutdown();
	// Dispose all responses.
	await apiContext.dispose();
});

test("get book", async ({ request }) => {
	const book = await request.get("/api/book");
	console.log("!!! REQUEST:", request);
	console.log("!!! BOOK:", book);
	expect(book.ok()).toBeTruthy();
});