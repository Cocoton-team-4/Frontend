const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
		"/v1/image-upload",
		createProxyMiddleware({
			target: "https://reborn.youchu.io",
			changeOrigin: true,
		})
	);
    app.use(
		"/posting",
		createProxyMiddleware({
			target: "https://9529-1-209-175-114.ngrok-free.app",
			changeOrigin: true,
		})
	);
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://reborn-image-test.s3.ap-northeast-2.amazonaws.com",
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/', // '/api'를 '/'로 치환 (시작 부분에 ^ 추가)
            },
        })
    );
    
};