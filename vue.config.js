/*
 * @Author: your name
 * @Date: 2021-01-21 10:56:13
 * @LastEditTime: 2021-01-27 19:25:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical\vue.config.js
 */

// 引入等比适配插件
const px2rem = require('postcss-px2rem')
const CompressionWebpackPlugin = require('compression-webpack-plugin');

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
            rootValue: 133.6, // 换算基数,默认为100
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
        remUnit: 133.6,
        remPrecision: 8
      })
      .end()

      config.module
      .rule('min-image')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ disable: process.env.NODE_ENV == 'development' ? true : false })//此处为ture的时候不会启用压缩处理,目的是为了开发模式下调试速度更快,网上错误示例直接写为disable:true,如果不去查看文档肯定是要被坑的
      .end()

      if (process.env.NODE_ENV === 'production') {
        // 启动时动态创建一个html：http://localhost:8888/report.html
        // config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        // 生成一个静态html，report.html
        config.plugin('webpack-report').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [
            {
                analyzerMode: 'static'
            }
        ]);
    }

    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
            // Provide path to the file with resources
            // 要公用的scss的路径
            resources: './src/assets/css/common.scss'
        })
        .end()
    })
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
        config.plugins.push(
            ...[
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: /\.(js|css|html|svg)$/i,
                    threshold: 2048,
                    minRatio: 0.8
                })
            ]
        );
    }
}
}