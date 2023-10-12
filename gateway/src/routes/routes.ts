const routes = [
  {
    url: '/user',
    auth: false,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5
    },
    proxy: {
      target: `https://${process.env.AUTH_API_HOST}:${process.env.PORT}/user`,
      changeOrigin: true,
      pathRewrite: {
        ['^/user']: '',
      },
    }
  },
  {
    url: '/auth',
    auth: false,
    proxy: {
      target: 'https://www.slbenfica.pt/',
      changeOrigin: true,
      pathRewrite: {
        ['^/auth']: '',
      },
    }
  }
];

export default routes;