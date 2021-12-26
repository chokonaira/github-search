import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    isLoading: false,
    isRepositoriesFetched: false,
    isRepoFetched: false,
    errors: null,
    isNotification: false,
    searchTerm: 'random',
    repositories: [],
    repository: {},
    currentPage: 1,
    perPage: 15,
  },
  mutations: {
    setSearchTerm(state, payload) {
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
      try {
        commit('setSpinner');
        const { data } = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&page=${page}&per_page=${state.perPage}`);
        commit('setSearchTerm', searchTerm);
        commit('setCurrentPage', page);
        commit('addRepositories', data);
      } catch ({ message }) {
        if (page > 67) {
          commit('setErrors', 'Only the first 1000 repos results are available');
        } else {
          commit('setErrors', message);
        }
      }
    },
    async fetchRepository({ commit }, { owner, repo }) {
      try {
        commit('setSpinner');
        const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
        commit('addRepository', data);
      } catch (error) {
        commit('setErrors', error.message);
      }
    },
  },
});
