## Github Search

A Vue app where users can search for Github repositories and based on their search a list of matching repositories would render. By default, the home page renders a default search for repositories that matches the word `Random`. Users can also vue details of a specific repository and see a graph of some activities within it. 

API request and caching are handled with [axios](https://www.npmjs.com/package/axios) and [SWRV](https://docs-swrv.netlify.app/guide/getting-started.html) with `LocalStorageCache`.
#### Github Actions CI Badges

[![Node.js CI](https://github.com/chokonaira/github-repository/actions/workflows/build.yml/badge.svg)](https://github.com/chokonaira/github-repository/actions/workflows/build.yml)

### Heroku Frontend URL
- https://henry-git-search.herokuapp.com/

### Heroku Backend URL
- https://henry-git-search-backend.herokuapp.com

### Backend Repository
- https://github.com/chokonaira/github-search-backend

### Project setup
- git clone https://github.com/chokonaira/github-repository.git
- npm install
- npm start

Note - The Github API is limited to 60 request per hour from the same IP address, it you intend to exceed that, you will need to create a [personal token](https://github.com/settings/tokens/new) on github, copy the variable key in `.env.example` file, add a new `.env` file in the root directory of this project, paste the variable and assign your newly created access token as the value. 

`Example` - `VUE_APP_GITHUB_ACCESS_TOKEN:<ghp_github-personal-token>`

### Run unit tests
- npm run test:unit

### Run your end-to-end tests
- npm run test:e2e

### Lints and fixes files
- npm run lint

### Documentation
#### Website Routes
- Search all repositories - `/`
- Fetch a specific repository details - `/repo-details/:owner/:repo`

#### Server Endpoints
- Search all repositories - `/repositories/${searchTerm}/${page}/${perPage}`
- Fetch a specific repositories - `/repositories/${owner}/${repo}`

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