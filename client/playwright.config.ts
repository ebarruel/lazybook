import { defineConfig } from "@playwright/test";


export default defineConfig({
	webServer: {
		command: "npm run build && npm run preview",
		port: 4173
	},
	testDir: "./tests",
	testMatch: ["**/*.test.{js,ts}"],
	fullyParallel: true,
	use: {
		// Base URL to use in actions like `await page.goto('/')`.
		baseURL: 'http://127.0.0.1:4173',
	
		// Collect trace when retrying the failed test.
		trace: 'on-first-retry',
	},
})