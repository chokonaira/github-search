import { allRepositoriesUrl, aRepositoryUrl } from '@/helpers/urlBuilder';

describe('dateFormatter.js', () => {
  it('contructs a url to search for all repositories', () => {
    const searchTerm = 'search';
    const page = 1;
    const perPage = 10;
    const builder = allRepositoriesUrl(searchTerm, page, perPage);

    expect(builder).toEqual('https://henry-git-search-backend.herokuapp.com/repositories/search/1/10');
  });

  it('contructs a url to fetch a specific owners repository', () => {
    const owner = 'owner';
    const repo = 'repo';
    const builder = aRepositoryUrl(owner, repo);

    expect(builder).toEqual('https://henry-git-search-backend.herokuapp.com/repositories/owner/repo');
  });
});
