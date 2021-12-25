import { createStore } from 'vuex';
import useSWRV from 'swrv';
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';
import fetcher from '@/helpers/fetcher';

export default createStore({
  state: {
    isLoading: false,
    isRepositoriesFetched: false,
    isRepoFetched: false,
    errors: null,
    isNotification: false,
    searchTerm: null,
    repositories: [],
    repository: {},
    currentPage: 1,
    perPage: 15,
  },
  mutations: {
    setsearchTerm(state, payload) {
      state.searchTerm = payload;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    setSpinner(state) {
      state.isLoading = true;
      state.isNotification = false;
    },
    addRepositories(state, payload) {
      state.isLoading = false;
      state.isRepositoriesFetched = true;
      state.repositories = payload;
    },
    addRepository(state, payload) {
      state.isLoading = false;
      state.isRepoFetched = true;
      state.repository = payload;
    },
    setErrors(state, payload) {
      state.isLoading = false;
      state.errors = payload;
      state.isNotification = true;
    },
  },
  actions: {
    async fetchRepositories({ commit, state }, { searchTerm, page }) {
      commit('setSpinner');
      console.log(searchTerm, page);

      const { data, error } = useSWRV(`https://api.github.com/search/repositories?q=${searchTerm}&page=${page}&per_page=${state.perPage}`, fetcher, {
        cache: new LocalStorageCache(),
        shouldRetryOnError: false,
        revalidateDebounce: 2000,
        refreshInterval: 2000,
        ttl: 60 * 60 * 1000,
      });
      commit('setsearchTerm', searchTerm);
      commit('setCurrentPage', page);
      commit('addRepositories', data);

      if (error.value) {
        commit('setErrors', error.value);
      }
    },
    async fetchRepository({ commit }, { owner, repo }) {
      commit('setSpinner');
      const { data, error } = useSWRV(`https://api.github.com/repos/${owner}/${repo}`, fetcher, {
        cache: new LocalStorageCache(),
        shouldRetryOnError: false,
        revalidateDebounce: 2000,
        refreshInterval: 2000,
        ttl: 60 * 60 * 1000,
      });
      commit('addRepository', data);
      if (error.value) {
        commit('setErrors', error.value);
      }
    },
  },
});
