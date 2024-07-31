# Reproduce the lost signature

## Preconditions

- Use NDKCacheAdapterDexie as the cacheAdapter for NDK

## Reproduction steps

1. Run `npm build` and `npm preview`.
2. Open the page.
3. In the left part, all events have a signature.
4. Wait a few seconds, then refresh the page.
5. In the left part, some events do not have a signature.

Clearing indexdb can reproduce the issue again.
