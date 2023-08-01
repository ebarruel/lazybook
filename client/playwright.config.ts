import { defineConfig, PlaywrightTestProject } from "@playwright/test";

const setup: PlaywrightTestProject = {
	name: "setup",
	testMatch: ["tests/global.setup.ts"]
}

const config: PlaywrightTestProject = {
	dependencies: [ "setup" ]
}

export default defineConfig({
	webServer: {
		command: "npm run build && npm run preview",
		port: 4173
	},
	testDir: "./tests",
	testMatch: ["**/*.{js,ts}"],
	fullyParallel: true,
	use: {
		// Base URL to use in actions like `await page.goto('/')`.
		baseURL: 'http://127.0.0.1:4173',
	
		// Collect trace when retrying the failed test.
		trace: 'on-first-retry',
	},
	projects: [
		setup,
		config
	]
})