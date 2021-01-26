<!--
 * @Author: your name
 * @Date: 2021-01-21 10:40:03
 * @LastEditTime: 2021-01-26 14:35:37
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: \offical\src\views\Home.vue
-->
<template>
  <div class="container">
    <lg-Nav></lg-Nav>
    
    <div class="home-banner">
      <lg-swiper></lg-swiper>
      <!-- <img src="../assets/image/enter.png" class="banner-btn"> -->
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
    <div class="about-us flex">
      <div class="center-title mgt82 mgb60">
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
              <p>XXXXXXXX，全称 XXXXXXXXXXX科技有限公司，成立于2009年，本着“为快乐而生”的企业理念，致力于网络游戏研发及运营，为用户带来更多的快乐游戏体验!公司现有员工500余名，年利
                润过亿，组织结构完善，是国内知名的网络游戏高新企业。2017年，公司收购XXXX，进一步拓展了新的游戏业务，并在网页游戏和H5游戏的细分市场进行了布局。</p>
            </li>
            <li>
              <p>XXXX具有完全自主知识产权的游戏引擎和游戏开发平台，研发实力一流，旗下拥有经验丰富的市场发行团队和运营支撑体系，运营基础雄厚。现时，淘乐网络拥有多个产品工作室，在端游
                手游领域拥有多款主流经典作品，如端游《XX》、《XX、《XXXX》、手游《XXX》等。旗下子公司 XXXXXXXXX＞代表作有《XXXX、《XXX》等。淘乐网络旗下
                品凭借优秀的产品品质，服务质量获得多项行业内优秀奖项及玩家认可，累计游戏用户数过亿。</p>
            </li>
            <li>
              <p>为快乐而生，坚持＂精品研发”作为核心竞争力，崇尚拼搏的团队价值观，充分给予人才施展华的机会，更为员工创造平等、分享、快乐的工作平台。XXXX期待更多热爱游戏事业的新老朋
                友加入，让更多人享受真实的虚拟世界互动娱乐带来的美好。</p>
            </li>
          </ul>
        </div>
        <div class="about-content-main "  v-show="isAbout[1]">
          <ul>
            <li>
              <p>XXXX具有完全自主知识产权的游戏引擎和游戏开发平台，研发实力一流，旗下拥有经验丰富的市场发行团队和运营支撑体系，运营基础雄厚。现时，淘乐网络拥有多个产品工作室，在端游
                手游领域拥有多款主流经典作品，如端游《XX》、《XX、《XXXX》、手游《XXX》等。旗下子公司 XXXXXXXXX＞代表作有《XXXX、《XXX》等。淘乐网络旗下
                品凭借优秀的产品品质，服务质量获得多项行业内优秀奖项及玩家认可，累计游戏用户数过亿。</p>
            </li>
            <li>
              <p>为快乐而生，坚持＂精品研发”作为核心竞争力，崇尚拼搏的团队价值观，充分给予人才施展华的机会，更为员工创造平等、分享、快乐的工作平台。XXXX期待更多热爱游戏事业的新老朋
                友加入，让更多人享受真实的虚拟世界互动娱乐带来的美好。</p>
            </li>
          </ul>
        </div>
        <div class="about-content-main "  v-show="isAbout[2]">
          <ul>
            <li>
              <p>XXXXXXXX，全称 XXXXXXXXXXX科技有限公司，成立于2009年，本着“为快乐而生”的企业理念，致力于网络游戏研发及运营，为用户带来更多的快乐游戏体验!公司现有员工500余名，年利
                润过亿，组织结构完善，是国内知名的网络游戏高新企业。2017年，公司收购XXXX，进一步拓展了新的游戏业务，并在网页游戏和H5游戏的细分市场进行了布局。</p>
            </li>
            <li>
              <p>XXXX具有完全自主知识产权的游戏引擎和游戏开发平台，研发实力一流，旗下拥有经验丰富的市场发行团队和运营支撑体系，运营基础雄厚。现时，淘乐网络拥有多个产品工作室，在端游
                手游领域拥有多款主流经典作品，如端游《XX》、《XX、《XXXX》、手游《XXX》等。旗下子公司 XXXXXXXXX＞代表作有《XXXX、《XXX》等。淘乐网络旗下
                品凭借优秀的产品品质，服务质量获得多项行业内优秀奖项及玩家认可，累计游戏用户数过亿。</p>
            </li>
          </ul>
        </div>
        <div class="about-content-main "  v-show="isAbout[3]">
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
        </div>
      </div>
    </div>
    <div class="contact-us flex">
      <div class="center-title mgb60">
        <img src="../assets/image/contactusCN.png" class="img-CN">
        <img src="../assets/image/contactusEN.png" class="img-EN">
      </div>
      <div class="contact-us-controduce flex">
        <ul>
          <li><img src="../assets/image/logo2.png" ></li>
          <li><div></div></li>
          <li><p>网络网络成立至今，已经成为中国坚持自主研发民族原创网游的新兴品牌。并且成为华南地区少数拥有，研发、运营、发行一体化能力以及拥有端游、页游、手游多平台多维度多产品的研发型
            网络游戏公司。淘乐网络与国内数百家媒体保持长期合作关系，产品出口东南亚、南亚数十个国家和地区，未来将在全领域与世界一流游戏公司合作，立志成为国内线游戏厂商。＂真诚互信，包容开放”x欢迎与您合作。</p></li>
        </ul>
      </div>
      <div class="contact-content">
        <div class="contact-content-title flex mgb60">
          <ul>
            <li v-for="(item,index) in contactDataList" :key='index' @click="handleContactThis(index)" :class="{'aboutCurrent':contactCurrentIndex == index}">{{item}}</li>
          </ul>
        </div>
        <div class="contact-content-main" v-show="isContact[0]">
          <p class="contact-first-p">XXXXXXXXXX热诚欢迎全球各地的厂商与我们接洽各类合作事宜，携手打造完美的商业模式</p>
          <p class="contact-person">联系人：陈先生</p>
          <p class="contact-email">邮箱：bd@lootglobal.com</p>
        </div>
        <div class="contact-content-main"  v-show="isContact[1]">
          <p class="contact-first-p">XXXXXXXXXX热诚欢迎全球各地的厂商与我们接洽各类合作事宜，携手打造完美的商业模式</p>
        </div>
        <div class="contact-content-main" v-show="isContact[2]">
          <p class="contact-first-p">XXXXXXXXXX热诚欢迎全球各地的厂商与我们接洽各类合作事宜，携手打造完美的商业模式</p>
          <p class="contact-person">联系人：陈先生</p>
        </div>
        <div class="contact-content-main"  v-show="isContact[3]">
          <p class="contact-email">邮箱：bd@lootglobal.com</p>
        </div>
        <div class="contact-content-main"  v-show="isContact[4]">
          <p class="contact-person">联系人：陈先生</p>        
        </div>
      </div>
    </div>
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
      aboutDataList:['公司概况','投资管理','公司文化','成长历程','获奖情况'],
      aboutCurrentIndex:0,
      //联系我们
      isContact:[true,false,false,false,false],
      contactDataList:['海外合作','市场合作','商务合作','应聘咨询','客服专线'],
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
  width: 1920px;
  height: 676px;
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
  width: 136px;
}
.img-EN{
  width: 107px;
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
  cursor: pointer;
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
  cursor: pointer;
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
  width: 1765px;
}
.about-content-title,
.contact-content-title{
  width: 100%;
  border-bottom: 1px solid #000;
}
.about-content-title li,
.contact-content-title li{
  float: left;
  font-size: 24px;
  color: #000;
  font-family: "黑体";
  width: 160px;
  padding-bottom: 17px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}
