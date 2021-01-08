module.exports = {
<<<<<<< HEAD
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true, // 允许跨域
				pathRewrite: {
					// 重写路径
					'^/api': ''
				}
			}
		}
	}
=======
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/data",
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 重写路径
          "^/api": "",
        },
      },
    },
  },
>>>>>>> eeb1ada854ed1efe66a5a96ab8ebc52e6dda8368
};

