import 'core-js/stable';
import 'regenerator-runtime/runtime';
import MockAdapter from 'axios-mock-adapter';
import fetcher from '@/helpers/fetcher';
import { allRepositoriesUrl, aRepositoryUrl } from '@/helpers/urlBuilder';
import axiosConfig from '@/helpers/axiosConfig';

describe('fetcher.js', () => {
  describe('Search all repositories', () => {
    const searchTerm = 'search';
    const page = 1;
    const perPage = 10;
    const mockAdapter = new MockAdapter(axiosConfig(allRepositoriesUrl(searchTerm, page, perPage)));

    it('Successfull https request that returns a list all repos matching search term', async (done) => {
      const reposData = [
        {
          total_count: 20,
          created_at: '2016-06-01T21:12:52Z',
          watchers_count: 204,
          forks_count: 80,
          open_issues_count: 4,
        },
        {
          total_count: 30,
          created_at: '2016-06-01T21:12:52Z',
          watchers_count: 204,
          forks_count: 50,
          open_issues_count: 2,
        },
      ];

      const payload = mockAdapter.onGet()
        .reply(200, reposData);

      await fetcher(allRepositoriesUrl(searchTerm, page, perPage));
      expect(payload.handlers.get[0][4]).toEqual(reposData);
      done();
    });

    it('UnSuccessfull async https request and returns a error', async (done) => {
      const errorMessage = 'Error 404, No repositories matches this search';

      const payload = mockAdapter.onGet()
        .reply(200, errorMessage);

      await fetcher(allRepositoriesUrl(searchTerm, page, perPage));
      expect(payload.handlers.get[0][4]).toEqual(errorMessage);
      done();
    });
  });
  describe('Fetch a specific repository', () => {
    const owner = 'githubwing';
    const repo = 'ZoomHeader';
    const mockAdapter = new MockAdapter(axiosConfig(aRepositoryUrl(owner, repo)));

    it('Successfull https request that returns a repos matching owner and title', async (done) => {
      const repoData = {
        total_count: 0,
        created_at: '2016-06-01T21:12:52Z',
        watchers_count: 20,
        forks_count: 0,
        open_issues_count: 4,
      };

      const payload = mockAdapter.onGet()
        .reply(200, repoData);

      await fetcher(aRepositoryUrl(owner, repo));
      expect(payload.handlers.get[0][4]).toEqual(repoData);
      done();
    });

    it('UnSuccessfull async https request and returns a error', async (done) => {
      const errorMessage = 'Error 404, repo not found';

      const payload = mockAdapter.onGet()
        .reply(200, errorMessage);

      await fetcher(aRepositoryUrl(owner, repo));
      expect(payload.handlers.get[0][4]).toEqual(errorMessage);
      done();
    });
  });
});
