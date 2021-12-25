import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    isLoading: false,
    isFetched: false,
    errors: null,
    isNotification: false,
    searchTerm: null,
    repositories: [],
    repository: {},
  },
  mutations: {
    setsearchTerm(state, payload) {
      state.searchTerm = payload;
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
    addRepository(state, payload) {
      state.isLoading = false;
      state.isFetched = true;
      state.repository = payload;
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
        commit('setsearchTerm', payload);
        commit('addRepositories', data);
      } catch (error) {
        commit('apiError', error.message);
      }
    },
    async fetchRepository({ commit }, { owner, repo }) {
      try {
        commit('setSpinner');
        const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
        commit('addRepository', data);
      } catch (error) {
        commit('apiError', error.message);
      }
    },
  },
});
