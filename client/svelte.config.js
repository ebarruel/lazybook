import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: false
		}),
		alias: {
			$samples: path.resolve("../samples"),
			$mocks: path.resolve("./src/mocks"),
          	$lib: path.resolve("./src/lib")
		}
	}
};

export default config;
