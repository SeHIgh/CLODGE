// src/main/frontend/src/setProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathFilter : '/api',
        }),
    );
};