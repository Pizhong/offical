<!--
 * @Author: your name
 * @Date: 2021-01-21 11:24:21
 * @LastEditTime: 2021-01-28 17:47:08
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
        <li><button @click="toHover1(0)">首页</button></li>
        <li><button @click="toHover1(1)">产品中心</button></li>
        <li><button @click="toHover1(2)">关于我们</button></li>
        <li><button @click="toHover1(3)">联系我们</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Nav',
    data(){
      return{
        handleIndex:0
      }
    },
    methods:{
      toHover1(index){
      
        document.getElementById('hover'+index).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
      // switch(index){
      //   case 0:
      //     document.documentElement.scrollTop=0
      //     break;
      //   case 1:
      //       document.documentElement.scrollTop=390
      //     break;
      //   case 2:
      //     document.documentElement.scrollTop=660
      //     break;
      //   case 3:
      //     document.documentElement.scrollTop=840
      //     break;
      //     default:
      //     console.log(111);
      // }
        this.handleIndex=index
        
      }
    }
  }
</script>

<style lang="css" scoped>
.nav-container{
  width: 100%;
  height: 56px;
  background: url('../assets/image/navBG.png') no-repeat;
  background-size: 100%;
  position: fixed;
  z-index: 999;
}
.nav-logo{
  width: 373px;
  height: 56px;
  float: left;
  
}
.nav-logo img{
  width: 373px;
  height: 56px;
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