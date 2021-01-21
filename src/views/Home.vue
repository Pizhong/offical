<!--
 * @Author: your name
 * @Date: 2021-01-21 10:40:03
 * @LastEditTime: 2021-01-21 18:50:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical\src\views\Home.vue
-->
<template>
  <div class="container">
    <lg-Nav></lg-Nav>
    <div class="home-banner">
      <img src="../assets/image/enter.png" class="banner-btn">
      <div class="banner-tab flex">
        <ul>
          <li>
            <div class="tab"></div>
          </li>
          <li>
            <div class="tab"></div>
          </li>
          <li>
            <div class="tab"></div>
          </li>
          <li>
            <div class="tab"></div>
          </li>
          <li>
            <div class="tab"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-center">
      <div class="center-title">
        <img src="../assets/image/centerTextCN.png" class="img-CN">
        <img src="../assets/image/centerTextEN.png" class="img-EN">
      </div>
      <div class="center-item clearfix">
        <ul>
          <li>
            <div>
              <div class="item-top">
                <img src="../assets/image/item1.png" class="top-first-img">
                <img src="../assets/image/line.png" class="top-second-img">
                <span class="item-title">《怪兽世界》</span>
              </div>
              <div class="bottom">
                <span class="game-download">游戏下载</span>
                <span class="enter-offical">进入官网</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="item-top">
                <img src="../assets/image/item2.png" class="top-first-img">
                <img src="../assets/image/line.png" class="top-second-img">
                <span class="item-title">《怪兽世界》</span>
              </div>
              <div class="bottom">
                <span class="game-download">游戏下载</span>
                <span class="enter-offical">进入官网</span>
              </div>
            </div>
          </li>
          <li class="mgr0">
            <div>
              <div class="item-top">
                <img src="../assets/image/item3.png" class="top-first-img">
                <img src="../assets/image/line.png" class="top-second-img">
                <span class="item-title">《怪兽世界》</span>
              </div>
              <div class="bottom">
                <span class="game-download">游戏下载</span>
                <span class="enter-offical">进入官网</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="item-top">
                <img src="../assets/image/item4.png" class="top-first-img">
                <img src="../assets/image/line.png" class="top-second-img">
                <span class="item-title">《怪兽世界》</span>
              </div>
              <div class="bottom">
                <span class="game-download">游戏下载</span>
                <span class="enter-offical">进入官网</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="item-top">
                <img src="../assets/image/item5.png" class="top-first-img">
                <img src="../assets/image/line.png" class="top-second-img">
                <span class="item-title">《怪兽世界》</span>
              </div>
              <div class="bottom">
                <span class="game-download">游戏下载</span>
                <span class="enter-offical">进入官网</span>
              </div>
            </div>
          </li>
          <li class="mgr0">
            <div>
              <div class="item-top">
                <img src="../assets/image/item6.png" class="top-first-img">
                <img src="../assets/image/line.png" class="top-second-img">
                <span class="item-title">《怪兽世界》</span>
              </div>
              <div class="bottom">
                <span class="game-download">游戏下载</span>
                <span class="enter-offical">进入官网</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="page flex">
        <div class="page-left">
          &lt;　
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <div class="page-right flex">&gt;</div>
      </div>
    </div>
  </div>
</template>

<script>
import LgNav from '../components/Nav.vue';
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    LgNav
    
  },
};
</script>
<style lang="css" scoped>
.home-banner{
  width: 1920px;
  height: 676px;
  background: url('../assets/image/banner.png') no-repeat;
  background-size: 1920px 676px;
  position: relative;
}
.banner-btn{
  position: absolute;
  top: 408px;
  left: 356px;
}

.banner-tab{
  position: absolute;
  top: 625px;
  left: 50%;
  transform: translateX(-50%);
  width: 551px;
  height: 31px;
  background: url('../assets/image/tabBG.png') no-repeat;
}
.banner-tab ul li{
  float: left;
  margin-right: 5px;
  cursor: pointer;
}
.tab{
  width: 25px;
  height: 2px;
  background-color: #fff;
}
.product-center{
  width: 100%;
  height: 109px;
  background: url('../assets/image/centerBG.png') no-repeat;
  padding-top: 25px;
}
.center-title img{
  display: block;
  margin: auto;
}
.img-CN{
  margin-bottom: 10px!important;
}

.center-item{
  width: 1520px;
  margin-top: 60px;
  margin-left: 199px;
}
.center-item li {
  float: left;
  width: 470px;
  margin-right: 54px;
  margin-bottom: 54px ;
  background-color: #fff;
}
.item-top{
  width: 100%;
  background-color: #fff;
}
.top-first-img{
  width: 470px;
  height: 283px;
  margin-bottom: 20px;
}
.top-second-img{
  width: 10px;
  height: 36px;
  float: left;
  margin-left: 25px;
}
.item-title{
  color: #000;
  font-size: 24px;
  font-weight: bolder;
  font-family: "黑体";
  float: left;
}
.bottom{
  margin: 77px 0 20px 229px;
  font-size: 18px;
  color: #898989;
}
.game-download{
  display: inline-block;
  position: relative;
  margin-right: 46px;
}
.game-download::before{
  content: '';
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url('../assets/image/icon-download.png') no-repeat;
  background-size: 22px 22px;
  position: absolute;
  top: 0;
  left: -25px;
}
.enter-offical{
  display: inline-block;
  position: relative;
}
.enter-offical::before{
  content: '';
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url('../assets/image/icon-comming.png') no-repeat;
  background-size: 22px 22px;
  position: absolute;
  top: 0;
  left: -25px;
}

.page-left,.page-right,.page li{
  width: 55px;
  height: 55px;
  line-height: 55px;
  border: 1px solid #5c7aa9;
  color: #5c7aa9;
  font-size: 36px;
  font-weight: bold;
  float: left;
  cursor: pointer;
  margin-right: 13px;
}
.page li{
  color: #fff!important;
  background-color: #809ecd;
  font-weight: normal;
}
.page li:hover{
  background-color: #2d5ce8;
}
</style>