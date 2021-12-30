import useSWRVCache from '@/helpers/swrvCache';
import { allRepositoriesUrl, aRepositoryUrl } from '@/helpers/urlBuilder';

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  fetchRepositories({ commit }, { searchTerm, page, perPage }) {
    commit('SET_SPINNER');

    const { data, error } = useSWRVCache(allRepositoriesUrl(searchTerm, page, perPage));

    commit('SET_SEARCH_TERM', searchTerm);
    commit('SET_CURRENT_PAGE', page);
    commit('ADD_REPOSITORIES', data);

    if (error.value) {
      commit('SET_ERRORS', error.value);
    }
  },

  fetchRepository({ commit }, { owner, repo }) {
    commit('SET_SPINNER');

    const { data, error } = useSWRVCache(aRepositoryUrl(owner, repo));

    commit('ADD_REPOSITORY', data);

    if (error.value) {
      commit('SET_ERRORS', error.value);
    }
  },
};
