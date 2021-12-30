import { createStore } from 'vuex';
import { mutations } from '@/store/mutations';
import { actions } from '@/store/actions';

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
  mutations,
  actions,
});
