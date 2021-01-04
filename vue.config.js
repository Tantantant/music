module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://y.qq.com",
                changeOrigin: true, // 允许跨域
                // pathRewrite: { // 重写路径
                //   "^/api": "",
                // },
            },
        },
    },
}