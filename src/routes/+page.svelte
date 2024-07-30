<script lang="ts">
	import { ndk } from '$lib/ndk';
	import { NDKKind } from '@nostr-dev-kit/ndk';
	import { onDestroy } from 'svelte';

	const text = $ndk.storeSubscribe({ kinds: [NDKKind.Text] });

	onDestroy(() => {
		text.unsubscribe();
	});
</script>

<p>
	{$text.length} texts seen
</p>
