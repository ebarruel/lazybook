<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { Capacitor } from "@capacitor/core";

	const isPWA = (win: Window): boolean =>
		!!(
			win.matchMedia?.("(display-mode: standalone)").matches ||
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(win.navigator as any).standalone
		);

	onMount(() => {
		console.log("Are we native?", Capacitor.isNativePlatform());
		if (Capacitor.isNativePlatform()) {
			console.log("Found native shell, redirecting");
			goto("/app");
			return;
		}
		if (isPWA(window)) {
			console.log("In PWA - on wrong route - redirecting");
			goto("/app");
		} else goto("/app");
	});
</script>
