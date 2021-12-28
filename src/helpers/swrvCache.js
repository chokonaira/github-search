import useSWRV from 'swrv';
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';
import fetcher from '@/helpers/fetcher';

export default (key) => {
  const { data, error } = useSWRV(key, fetcher, {
    cache: new LocalStorageCache(),
    dedupingInterval: 5000,
    shouldRetryOnError: false,
    ttl: 60 * 60 * 1000,
  });

  return {
    data,
    error,
  };
};
