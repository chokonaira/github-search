import useSWRV from 'swrv';
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';
import fetcher from '@/helpers/fetcher';

// Configuration helper wrapping a stale while validate module,
// which takes in a unique key identify - github url as first argument,
// an async function as second argument which takes the request url
// and returns a promise, by default it uses javascript fetch if no fetcher is passed or null.
// The third argument is opetional, here I passed in a object
// with cache plugin and other configurations as per needed.

export const cacheConfig = {
  cache: new LocalStorageCache(),
  dedupingInterval: 5000,
  errorRetryCount: 2,
  revalidateDebounce: 2000,
  revalidateOnFocus: true,
  shouldRetryOnError: true,
  ttl: 60 * 60 * 1000, // 1 hour stale cached data validity
};

export default (key) => {
  const { data, error } = useSWRV(key, fetcher, cacheConfig);

  return {
    data,
    error,
  };
};
