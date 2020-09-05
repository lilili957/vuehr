'use strict'

const path = require('path')

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/': {    //这个 / 是和axios中的baseUrl一致的
        target: 'http://localhost:8082',
        changeOrigin: true,
        pathRewrite: {
          // '^/l': '/login_p'     //这个是将前端的 /l 请求 重写成后端的 /login_p 请求
          // "^/": ''
        }
      }
    }
  }
}