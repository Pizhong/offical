<!--
 * @Author: your name
 * @Date: 2021-01-21 10:40:03
 * @LastEditTime: 2021-01-27 19:37:02
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: \offical\src\views\Home.vue
-->
<template>
  <div class="container">
    <!-- 导航栏 -->
    <lg-Nav></lg-Nav>
    <!-- banner部分 -->
    <div class="home-banner">
      <lg-swiper></lg-swiper>
      <!-- <img src="../assets/image/enter.png" class="banner-btn"> -->
    </div>
    <!-- 项目中心 -->
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
                <span class="enter-offical" @click="handleEnter()">进入官网</span>
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
                <span class="enter-offical" @click="handleEnter()">进入官网</span>
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
                <span class="enter-offical" @click="handleEnter()">进入官网</span>
              </div>
            </div>
          </li>
          <!-- <li>
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
          </li> -->
        </ul>
      </div>
      <div class="page flex">
        <div class="page-left flex">
          &lt;　
        </div>
        <ul>
          <li>1</li>
        </ul>
        <div class="page-right flex">&gt;</div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about-us flex">
      <div class="center-title mgt45 mgb28">
        <img src="../assets/image/aboutusCN.png" class="img-CN">
        <img src="../assets/image/aboutusEN.png" class="img-EN">
      </div>
      <!-- <div class="show-img flex">
        <ul>
          <li><img src="../assets/image/us-img1.png" alt=""></li>
          <li><img src="../assets/image/us-img2.png" alt=""></li>
          <li><img src="../assets/image/us-img3.png" alt=""></li>
        </ul>
      </div> -->
      <div class="about-content">
        <div class="about-content-title flex">
          <ul>
            <li v-for="(item,index) in aboutDataList" :key='index' @click="handleAboutThis(index)" :class="{'aboutCurrent':aboutCurrentIndex == index}">{{item}}</li>
          </ul>
        </div>
        <div class="about-content-main" v-show="isAbout[0]">
          <ul>
            <li>
              <p>掠宝网络，全称广东掠宝网络科技有限公司，成立于2018年，是一家专注于区块链技术研究及区块链游戏应用落地的研发型企业。</p>
            </li>
            <li>
              <p>掠宝网络具备丰富的区块链游戏开发经验，不断探索区块链技术与传统网络游戏的结合，致力于用区块链技术为游戏赋能，在降低区块链普通玩家进入门槛上取得了显著成效。</p>
            </li>
            <li>
              <p>旗下怪兽派（XPET）游戏工作室先后推出的《怪兽世界》《宠斗牌》《三国争霸》《梦幻怪兽》等区块链游戏，获得大量区块链游戏玩家的高度认可，积累了丰富的游戏社区运营经验，为今后研运一体打下了坚实的基础。</p>
            </li>
          </ul>
        </div>
        <div class="about-content-main "  v-show="isAbout[1]">
          <ul>
            <li>
              <p>2018年：掠宝网络（LOOTGAME）成立。</p>
            </li>
            <li>
              <p>2019年：掠宝自主研发的首款RPG养成类区块链游戏《怪兽世界》正式上线，是国内区块链游戏的代表作，同年发行的支线卡牌游戏《宠斗牌》，开创了区块链游戏资产跨游复用的先河，在区块链游戏领域获得多方赞誉。</p>
            </li>
            <li>
              <p>2020年：掠宝自主研发的基于三国IP的SLG策略游戏《三国争霸》和基于西游IP的2D回合制游戏《梦幻怪兽》正式上线，是国内首款2D回合制区块链游戏，获得高度关注。</p>
              </li>
          </ul>
        </div>
        <div class="about-content-main "  v-show="isAbout[2]">
          <ul>
            <li>
              <p>2019Dapp最具创新奖   权威区块链财经媒体金色财经颁发</p>
            </li>
            <li>
              <p>2019最佳区块链游戏   权威区块链游戏媒体游戏茶馆颁发</p>
            </li>
          </ul>
        </div>
        <!-- <div class="about-content-main "  v-show="isAbout[3]">
          <ul>
            <li>
              <p>XXXXXXXX，全称 XXXXXXXXXXX科技有限公司，成立于2009年，本着“为快乐而生”的企业理念，致力于网络游戏研发及运营，为用户带来更多的快乐游戏体验!公司现有员工500余名，年利
                润过亿，组织结构完善，是国内知名的网络游戏高新企业。2017年，公司收购XXXX，进一步拓展了新的游戏业务，并在网页游戏和H5游戏的细分市场进行了布局。</p>
            </li>
            <li>
              <p>为快乐而生，坚持＂精品研发”作为核心竞争力，崇尚拼搏的团队价值观，充分给予人才施展华的机会，更为员工创造平等、分享、快乐的工作平台。XXXX期待更多热爱游戏事业的新老朋
                友加入，让更多人享受真实的虚拟世界互动娱乐带来的美好。</p>
            </li>
          </ul>
        </div>
        <div class="about-content-main "  v-show="isAbout[4]">
          <ul>
            <li>
              <p>为快乐而生，坚持＂精品研发”作为核心竞争力，崇尚拼搏的团队价值观，充分给予人才施展华的机会，更为员工创造平等、分享、快乐的工作平台。XXXX期待更多热爱游戏事业的新老朋
                友加入，让更多人享受真实的虚拟世界互动娱乐带来的美好。</p>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="contact-us flex">
      <div class="center-title mgb60">
        <img src="../assets/image/contactusCN.png" class="img-CN">
        <img src="../assets/image/contactusEN.png" class="img-EN">
      </div>
      <div class="contact-us-controduce flex">
        <ul>
          <li><img src="../assets/image/logo2.png" ></li>
          <li><div></div></li>
          <li><p>掠宝网络成立至今，已经成为国内探索区块链技术与游戏应用结合的第一创新品牌，并且通过对游戏社区化运营的探索，成为为数不多研运一体和集区块链底层技术研究与游戏应用开发的两栖团队，立志成为国内区块链游戏的领先企业。未来，我们将逐步拓展海外市场，借助区块链全球化运营的优势，与国际一流区块链企业及游戏公司合作，高度开放的掠宝网络期待与您的合作。</p></li>
        </ul>
      </div>
      <div class="contact-content">
        <div class="contact-content-title flex mgb36">
          <ul>
            <li v-for="(item,index) in contactDataList" :key='index' @click="handleContactThis(index)" :class="{'aboutCurrent':contactCurrentIndex == index}">{{item}}</li>
          </ul>
        </div>
        <div class="contact-content-main" v-show="isContact[0]">
          <p class="contact-first-p">掠宝希望通过与各大游戏媒体网站、平台、渠道，游戏KOL建立长期稳定的合作伙伴关系，互利双方共建品牌。</p>
          <p class="contact-person">联系人：王先生</p>
          <p class="contact-email">邮箱：61587283@qq.com</p>
        </div>
        <div class="contact-content-main"  v-show="isContact[1]">
          <p class="contact-first-p">掠宝欢迎各类机构及个人合作，共建异业联盟，促进双方共同发展</p>
          <p class="contact-person">联系人：王先生</p>
          <p class="contact-email">邮箱：61587283@qq.com</p>
        </div>
        <div class="contact-content-main" v-show="isContact[2]">
          <p class="contact-first-p">掠宝欢迎致力于区块链及游戏领域的有识之士前来咨询，共谋发展</p>
          <p class="contact-person">联系人：苏小姐</p>
          <p class="contact-email">邮箱：46894795@qq.com</p>

        </div>
        <div class="contact-content-main"  v-show="isContact[3]">
          <p class="contact-first-p">您对产品和项目内容有任何问题，请您第一时间与我们的客服联系。</p>
          <p class="contact-person">客服微信：LootGlobal</p>
        </div>
        
      </div>
    </div>
    <!-- 页脚 -->
    <div class="footer clearfix flex">
      <ul>
        <li>
          <span>ITAM GAMES Inc. 14,</span><br>
          <span>Teheran-ro 26-gil,</span><br>
          <span>Gangnam-gu,Seoul, </span><br>
          <span>Republic of Korea (Zip Code: 06236)</span>
        </li>
        <li><div></div></li>
        <li>掠宝（粤ICP备18004981号-2）游戏资产交易平台 版权所有 2019-2020</li>
      </ul>
    </div>
  </div>
