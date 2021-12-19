// eslint-disable-next-line no-unused-vars
const api = (mix) => {
  if (mix.env.isDev) {
    mix.copy('node_modules/balm-ui/fonts/*', '@/assets/fonts');
  }
};
