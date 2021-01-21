<!--
 * @Author: your name
 * @Date: 2021-01-21 10:40:03
 * @LastEditTime: 2021-01-21 15:19:33
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
    <div></div>
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
  width: 100%;
  height: 676px;
  background: url('../assets/image/banner.png') no-repeat;
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

</style>