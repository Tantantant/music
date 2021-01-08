module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 重写路径
          "^/api": "",
        },
      },
    },
  },
};

