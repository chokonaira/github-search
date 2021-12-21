import axios from 'axios';

const config = {
  baseURL: 'https://api.github.com/search/repositories',
};

const Api = axios.create(config);

export default Api;
