<script lang="ts">
	import { ndk } from '$lib/ndk';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import type { NDKEventStore } from '@nostr-dev-kit/ndk-svelte';
	import { onDestroy } from 'svelte';

	// test data
	const rName = 'NOSTROCKET';
	const rPubkey = 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075';

	let rocketEvents: NDKEventStore<NDKEvent> | undefined;

	$: if (rName && rPubkey) {
		//the user wants the latest valid state of this rocket
		rocketEvents = $ndk.storeSubscribe(
			[
				{ '#d': [rName], authors: [rPubkey], kinds: [31108 as number] },
				{ '#a': [`31108:${rPubkey}:${rName}`] }
			],
			{ subId: rName }
		);
	}

	let rocketEvents2 = $ndk.storeSubscribe({ kinds: [31108 as number] }, { subId: 'rocketEvents2' });

	onDestroy(() => {
		rocketEvents?.unsubscribe();
		rocketEvents2.unsubscribe();
	});
</script>

<div class="container">
	<div class="case1">
		{#if $rocketEvents}
			<p>
				{$rocketEvents.length} events seen
			</p>
			{#each $rocketEvents as rocket}
				<p>{rocket.id} - {rocket.sig}</p>
			{/each}
		{/if}
	</div>
	<div class="case2">
		{#if $rocketEvents2}
			<p>
				{$rocketEvents2.length} events seen
			</p>
			{#each $rocketEvents2 as rocket}
				<p>{rocket.id} - {rocket.sig}</p>
			{/each}
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 100%;
		text-wrap: balance;
	}
	.container > div {
		flex: 1 1 0%;
		min-width: 0;
	}
	.case1 {
		background: red;
	}
	.case2 {
		background: green;
	}
</style>
