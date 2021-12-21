import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    isLoading: false,
    popupNotification: false,
    errors: null,
    searchValue: null,
    repositories: [],
  },
  mutations: {
    validatedInput(state, payload) {
      state.errors = payload;
      state.popupNotification = true;
    },
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
    setSpinner(state) {
      state.isLoading = true;
      state.popupNotification = false;
    },
    addRepositories(state, payload) {
      state.isLoading = false;
      state.repositories = payload.items;
    },
    apiError(state, payload) {
      state.isLoading = false;
      state.errors = payload;
      state.popupNotification = true;
    },
  },
  actions: {
    async fetchRepositories({ commit }, payload) {
      try {
        commit('setSpinner');
        const { data } = await axios.get(`https://api.github.com/search/repositories?q=${payload}&page=10`);
        commit('setSearchValue', payload);
        commit('addRepositories', data);
      } catch (error) {
        commit('apiError', error.message);
      }
    },
  },
});
