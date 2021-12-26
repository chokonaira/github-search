import axios from 'axios';

export default (baseURL) => (
  axios.create({
    baseURL,
    headers: {
      Authorization: `token ${process.env.VUE_APP_GITHUB_ACCESS_TOKEN}`,
    },
  }));
