import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';

export default {
  cache: new LocalStorageCache(),
  shouldRetryOnError: false,
  revalidateDebounce: 2000,
  refreshInterval: 2000,
  ttl: 60 * 60 * 1000,
};
