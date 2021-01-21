/*
 * @Author: your name
 * @Date: 2021-01-21 10:40:03
 * @LastEditTime: 2021-01-21 14:21:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';



import './assets/css/common.css'
import lgComponents from "./components/index"
import 'lib-flexible'
Vue.config.productionTip = false;
Vue.use(lgComponents)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
