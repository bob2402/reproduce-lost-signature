<script lang="ts">
	import '../app.css';
	import { ndk } from '$lib/ndk';
	let connected = false;

	$ndk.connect(5000).then(() => {
		connected = true;
	});
</script>

<main>
	{#if connected}
		<slot />
	{:else}
		<div>conntecting relay...</div>
	{/if}
</main>
