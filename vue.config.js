/*
 * @Author: your name
 * @Date: 2021-01-21 10:56:13
 * @LastEditTime: 2021-01-21 17:05:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical\vue.config.js
 */

// 引入等比适配插件
const px2rem = require('postcss-px2rem')


const Timestamp = new Date().getTime();

module.exports = {
  publicPath: '/',
  outputDir: 'dist', //打包后的目录名称
  assetsDir: 'static', //静态资源目录名称
  productionSourceMap: false, //去掉打包的时候生成的map文件
  lintOnSave: false,
  filenameHashing: false,
  runtimeCompiler: false,
  configureWebpack: {
      output: { // 输出重构  打包编译后的 文件名称  【模块名称.时间戳】
          filename: `[name].${Timestamp}.js`,
          chunkFilename: `[name].${Timestamp}.js`
      },
  },
  lintOnSave: false,
  devServer: {
      overlay: {
          warning: false,
          errors: false
      }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 192, // 换算基数,默认为100
            exclude: /(node_module)/, // 默认false, 可以用正则表达式排除某些文件的转换
            mediaQuery: false, // 允许在媒体查询中转换px
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .options({
        remUnit: 16,
        remPrecision: 8
      })
      .end()
  }
  
}