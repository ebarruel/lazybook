import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import Icons from "unplugin-icons/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
	plugins: [
		nodePolyfills(),
		sveltekit(),
		Icons({
			compiler: "svelte"
		})
	],
	test: {
		include: ["tests/**/*.{unit,spec}.{js,ts}"]
	}
});
