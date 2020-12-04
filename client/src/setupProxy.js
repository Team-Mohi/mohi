const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  const socketProxy= createProxyMiddleware('/socket', {
    target: 'http://localhost:8080',
    changeOrigin: true,
    ws: true,
    logLevel: 'debug',
  });

  const cloundinaryProxy= createProxyMiddleware('/v1_1/mohi-vn/upload', {
    target: 'https://api.cloudinary.com',
    changeOrigin: true,
    ws: true,
    logLevel: 'debug',
  });

  app.use(socketProxy);
  app.use(cloundinaryProxy);
};
