<!--
 * @Author: your name
 * @Date: 2021-01-26 09:46:43
 * @LastEditTime: 2021-01-28 11:10:51
 * @LastEditors: Please set LastEditors
 * @Description: 轮播图组件
 * @FilePath: \offical\src\components\Swiper.vue
-->
<template>
  <div class="banner">
  <div class="item flex">
    <img :src="dataList[currentIndex]">
  </div>
  <div class="page flex" v-if="this.dataList.length >= 1">
    <ul>
      <!-- <li @click="gotoPage(prevIndex)">&lt;</li> -->
      <li v-for="(item,index) in dataList" :key='index' @click="gotoPage(index)" :class="{'current':currentIndex == index}"><div></div></li>
      <!-- <li @click="gotoPage(nextIndex)">&gt;</li> -->
    </ul>
  </div>
</div>
</template>

<script>

  export default {
    data(){
      return{
      dataList:[require('../assets/image/banner.png')],
      currentIndex: 0,   //默认显示图片
      timer: null    //定时器
      }
    },
    components:{
    
    },
    methods:{
    gotoPage(index) {
    this.currentIndex = index;
    },
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 5000)
    }
    },
    computed:{
       //上一张
  prevIndex() {
    if(this.currentIndex == 0) {
      return this.dataList.length - 1;
    }else{
      return this.currentIndex - 1;
    }
  },
  //下一张
  nextIndex() {
    if(this.currentIndex == this.dataList.length - 1) {
      return 0;
    }else {
      return this.currentIndex + 1;
    }
  }
    },
    mounted(){
      console.log(this.dataList[0]);
      this.runInv()
    },
   
  }
</script>

<style lang="css" scoped>
    ul li {
        list-style: none;
        float: left;
        width: 25px;
        height: 2px;
        text-align: center;
        cursor: pointer;
        background-color:#fff;
        margin-left: 5px;
    }
    .banner {
        width: 100%;
        height: 400px;
        margin: 0 auto;
        position: relative;
    }
    .item{
      margin-top: 56px;
    }
    .banner img {
        width: 1136px;
        display: block;
    }
    .banner .page {
        
        position: absolute;
        top: 415px;
        left: 50%;
        transform: translateX(-50%);
        width: 551px;
        height: 31px;
        /* background: url('../assets/image/tabBG.png') no-repeat; */
    }
    .banner .page ul {
        /* float: right; */
    }
      /* .tab{
      width: 25px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      top: 50%;
    } */
    .current{
      background-color: blue;
    }
</style>