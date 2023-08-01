import { test, expect } from './test';

test.beforeEach( async ({page}) => {
	page.goto("/");
})

test.skip("get book", async () => {
	// idk
});