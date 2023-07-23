// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import "unplugin-icons/types/svelte";
import type { mockServer } from "./server";

mockServer();

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
