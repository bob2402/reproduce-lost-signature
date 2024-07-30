<script lang="ts">
	import '../app.css';
	import { ndk } from '$lib/ndk';
	let connected = false;

	$ndk.connect(5000).then(() => {
		connected = true;
	});
</script>

<div class="app">
	<main>
		{#if connected}
			<slot />
		{:else}
			<div>conntecting relay...</div>
		{/if}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
