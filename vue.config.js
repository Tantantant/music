module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // target: "http://localhost:3200",
        target: "http://192.168.20.39:9091/music",
        changeOrigin: true, // 允许跨域
        pathRewrite: { // 重写路径
          "^/api": "",
        },
      },
    },
  },
}