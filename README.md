<!--
 * @Author: your name
 * @Date: 2021-01-21 10:41:23
 * @LastEditTime: 2021-01-25 11:06:49
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
2、npm i lib-flexible -S 
   npm i postcss-plugin-px2rem 
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