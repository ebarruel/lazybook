import { test, expect } from './test';
import axios from 'axios';

test.beforeEach( async ({page}) => {
	page.goto("/");
})

test("get book", async () => {
	const response = await axios.get("http://localhost:4173/api/books");
	await expect(response.status).toBe(200);
});