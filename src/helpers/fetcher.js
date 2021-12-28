import axiosConfig from '@/helpers/axiosConfig';

export default async (url) => {
  const { data } = await axiosConfig(url).get();
  return data;
};
