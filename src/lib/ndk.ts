import NDKSvelte from '@nostr-dev-kit/ndk-svelte';
import NDKCacheAdapterDexie from '@nostr-dev-kit/ndk-cache-dexie';
import { writable } from 'svelte/store';

import { browser } from '$app/environment';

const _ndk = new NDKSvelte({
	explicitRelayUrls: ['wss://relay.nostrocket.org']
});

if (browser && window.indexedDB) {
	_ndk.cacheAdapter = new NDKCacheAdapterDexie({ dbName: 'test' });
}

export const ndk = writable(_ndk);
