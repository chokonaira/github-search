// src/composables/swr-cache.js
import { reactive, toRefs } from 'vue';
import LRU from 'lru-cache';

import asArray from '@/helpers/asArray';

const CACHE = new LRU({ max: 5000 });

const DEFAULT_OPTIONS = {
  dedupingInterval: 5000,
  ttl: 60 * 60 * 1000,
};

export const STATE = {
  ERROR: 'ERROR',
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  VALIDATING: 'VALIDATING',
};

export function useSwrCache(parameter, callback, customOptions) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...customOptions,
  };

  // Wrap `parameter` in an array if it is not an array already.

  const cacheKey = asArray(parameter);
  const cacheKeyDedupe = `${cacheKey}_dedupe`;
  const cachedResponse = CACHE.get(cacheKey);

  // Use the reactive object from the cache or create a new one.
  const response = cachedResponse || reactive({
    data: null,
    error: null,
    isError: false,
    reload: undefined,
    state: undefined,
  });

  if (!cachedResponse) CACHE.set(cacheKey, response);

  const load = async () => {
    try {
      // Dedupe requests during the given interval.
      if (CACHE.get(cacheKeyDedupe)) return;

      CACHE.set(cacheKeyDedupe, true, options.dedupingInterval, options.ttl);

      response.state = response.data ? STATE.VALIDATING : STATE.LOADING;
      // Wait for the result of the callback and set
      // the reactive `data` property.
      response.data = Object.freeze(await callback(...cacheKey));
      response.state = STATE.IDLE;
      console.log(response.data, 'here');
    } catch (error) {
      console.log(error);

      CACHE.del(cacheKeyDedupe);

      response.isError = true;
      response.error = error.message;
      response.state = STATE.ERROR;
    }
  };

  response.reload = load;
  load();

  return toRefs(response);
}
