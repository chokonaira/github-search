import useSWRV from 'swrv';
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';
import fetcher from '@/helpers/fetcher';

export default (key) => {
  const { data, error } = useSWRV(key, fetcher, {
    cache: new LocalStorageCache(),
    ttl: 60 * 60 * 1000, // keep stale data for only one hour
    dedupingInterval: 5000,
    shouldRetryOnError: true,
    errorRetryCount: 2,
    revalidateOnFocus: true,
    revalidateDebounce: 2000,
  });

  return {
    data,
    error,
  };
};