.about-content-title li:hover,
.contact-content-title li:hover{
  border-bottom: 3px solid #5e7ddb;
}
.aboutCurrent{
  border-bottom: 3px solid #5e7ddb !important;
}
.about-content-main{
  height: 479px;
  text-align: left;
  font-size: 20px;
  color:#898989;
  margin-top: 60px;
}

.about-content-main li{
  margin-bottom:44px
}
.contact-us-controduce{
  height: 190px;
  margin-bottom: 124px;
}
.contact-us-controduce li{
  float: left;
  margin-left: 96px;
}
.contact-us-controduce li img{
  width: 725px;
  margin-top: 30px;
}
.contact-us-controduce li div{
  width: 1px;
  height: 190px;
  background-color: #000;
}
.contact-us-controduce li p{
  width: 780px;
  font-size: 20px;
  color: #898989;
  text-align: left;
  margin-top:25px;
}
.contact-content-title{
  border-bottom: 1px solid #898989 !important;
}

.contact-content-main{
  height: 390px;
  text-align: left;
}

.contact-first-p{
  font-size:20px ;
  font-family: "黑体";
  color: #898989;
  margin-bottom: 45px;
}

.contact-person,
.contact-email{
  font-size: 22px;
  color:#181818;
  margin-bottom: 16px;
}

.footer{
  width: 100%;
  height: 191px;

  background: url('../assets/image/footerBG.png') no-repeat;
}

.footer li{
  float: left;
  font-size: 16px;
  color: #fff;
  text-align: left;
}
.footer li:first-of-type{
  margin-top:52px;
  margin-right: 62px;
}

.footer li:last-of-type{
  margin-top: 80px;
  margin-left: 62px;
}
.footer li div{
  width: 1px;
  height: 150px;
  background: #4f4f4f;
}

</style>
