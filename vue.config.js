const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.VUE_APP_CONTEXT_PATH,
  transpileDependencies: [],
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {
    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      '/dev-api': {
        // target: `http://kingzuo.tpddns.cn:10100/`,
        target: `http://47.121.188.98:10100/`,//`http://ng.onlineshop.net.cn:13000/gxyj-api2/`,http://localhost:10100/
        changeOrigin: true,
        pathRewrite: {
          "/dev-api/":""
        }
      }
    }
  },
}