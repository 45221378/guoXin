<template>
  <div class="about">
    <img class="banner-us" src="@/img/aboutus/banner-us.png" alt="">
    <!-- <router-view/> -->
    <section class="nav">
        <p>
          <span class="active">企业介绍</span>
          <span @click="gowenhua">企业文化</span>
        </p>
    </section>
    <Aboutus/>

    <section class="wedo">
        <div class="wedo-title">
          <i></i>
          <h5>我们在做什么</h5>
          <i></i>
        </div>
        <ul class="wedo-list">
          <li>
            <img src="@/img/aboutus/lamp.png" alt="构建全球智慧生态">  
            <h6>构建全球智慧生态</h6>
            <p>我们结合物联网与云计算技术，自主研发出融合产品一体化可面向多种任务的城市公共照明管理方案——城市道路照明综合管理的整体解决方案。</p>
          </li>
          <li>
            <img src="@/img/aboutus/pc-set.png" alt="贡献智慧解决方案">  
            <h6>贡献智慧解决方案</h6>
            <p>我们会结合您所属行业的类型及产品的特点设计出更加商业化、国际化的专业网站、彰显公司能力以及品牌价值。我们拥有资深的行业顾问，专业的产品研发，严格的系统测试，完善的售后服务。</p>
          </li>
          <li>
            <img src="@/img/aboutus/hourse.png" alt="软件服务提供商">  
            <h6>软件服务提供商</h6>
            <p>通过城市道路照明综合管理系统实现统一的管控，为未来的智慧城市发展提供更多的切入口,也是智慧城市数据采集的终端。</p>
          </li>
        </ul>
    </section>
    <section class="advantage">
      <div class="advantage-title">
        <i></i>
        <h5>我们的优势</h5>
        <i></i>
      </div>
      <ul class="advantage-list">
        <li>
          <h6>01</h6>
          <p>为全国多处重要城市智慧建设提供系统方案,经验丰富</p>
        </li>
        <li>
          <h6>02</h6>
          <p>企院合作、研发力量雄厚、技术全国领先</p>
        </li>
        <li>
          <h6>03</h6>
          <p>中国城市设计院战略合作单位</p>
        </li>
        <li>
          <h6>04</h6>
          <p>良好的售后服务架构</p>
        </li>
      </ul>

    </section>

    <section class="culture">
      <div class="culture-title">
        <i></i>
        <h5>企业文化</h5>
        <i></i>
      </div>
      
      <p class="culture-p">企业理念/企业定位/企业使命/企业愿景</p>
      <ul class="culture-list">
        <li>
          <div class="div-hover">
            <h6>企业理念</h6>
          <span>自主创新</span>
          <span>科学发展</span>
          <span>专注服务</span>
          <span>合作共赢</span>
          </div>
          
        </li>
        <li>
           <div class="div-hover">
          <h6>企业定位</h6>
          <span>智慧城市场景师</span>
          <span>产业资源整合家</span>
          <span>移动互联生力军</span>
          <span>创新探索试验田</span>
          <span>和谐生态建设者</span>
        </div>
        </li>
        <li>
           <div class="div-hover">
          <h6>企业使命</h6>
          <span>贡献智慧解决方案</span>
          <span>释放产业发展空间</span>
          <span>构建全球智慧生态</span>
          </div>
        </li>
        <li>
           <div class="div-hover">
          <h6>企业愿景</h6>
          <span>成为国内领先的智慧</span>
          <span>路灯照明与智慧城市</span>
          <span>建设解决方案提供商</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Aboutus from "../components/Aboutus";
  export default {
    name: "about",
    components: {
      Aboutus
    },
    data(){
      return{
        mId:''
      }
    },
    watch:{

    },
    mounted(){
      let mId = this.$route.query.mId;
      // console.log(document.documentElement.scrollTop);
      if(!mId){
        document.documentElement.scrollTop = 0;
      }
      if(mId=='qyjs'){
        document.documentElement.scrollTop = 300;
      }
      if(mId=='qywh'){
        document.documentElement.scrollTop = 2200;
      }
    },
    methods:{
      gowenhua(){
        document.documentElement.scrollTop = 2200;
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../css/about.scss";
</style>
