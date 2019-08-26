<template>
  <div class="newsDetail about">
    <img class="banner-us" src="@/img/banner-detail.png" alt="">    
    <!-- <h6>智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章，哪些厂家的产品和方案更好？哪些新趋势您不得不知？</h6> -->
    <!-- <p  class="days">2019-06-19</p> -->
    <h6 v-html="newsTitle"></h6>
    <p  class="days">{{newsTime}}</p>
    <div class="content" v-for='(it,i) in list' v-bind:key="i">
      <div v-html="it.content">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../css/about.scss';
  @import '../css/news.scss';
</style>
<script>

// import {mapState} from "vuex"
export default {
  data(){
    return{
      // list:'市政路灯共杆催生万亿大市场，哪些跨域智慧系统集成工程项目将启动？</br>智慧（路灯）多功能杆将如何改变人类社会生活和城市管控的方式？运营平台如何构建？哪些创新设计和运营模式值得高度关注？</br>智慧城市1+N平台时代，智慧路灯产业将借力NB-IOT成为巨大的风口！</br>互联网+合同能源管理打造绿色低碳城市，《智能路灯宝典》升级版推出！</br>5G试商用推动宏基站和微基站建设，城市灯杆资源价值陡增，最新《智慧路灯系统集成技术》助力产业发展！</br>当前，5G商用已经开始，广东以及若干省市均加速推进5G网络建设，杆顶安装5G微基站已经成为共识。</br>如上图所示，5G、IOT、微波、WiFi均利用了杆平台，杆计算时代已经开始，见智慧城市中国：</br>5G应用推动交通基础设施升级，杆计算概念被提出，智慧杆产业发展迎来新机遇！</br>在杆计算平台之上，构建的数字灯网已经向我们走来其出现了多种变化，见：智慧路灯系列.jpg核心技术是物联网灯控技术，见：在杆上搭载的子系统可选的配套设备包括：</br>从而使得智慧路灯在城市照明当中正在成为万亿级的项目入口，整体的平台架构如下：</br>当前，智慧路灯已经成为一大新兴的行业，也必将伴随着5G以及未来6G的发展而深入演进。以杆为核心的创新时代已经来临，以下是部分企业的展示。',
      list:'',
      newsTitle:'',
      newsTime:''
    }
  },
  computed:{
    // ...mapState(['newList'])
  },
  methods:{

    getNewsDetail(newsId){
        this.$axios.get(`weixin/newsDetailList?newsId=${newsId}`).then(res=>{
          // console.log(res);
          this.list = res.data.newsDetailList;
        })
    }
    
    
    
  },
  mounted(){
    const newsId = this.$route.params.newsId;
    this.getNewsDetail(newsId);
    let that = this;
    that.newsTitle = this.$route.query.newsTitle;
    that.newsTime = this.$route.query.newsTime;
    //过滤出ID的唯一的标题跟时间
    

    // console.log(this.$store.getters.getNewDetailById(newsId));

    // this.showTitle = this.$store.getters.getNewDetailById(newsId)
    // console.log(this.showTitle)
  }
}



// 市政路灯共杆催生万亿大市场，哪些跨域智慧系统集成工程项目将启动？

// 智慧（路灯）多功能杆将如何改变人类社会生活和城市管控的方式？运营平台如何构建？哪些创新设计和运营模式值得高度关注？

// 智慧城市1+N平台时代，智慧路灯产业将借力NB-IOT成为巨大的风口！</br>互联网+合同能源管理打造绿色低碳城市，《智能路灯宝典》升级版推出！

// 5G试商用推动宏基站和微基站建设，城市灯杆资源价值陡增，最新《智慧路灯系统集成技术》助力产业发展！

// 当前，5G商用已经开始，广东以及若干省市均加速推进5G网络建设，杆顶安装5G微基站已经成为共识。

// 如上图所示，5G、IOT、微波、WiFi均利用了杆平台，杆计算时代已经开始，见智慧城市中国：

// 5G应用推动交通基础设施升级，杆计算概念被提出，智慧杆产业发展迎来新机遇！

// 在杆计算平台之上，构建的数字灯网已经向我们走来其出现了多种变化，见：智慧路灯系列.jpg核心技术是物联网灯控技术，见：在杆上搭载的子系统可选的配套设备包括：

// 从而使得智慧路灯在城市照明当中正在成为万亿级的项目入口，整体的平台架构如下：

// 当前，智慧路灯已经成为一大新兴的行业，也必将伴随着5G以及未来6G的发展而深入演进。以杆为核心的创新时代已经来临，以下是部分企业的展示。',
</script>
