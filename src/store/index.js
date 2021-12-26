import { createStore } from 'vuex';
import axiosConfig from '@/helpers/axiosConfig';
import { allRepositoriesUrl, aRepositoryUrl } from '@/helpers/urlBuilder';

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
    SET_SEARCH_TERM(state, payload) {
      state.searchTerm = payload;
    },
    SET_CURRENT_PAGE(state, payload) {
      state.currentPage = payload;
    },
    SET_SPINNER(state) {
      state.isLoading = true;
      state.isNotification = false;
    },
    ADD_REPOSITORIES(state, payload) {
      state.isLoading = false;
      state.isRepositoriesFetched = true;
      state.repositories = payload;
    },
    ADD_REPOSITORY(state, payload) {
      state.isLoading = false;
      state.isRepoFetched = true;
      state.repository = payload;
    },
    SET_ERRORS(state, payload) {
      state.isLoading = false;
      state.errors = payload;
      state.isNotification = true;
    },
  },
  actions: {
    fetchRepositories({ commit, state }, { searchTerm, page }) {
      commit('SET_SPINNER');
      return axiosConfig(allRepositoriesUrl(searchTerm, page, state.perPage)).get()
        .then((data) => {
          commit('SET_SEARCH_TERM', searchTerm);
          commit('SET_CURRENT_PAGE', page);
          commit('ADD_REPOSITORIES', data.data);
        })
        .catch(({ message }) => {
          if (page > 67) {
            commit('SET_ERRORS', 'Only the first 1000 repos results are available');
          } else {
            commit('SET_ERRORS', message);
          }
        });
    },
    fetchRepository({ commit }, { owner, repo }) {
      commit('SET_SPINNER');
      return axiosConfig(aRepositoryUrl(owner, repo)).get()
        .then((data) => {
          commit('ADD_REPOSITORY', data.data);
        })
        .catch(({ message }) => {
          commit('SET_ERRORS', message);
        });
    },
  },
});
