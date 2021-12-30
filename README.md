## Github Search

A Vue app leveraging the [Gihub API](https://docs.github.com/en/rest), where users can search for Github repositories and based on their search a list of matching repositories would render. By default, the home page renders a default search for repositories that matches the word `Random`. Users can also vue details of a specific repository and see some details like, repo owners username, date of creation and a graph of some other activities within it like number of forks, stars, issues, etc. 

API request and caching are handled with [axios](https://www.npmjs.com/package/axios) and [SWRV](https://docs-swrv.netlify.app/guide/getting-started.html) with `LocalStorageCache`.
#### Github Actions CI Badges

[![Node.js CI](https://github.com/chokonaira/github-repository/actions/workflows/build.yml/badge.svg)](https://github.com/chokonaira/github-repository/actions/workflows/build.yml)

### Heroku Frontend URL
- https://henry-git-search.herokuapp.com/

### Heroku Backend URL
- https://henry-git-search-backend.herokuapp.com

### Backend Repository URL
- https://github.com/chokonaira/github-search-backend

### Project setup
- git clone https://github.com/chokonaira/github-repository.git
- npm install
- npm start

### Run unit tests
- npm run test:unit

### Run your end-to-end tests
- npm run test:e2e

### Lints and fixes files
- npm run lint

### Documentation
#### Website Routes
- Search all repositories page - `/`
- Fetch a specific repository details page - `/repo-details/:owner/:repo`

#### Server Endpoints
- Search all repositories - `/repositories/:searchTerm/:page/perPage`
- Fetch a specific repositories - `/repositories/:owner/:repo`

#### Github URL Base
- Search all repositories - `https://api.github.com/search/repositories`
- Fetch a specific repository details - `https://api.github.com/repos/`

#### Core Technology & tools
##### Scaffolding and development
- [Vue CLI](https://cli.vuejs.org/guide/) 
- [Vue 3](https://v3.vuejs.org/guide/migration/introduction.html#overview) 
- [Vue Composition Api](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Chart](https://www.npmjs.com/package/vue3-charts)
- [Express](https://expressjs.com/)
##### API Request and caching
- [Axios](https://www.npmjs.com/package/axios)
- [SWRV](https://docs-swrv.netlify.app/)

##### Testing
- [Vue Test Utils](https://vue-test-utils.vuejs.org/)
- [E2e](https://www.cypress.io/)

##### Component Library & Styling
- [SCSS](https://sass-lang.com/)
- [BalmUI](https://material.balmjs.com/#/)

##### Devops - CI/CD
- [Github actions](https://github.com/features/actions)
- [Heroku](https://dashboard.heroku.com/)
