import NDKSvelte from '@nostr-dev-kit/ndk-svelte';
import { writable } from 'svelte/store';

const _ndk = new NDKSvelte({
	explicitRelayUrls: ['wss://nos.lol']
});

export const ndk = writable(_ndk);
