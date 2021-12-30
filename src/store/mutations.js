// eslint-disable-next-line import/prefer-default-export
export const mutations = {
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
};
