const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
		"/imageupload",
		createProxyMiddleware({
			target: "https://reborn.youchu.io/v1/image-upload",
			changeOrigin: true,
		})
	);
};