/*
 * @Author: your name
 * @Date: 2021-01-21 11:35:11
 * @LastEditTime: 2021-01-26 09:49:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical\src\components\index.js
 */

import Nav from './Nav.vue'
import Swiper from './Swiper.vue'
const components = [
  Nav,
  Swiper
]

export default{
  install(Vue){
    components.map(component => {
      Vue.component('lg' + component.name, component)
  })
  }
}