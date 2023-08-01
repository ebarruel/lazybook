// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import "unplugin-icons/types/svelte";

if (process.env.NODE_ENV === 'development') {
	import { worker } from "./mocks/browser";

	worker.start();
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
