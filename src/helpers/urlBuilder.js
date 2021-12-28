// A helper to help build heroku url with needed dynamic parameters

export const allRepositoriesUrl = (searchTerm, page, perPage) => `https://henry-git-search-backend.herokuapp.com/repositories/${searchTerm}/${page}/${perPage}`;
export const aRepositoryUrl = (owner, repo) => `https://henry-git-search-backend.herokuapp.com/repositories/${owner}/${repo}`;
