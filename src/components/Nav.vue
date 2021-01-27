<!--
 * @Author: your name
 * @Date: 2021-01-21 11:24:21
 * @LastEditTime: 2021-01-27 19:33:40
 * @LastEditors: Please set LastEditors
 * @Description: 导航组件
 * @FilePath: \offical\src\components\LgNav.vue
-->

<template>
  <div class="nav-container">
    <div class="nav-logo clearfix">
      <img src="../assets/image/logo.png" alt="">
    </div>
    <div class="nav-select clearfix">
      <ul>
        <li><button>首页</button></li>
        <li><button>产品中心</button></li>
        <li><button>关于我们</button></li>
        <li><button>联系我们</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Nav'
  }
</script>

<style lang="css" scoped>
.nav-container{
  width: 1136px;
  height: 48px;
  background: url('../assets/image/navBG.png') no-repeat;
}
.nav-logo{
  width: 536px;
  height: 48px;
  float: left;
}
.nav-logo img{
  width: 536px;
  height: 48px;
}
.nav-select{
  float: right;
  margin-top:10px;
  margin-right: 100px;
  
  
}
.nav-select li{
  float: left;
  margin-left: 15px;
  
}

.nav-select button{
  width: 53px;
  height: 30px;
  color: #e1e9d4;
  border-radius: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 11.83px;
}

.nav-select button:hover{
    background-color: #1d3c97;
}
</style>