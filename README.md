## Github Search

A Vue app where users can search for Github repositories and based on their search a list of matching repositories would render. By default, the home page renders a default search for repositories that matches the word `Random`. Users can also vue details of a specific repository and see a graph of some activities within it. 

API request and caching are handled with [axios](https://www.npmjs.com/package/axios) and [SWRV](https://docs-swrv.netlify.app/guide/getting-started.html) with `LocalStorageCache`.
#### Github Actions CI Badges

[![Node.js CI](https://github.com/chokonaira/github-repository/actions/workflows/build.yml/badge.svg)](https://github.com/chokonaira/github-repository/actions/workflows/build.yml)

### Heroku URL
- https://henry-git-search.herokuapp.com/

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
