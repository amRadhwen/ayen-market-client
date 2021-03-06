const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ayen-market-server.herokuapp.com/',
      changeOrigin: true,
    })
  );
};
