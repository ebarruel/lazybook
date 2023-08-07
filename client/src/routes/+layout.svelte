<script lang="ts">
	import { dev } from "$app/environment";

	// Loaded from .env.local, guide covers this
	// step in a moment.
	const isMockEnabled = dev && import.meta.env.VITE_MOCK_ENABLED === "true";
	// Flag to defer rendering of components
	// until certain criteria are met on dev,
	// e.g. MSW init.
	let isReady = !isMockEnabled;

	if (isMockEnabled) {
		import("$mocks").then((res) => res.inject()).then(() => (isReady = true));
	}
</script>

{#if isReady}
	<slot />
{/if}
