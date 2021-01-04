module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://192.168.20.43:9091",
                changeOrigin: true, // 允许跨域
                // pathRewrite: { // 重写路径
                //   "^/api": "",
                // },
            },
        },
    },
}