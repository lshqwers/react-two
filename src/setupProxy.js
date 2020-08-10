const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://cnodejs.org', // 目标地址   https://cnodejs.org/api/v1 
        changeOrigin: true
      })
    );
    app.use(
      '/jd',
      createProxyMiddleware({
        target: 'http://localhost:9999', // 目标地址 http://localhost:9999  代理改完重启服务器
        changeOrigin: true
      })
    );
  };
// 这个文件要在src里面 