</template>

<script>
import LgNav from '../components/Nav.vue';
import LgSwiper from '../components/Swiper'

export default {
  name: 'Home',
  components: {
    LgNav,
    LgSwiper
  },
  data(){
    return{
      //关于我们
      isAbout:[true,false,false,false,false],
      aboutDataList:['公司概况','成长历程','获奖情况'],
      aboutCurrentIndex:0,
      //联系我们
      isContact:[true,false,false,false,false],
      contactDataList:['市场合作','商务合作','应聘咨询','客服专线'],
      contactCurrentIndex:0
    }
  },
  methods: {
      handleAboutThis(index){
        console.log(index,'index');
        this.aboutCurrentIndex=index
        for(let k in this.isAbout){
          if(index==k){
            this.isAbout[k]=true
          }
          else{
            this.isAbout[k]=false
          }
        }
      },
      handleContactThis(index){
        this.contactCurrentIndex=index
        for(let k in this.isContact){
          if(index==k){
            this.isContact[k]=true
          }
          else{
            this.isContact[k]=false
          }
        }
      },
      handleEnter(){
        console.log('点击进入官网');
      }
    },
    mounted(){
      
    
}
}
</script>
<style lang="css" scoped>
.home-banner{
  width: 1136px;
  height: 400px;
  /* background: url('../assets/image/banner.png') no-repeat; */
  /* background-size: 1920px 676px; */
  position: relative;
}
.banner-btn{
  position: absolute;
  top: 408px;
  left: 356px;
  width: 354px;
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
  
}
.center-title{
  width: 100%;
  height: 62px;
  background: url('../assets/image/centerBG.png') no-repeat;
  padding-top: 11px;
}
.center-title img{
  display: block;
  margin: auto;
}
.img-CN{
  margin-bottom: 10px!important;
  width: 83px;
}
.img-EN{
  width: 60px;
}
.center-item{
  width: 1520px;
  margin-top: 36px;
  margin-left: 120px;
}
.center-item li {
  float: left;
  width: 280px;
  margin-right: 25px;
  margin-bottom: 25px ;
  background-color: #fff;
}
.item-top{
  width: 100%;
  background-color: #fff;
}
.top-first-img{
  width: 280px;
  height: 166px;
  margin-bottom: 12px;
}
.top-second-img{
  width: 7px;
  height: 25px;
  float: left;
  margin-left: 12px;
}
.item-title{
  color: #000;
  font-size: 14.2px;
  font-weight: bolder;
  font-family: "黑体";
  float: left;
}
.bottom{
  margin: 47px 0 14px 135px;
  font-size: 10.65px;
  color: #898989;
}
.game-download{
  display: inline-block;
  position: relative;
  margin-right: 31px;
  cursor: pointer;
}
.game-download::before{
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url('../assets/image/icon-download.png') no-repeat;
  background-size: 15px 15px;
  position: absolute;
  top: 0;
  left: -20px;
}
.enter-offical{
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.enter-offical::before{
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url('../assets/image/icon-comming.png') no-repeat;
  background-size: 15px 15px;
  position: absolute;
  top: 0;
  left: -20px;
}

.page-left,.page-right,.page li{
  width: 33px;
  height: 33px;
  line-height: 33px;
  border: 1px solid #5c7aa9;
  color: #5c7aa9;
  font-size: 14.2px;
  font-weight: bold;
  float: left;
  cursor: pointer;
  margin-right: 10px;
}
.page li{
  color: #fff!important;
  background-color: #809ecd;
  font-weight: normal;
}
.page li:hover{
  background-color: #2d5ce8;
}

.page-left,
.page-right{
  background-color: #fff!important;
}

.show-img{
  margin-bottom: 93px;
}
.show-img li{
  float: left;
  margin-left:53px;
}
.show-img li img{
  width: 475px;
  
}
.about-content,
.contact-content{
  width: 1045px;
}
.about-content-title,
.contact-content-title{
  width: 100%;
  border-bottom: 1px solid #000;
}
.about-content-title li,
.contact-content-title li{
  float: left;
  font-size: 14.2px;
  color: #000;
  font-family: "黑体";
  width: 96px;
  padding-bottom: 12px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.about-content-title li:hover,
.contact-content-title li:hover{
  border-bottom: 3px solid #5e7ddb;
}
.aboutCurrent{
  border-bottom: 3px solid #5e7ddb !important;
}
.about-content-main{
  height: 153px;
  text-align: left;
  font-size: 11.83px;
  color:#898989;
  margin-top: 29px;
}

.about-content-main li{
  margin-bottom:23px
}
.contact-us-controduce{
  height: 170px;
  margin-bottom: 41px;
}
.contact-us-controduce li{
  float: left;
  margin-left: 46px;
}
.contact-us-controduce li img{
  width: 422px;
  margin-top: 20px;
}
.contact-us-controduce li div{
  width: 1px;
  height: 109px;
  background-color: #000;
}
.contact-us-controduce li p{
  width: 483px;
  font-size: 11.83px;
  color: #898989;
  text-align: left;
  margin-top:15px;
}
.contact-content-title{
  border-bottom: 1px solid #898989 !important;
}

.contact-content-main{
  height: 227px;
  text-align: left;
}

.contact-first-p{
  font-size:11.83px ;
  font-family: "黑体";
  color: #898989;
  margin-bottom: 21px;
}

.contact-person,
.contact-email{
  font-size: 13.02px;
  color:#181818;
  margin-bottom: 9px;
}

.footer{
  width: 100%;
  height: 113px;

  background: url('../assets/image/footerBG.png') no-repeat;
}

.footer li{
  float: left;
  font-size: 9.74px;
  color: #fff;
  text-align: left;
}
.footer li:first-of-type{
  margin-top:20px;
  margin-right: 36px;
}

.footer li:last-of-type{
  margin-top: 38px;
  margin-left: 32px;
}
.footer li div{
  width: 1px;
  height: 82px;
  background: #4f4f4f;
}

</style>
