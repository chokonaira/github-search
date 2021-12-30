import 'core-js/stable';
import 'regenerator-runtime/runtime';
import store from '@/store';
import useSWRVCache from '@/helpers/swrvCache';
import { allRepositoriesUrl, aRepositoryUrl } from '@/helpers/urlBuilder';
import { actions } from '@/store/actions';

jest.mock('@/helpers/swrvCache');

describe('store', () => {
  it('intitial store state', () => {
    const state = {
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
    };

    expect(store.state).toEqual(state);
  });

  describe('mutations', () => {
    it('sets a search tearm to the state', () => {
      const newSearchTearm = 'ArtNight';

      expect(store.state.searchTerm).toEqual('random');

      store.commit('SET_SEARCH_TERM', newSearchTearm);

      expect(store.state.searchTerm).toEqual('ArtNight');
    });

    it('sets current page to the state', () => {
      const page = 10;

      expect(store.state.currentPage).toEqual(1);

      store.commit('SET_CURRENT_PAGE', page);

      expect(store.state.currentPage).toEqual(10);
    });

    it('sets spinner and ensures notification popup is not shown', () => {
      expect(store.state.isLoading).toEqual(false);
      expect(store.state.isNotification).toEqual(false);

      store.commit('SET_SPINNER');

      expect(store.state.isLoading).toEqual(true);
      expect(store.state.isNotification).toEqual(false);
    });

    it('adds repositories to the state', () => {
      const repositories = [{ id: 1 }, { id: 2 }];

      expect(store.state.repositories).toEqual([]);
      expect(store.state.isRepositoriesFetched).toEqual(false);

      store.commit('ADD_REPOSITORIES', repositories);

      expect(store.state.repositories).toEqual(repositories);
      expect(store.state.isRepositoriesFetched).toEqual(true);
    });

    it('adds a repository to the state', () => {
      const repository = { id: 1 };

      expect(store.state.repository).toEqual({});
      expect(store.state.isRepoFetched).toEqual(false);

      store.commit('ADD_REPOSITORY', repository);

      expect(store.state.repository).toEqual(repository);
      expect(store.state.isRepoFetched).toEqual(true);
    });

    it('sets errors to the state', () => {
      const errors = 'error';

      expect(store.state.errors).toEqual(null);

      store.commit('SET_ERRORS', errors);

      expect(store.state.errors).toEqual(errors);
    });
  });

  describe('actions', () => {
    describe('Search Repositories', () => {
      const commit = jest.fn();
      const searchTerm = 'Search';
      const page = 1;
      const perPage = 10;

      it('dispatches fetchRepositories action succesfully', async () => {
        useSWRVCache.mockImplementation(() => ({
          data: [{ id: 1 }],
          error: {
            value: null,
          },
        }));

        await actions.fetchRepositories({ commit }, { searchTerm, page, perPage });

        expect(useSWRVCache).toHaveBeenCalled();
        expect(useSWRVCache).toHaveBeenCalledWith(allRepositoriesUrl(searchTerm, page, perPage));
        expect(commit).toHaveBeenCalledWith('SET_SPINNER');
        expect(commit).toHaveBeenCalledWith('SET_SEARCH_TERM', searchTerm);
        expect(commit).toHaveBeenCalledWith('SET_CURRENT_PAGE', page);
        expect(commit).toHaveBeenCalledWith('ADD_REPOSITORIES', [{ id: 1 }]);
      });

      it('dispatches fetchRepositories action with error', async () => {
        useSWRVCache.mockImplementation(() => ({
          data: null,
          error: {
            value: 'error',
          },
        }));

        await actions.fetchRepositories({ commit }, { searchTerm, page, perPage });

        expect(useSWRVCache).toHaveBeenCalled();
        expect(useSWRVCache).toHaveBeenCalledWith(allRepositoriesUrl(searchTerm, page, perPage));
        expect(commit).toHaveBeenCalledWith('SET_SPINNER');
        expect(commit).toHaveBeenCalledWith('SET_ERRORS', 'error');
      });
    });

    describe('Fetch Repository details', () => {
      const commit = jest.fn();
      const owner = 'owner';
      const repo = 'repo';
      it('dispatches fetchRepository action succesfully', async () => {
        useSWRVCache.mockImplementation(() => ({
          data: { id: 1 },
          error: {
            value: null,
          },
        }));

        await actions.fetchRepository({ commit }, { owner, repo });

        expect(useSWRVCache).toHaveBeenCalled();
        expect(useSWRVCache).toHaveBeenCalledWith(aRepositoryUrl(owner, repo));
        expect(commit).toHaveBeenCalledWith('SET_SPINNER');
        expect(commit).toHaveBeenCalledWith('ADD_REPOSITORY', { id: 1 });
      });

      it('dispatches fetchRepository action with error', async () => {
        useSWRVCache.mockImplementation(() => ({
          data: null,
          error: {
            value: 'error',
          },
        }));

        await actions.fetchRepositories({ commit }, { owner, repo });

        expect(useSWRVCache).toHaveBeenCalled();
        expect(useSWRVCache).toHaveBeenCalledWith(aRepositoryUrl(owner, repo));
        expect(commit).toHaveBeenCalledWith('SET_SPINNER');
        expect(commit).toHaveBeenCalledWith('SET_ERRORS', 'error');
      });
    });
  });
});
