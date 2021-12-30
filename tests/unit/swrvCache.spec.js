import 'core-js/stable';
import 'regenerator-runtime/runtime';
import useSWRV from 'swrv';
import useSWRVCache, { cacheConfig } from '@/helpers/swrvCache';
import fetcher from '@/helpers/fetcher';

jest.mock('swrv');

describe('useSWRVCache.js', () => {
  it('succesfull useSWRV response', async () => {
    const key = 'https://repositories';

    useSWRV.mockImplementation(() => ({
      data: [{ id: 1 }],
      error: null,
    }));

    useSWRVCache(key);

    expect(useSWRV).toHaveBeenCalled();
    expect(useSWRV).toHaveBeenCalledWith(key, fetcher, cacheConfig);
    expect(useSWRV).toHaveReturnedWith({
      data: [{ id: 1 }],
      error: null,
    });
  });

  it('unsuccesfull useSWRV response', async () => {
    const key = 'https://repositories';

    useSWRV.mockImplementation(() => ({
      data: null,
      error: 'Error occured',
    }));

    useSWRVCache(key);

    expect(useSWRV).toHaveBeenCalled();
    expect(useSWRV).toHaveBeenCalledWith(key, fetcher, cacheConfig);
    expect(useSWRV).toHaveReturnedWith({
      data: null,
      error: 'Error occured',
    });
  });
});
