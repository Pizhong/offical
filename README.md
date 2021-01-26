<!--
 * @Author: your name
 * @Date: 2021-01-21 10:41:23
 * @LastEditTime: 2021-01-26 14:34:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical\README.md
-->
# offical

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 关于项目运行
```
1、首先npm i，下载相关依赖
```

```
2、下载插件
   npm i lib-flexible -S 
   npm i postcss-plugin-px2rem 
   npm i compression-webpack-plugin@5.0.1
   npm i image-webpack-loader
```

```
3、进行node_modules，打开lib-flexible/flexible.js，修改 refreshRem()函数
  if (width / dpr > 1920) {
            width = 1920 * dpr;
        }
        if (width / dpr < 1300) {
          width = 1300 * dpr;
      }

```
```
4、npm run serve 运行项目
```
```
5、npm run build 打包项目
```


### 代码目录
```
   |-- vue.config.js  进行项目的全局配置
    |-- dist          打包目录
    |-- public        
    |   |-- favicon.ico
    |   |-- index.html
    |-- src         
        |-- App.vue  根组件
        |-- main.js  入口文件
        |-- assets   静态资源
        |   |-- css  放置公共样式
        |   |-- image 放置图片
        |-- components  放置功能性组件，并通过index.js全局暴露
        |-- router  路由
        |-- store  状态管理
        |-- util  工具
        |-- views  放置页面组件

```