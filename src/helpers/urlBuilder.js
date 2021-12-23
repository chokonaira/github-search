export default (payload, page = null, perPage = null) => `https://api.github.com/search/repositories?q=${payload}&order=desc&page=${page}&per_page=${perPage}`;
