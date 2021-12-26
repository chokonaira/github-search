export const allRepositoriesUrl = (searchTerm, page, perPage) => `https://api.github.com/search/repositories?q=${searchTerm}&page=${page}&per_page=${perPage}`;

export const aRepositoryUrl = (owner, repo) => `https://api.github.com/repos/${owner}/${repo}`;
