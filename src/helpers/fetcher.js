import axiosConfig from '@/helpers/axiosConfig';

// An async function, that takes a giving string - url(githup API url)
// and returns a promise response object using axios, which is further
// returned and cached and  by swvr function in swrvCache.js

export default async (url) => {
  const { data } = await axiosConfig(url).get();
  return data;
};
