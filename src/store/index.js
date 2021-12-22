import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    isLoading: false,
    isFetched: false,
    errors: null,
    isNotification: false,
    searchValue: null,
    repositories: [],
  },
  mutations: {
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
    setSpinner(state) {
      state.isLoading = true;
      state.isNotification = false;
    },
    addRepositories(state, payload) {
      state.isLoading = false;
      state.isFetched = true;
      state.repositories = payload;
    },
    apiError(state, payload) {
      state.isLoading = false;
      state.errors = payload;
      state.isNotification = true;
    },
  },
  actions: {
    async fetchRepositories({ commit }, payload = 'random') {
      try {
        commit('setSpinner');
        const { data } = await axios.get(`https://api.github.com/search/repositories?q=${payload}&page=1`);
        commit('setSearchValue', payload);
        commit('addRepositories', data);
      } catch (error) {
        commit('apiError', error.message);
      }
    },
  },
});
