<template>  
  <div class="about slovecase">
    <img class="banner-us" src="@/img/solvecase/banner-solve.png" alt="">    
    <section class="nav">
        <p>
          <span class="active">智慧照明综合管理平台</span>
          <span @click="godenggan">智慧灯杆</span>
          <span @click="gocpxx">产品选型</span>
        </p>
    </section>
    <section class="solvecase h5-title">
      <div class="zhzm">
        <div class="content-title">
          <i></i>
          <h5>智慧照明综合管理平台解决方案</h5>
          <i></i>
        </div>
        <p class="zhzm-detail">随着国家工程建设招标政策的不断完善，PPP、EMC等城市道路照明“建维一体化”模式的大规模试点，多功能共杆、5G基站、交管设施的搭载融合，路灯经营模式即将发生变化，市场保护壁垒随之被打破，路灯建设市场面临不断被侵蚀的风险。</p>
        <ul class="zhzm-main">
          <li>
            <img src="@/img/solvecase/three.png" alt="">
          </li>
          <li>
            <p class="mgt66">目前，路灯中心业务管理系统主要以监控系统、生产管理系统、GIS系统、工程管理系统“四大系统”为主。由于“四大系统”开发时间早、开发厂家不同、构架模式陈旧，自2008投运以来，仅仅针对系统的部分功能模块进行了调整，但“四大系统”依然存在硬件落后、功能缺失、数据不实、升级困难等问题，已无法满足各大业务流程管理以及新业务功能扩展的要求。</p> 
            <p>国信天宇希望通过提升综合管理和科技信息水平，建设以城市道路照明管理为核心，构建融合智能应用技术和现代信息技术，广域泛在、开放共享的综合管理系统，促进路灯运维、建设、经营、服务灵活介入、协调互动、多能互补，提高数字化管理水平，弥补系统和人员不足。</p>
          </li>
        </ul>
      </div>
      <section class="think h5-title">
        <div class="content-title">
          <i></i>
          <h5 class="colorwhite">创新思维</h5>
          <i></i>
        </div>
        <div class="show-img">
          <ul>
            <li>
              <img src="@/img/solvecase/pcsink.png" alt="">
              <div class="img-content">
                <h6>平台化思想</h6>
                <p class="p1">高度融合的</p>
                <p class="p1">平台化思想</p>
              </div>
            </li>
            <li>
              <img src="@/img/solvecase/white.png" alt="">
              <div class="img-content">
                <h6>建设设计理念</h6>
                <p class="p1">全域资产数字化</p>
                <p class="p1">业务财务一体化</p>

              </div>
            </li>
            <li>
              <img src="@/img/solvecase/five.png" alt="">
              <div class="img-content">
                <h6>五大核心能力</h6>
                <p class="p3">高度灵活的链接能力、</p>
                <p class="p3">扩展及弹性能力、</p>
                <p class="p3">业务支撑能力、</p>
                <p class="p3">设计极简能力、</p>
                <p class="p3">保障能力</p>
              </div>
            </li>
          </ul>
        </div>
      </section> 
      <Trait/>
      <section class="ywjg clearfix">
        <div class="width1142">
          <div class="ywjg-left">
            <h6>业务构架</h6>  
            <p>“城市道路照明综合管理系统”采用应用层、服务层以及设备层的三层架构形式,应用层包括监控、GIS、智慧照明控制、工程管理、生产管理等10个应用模块；服务层采用分布式“微服务”架构，根据业务场景需求，进行业务功能的“微服务”拆分，通过注册中心以及网关，进行“微服务”之间的功能调用和数据交互，以及满足未来其他子系统的扩展接口；设备层为多功能灯杆、监控等设备为平台提供数据及服务支持，并且运用“云服务”的消息功能以及AI人工智能技术，进行应用的扩展。</p>
          </div>
          <div class="ywjg-right">
            <img src="@/img/solvecase/list1.png" alt="">
          </div>
        </div>
      </section>
      <section class="ptgh h5-title">
        <div class="content-title">
          <i></i>
          <h5>平台规划</h5>
          <i></i>
        </div>
        <ul class="ptgh-ul clearfix">
          <li>
            <div class="nohover">
              <img class="img" src="@/img/solvecase/jiantou1.png" alt="">
              <p class="p-1">核心业务平台化</p>
            </div>
            

            <div class="hover">
              <img class="img-hover" src="@/img/solvecase/jiantou1-1.png" alt="">
              <h6>核心业务平台化</h6>
              <i></i>
              <p class="p-2">V1.0 通过GIS+监控，将路灯基本信息以及数据采集与控制、告警智能化</p>
              <p class="p-2">V2.0 将生产办公系统加入智慧平台，实现监控与生产系统智能化，APP功能实现</p>
            </div>
          </li>
          <li>
            <div class="nohover">
            <img class="img"  src="@/img/solvecase/jiantou2.png" alt="">
            <p class="p-1">管理数据智能化</p>
            </div>

            <div class="hover">
              <img class="img-hover" src="@/img/solvecase/jiantou2-2.png" alt="">
              <h6>管理数据智能化</h6>
              <i></i>
              <p class="p-2">工程系统、物料系统</p>
              <p class="p-2">档案系统接入平台</p>
              <p class="p-2">数据建模、采集、业务分析</p>
            </div>

          </li>
          <li>
            <div class="nohover">
            <img class="img"  src="@/img/solvecase/jiantou3.png" alt="">
            <p class="p-1">决策智能化</p>
            </div>

            <div class="hover">
              <img class="img-hover" src="@/img/solvecase/jiantou3-3.png" alt="">
              <h6>决策智能化</h6>
              <i></i>
              <p class="p-2">整合各系统数据与信息</p>
              <p class="p-2">数据训练、深度学习</p>
              <p class="p-2">实际问题预测、智能决策</p>
            </div>
          </li>
        </ul>
      </section>
      <section class="mbxg">
        <div class="content-title">
          <i></i>
          <h5 class="colorwhite">目标及效果</h5>
          <i></i>
        </div>
        <ul class="mbxg-wenzi" id="mbxg-wenzi">
          <li class="mgt155 " :class="fadeClass">
            <h6>业务渠道多样化</h6>
            <span>智能硬件开放平台 </span>
            <span>“物-物”互联</span>
            <span>“人-物”互联 </span>
            <span>标杆领军地位</span>
          </li>
          <li class="mgt126" :class="fadeClass">
            <h6>管理手段丰富化</h6>
            <span>强化措施</span>
            <span>丰富手段</span>
            <span>扁平化 </span>
            <span>碎片化管理</span>
          </li>
          <li class="mgt98 " :class="fadeClass">
            <h6>业务办公移动化</h6>
            <span>智慧政府办公平台</span>
            <span>随时随地交流互动</span>
            <span>摆脱时间和场所局限</span>
          </li>
          <li class="mgt70 " :class="fadeClass">
            <h6>业务数据一体化</h6>
            <span>打通“数据孤岛”</span>
            <span>数据集中和共享</span>
            <span>线上线下一体化</span>
          </li>
        </ul>
        <div class="mbxg-img clearfix">
            <!-- <img class="img1" src="@/img/solvecase/icon1.png" alt="">
            <img class="img2" src="@/img/solvecase/icon2.png" alt="">
            <img class="img3" src="@/img/solvecase/icon3.png" alt="">
            <img class="img4" src="@/img/solvecase/icon4.png" alt="">
            <img class="img5" src="@/img/solvecase/icon5.png" alt=""> -->
            <img class="img" src="@/img/solvecase/WechatIMG40.png" alt="">
        </div>
      </section>
      <section class="zhdg h5-title">
        <div class="content-title">
          <i></i>
          <h5>智慧灯杆</h5>
          <i></i>
        </div>
        <p class="zhdg-detail">智慧城市就是运用信息和通信技术手段感测、分析、整合城市运行核心系统的各项关键信息，从而对包括民生、环保、公共安全、城市服务、工商业活动在内的各种需求做出智能响应。其实质是利用先进的信息技术，实现城市智慧式管理和运行，进而为城市中的人创造更美好的生活，促进城市的和谐、可持续成长。</p>
        <ul class="zhdg-ul">
          <li>
            <div>
              <h4>智慧城市之智慧灯杆</h4>
            </div>
            <div class="zhdg-main clearfix">
              <img class="fl-left img1" src="@/img/solvecase/list2.png" alt="">
              <p class="fl-right p1">智慧灯杆作为智慧城市的重要“切入口”，也是智慧城市的重要组成部分。集合了音视频监控设备、无线基站、WIFI热点、多媒体屏幕、充电桩以及天气、环境等各种感知器，依托于强大的综合管理平台，有效实现智能照明、绿色能源、智能安防、无线城市、互通互联、智能感知、智慧交通、智慧市政等诸多应用。智慧灯杆的“固定性”、“持续性”、“易实施”以及应用多元化的“强变现”等特殊属性，有利于快速布局抢占智慧城市入口形成有效壁垒。</p>
            </div>
          </li>
          <li>
            <div>
              <h4>通信运营商多功能路灯杆</h4>
            </div>
            <div class="zhdg-main clearfix">
              <p class="fl-left p2">为了满足用户日益旺盛的通信需求，并解决移动通信传统宏站面临的基站选址难、建设难和保有难的“三大难”问题，智能灯杆融合通信运营商，承载小基站（Small　Cell）、无线宽带等诸多功能绿色、融合、智能化的需求，形成多功能路灯杆。可依托路灯杆深入城市大街小巷的特点，快速覆盖移动通信传统宏站盲区，与传统宏站互补结合，满足未来5G建设需求，并有效实现城市WIFI与监控的多功能覆盖。</p>
              <img class="fl-right img2" src="@/img/solvecase/loop.png" alt="">            
            </div>
          </li>
          <li class="borderNone">
            <div>
              <h4>智慧照明</h4>
            </div>
            <div class="zhdg-main clearfix border-none">
              <img class="fl-left img3" src="@/img/solvecase/list3.png" alt="">
              <p class="fl-right p3">21世纪以来，能源危机和环境污染严重,“节能减排”已成为全球节能号召，备受瞩目。其中，照明节能是“节能减排”中非常重要的一环，传统照明带来大量二氧化碳等气体的排放，对于环境的影响也将越来越大，随着城市照明快速发展，上述问题还将更加突出。在照明用电中，路灯占有相当的份额，由于线路工作时间长，耗能非常之大，推广绿色照明势在必行。确保按时、按需点亮每一盏灯，并能有效地节省路灯的用电电量、延长灯泡的寿命、降低维护和管理的成本是现代效能型社会追求的目标。因此，探索和应用新型的绿色的照明供电方式，对温室气体减排目标，意义十分重大。</p>
            </div>
          </li>
        </ul>
      
      
      </section>
      <section class="cpxx h5-title">
        <div class="content-title">
          <i class="bgwhite"></i>
          <h5 class="colorwhite">产品选型</h5>
          <i class="bgwhite"></i>
        </div>
      
        <p class="cpxx-detail">通过应用先进、高效、可靠的电力线载波通信技术和无线GPRS/CDMA通信技术等，实现对路灯的远程集中控制与管理的路灯，包括单灯控制，PM2.5检测、天气情况、5G微基站，以及根据车流量自动调节亮度、远程照明控制、故障主动报警、灯具线缆防盗、远程抄表等功能，大幅节省电力资源，实现一杆多用。</p>
        <ul class="cpxx-ul clearfix">
          <li class="li1">
            <img src="@/img/solvecase/tianyu1.png" class="img1" alt="">
            <!-- <img src="@/img/solvecase/blackbg1.png" class="img2" alt=""> -->
            <div class="showli">
              <h5>天宇1号</h5>
              <h6>LED路灯系统</h6>
              <p>与终端控制器实现远程控制及状态查询等；</p>
              <h6>微基站覆盖系统</h6>
              <p>与移动通信网络传统宏站有效互补；</p>
              <h6>网络多媒体系统</h6>
              <p>有效实现信息发布和广告变现；</p>
              <h6>无线WIFI覆盖系统</h6>
              <p>满足公共网络安全与室外作业；</p>
              <h6>智慧监控系统</h6>
              <p>满足常规道路监控与应急监控；</p>
            </div>
          </li>
          <li class="li1">
            <img src="@/img/solvecase/tianyu2.png" class="img1" alt="">
            <div class="showli">
              <h5>天宇2号</h5>
              <h6>LED路灯系统</h6>
              <p>与终端控制器实现远程控制及状态查询等；</p>
              <h6>微基站覆盖系统</h6>
              <p>与移动通信网络传统宏站有效互补；</p>
              <h6>网络多媒体系统</h6>
              <p>有效实现信息发布和广告变现；</p>
              <h6>无线WIFI覆盖系统</h6>
              <p>满足公共网络安全与室外作业；</p>
              <h6>智慧监控系统</h6>
              <p>满足常规道路监控与应急监控；</p>
              <h6>充电桩系统</h6>
              <p>为具备车载充电机的电动汽车提供电能；</p>
            </div>
            <!-- <img src="@/img/solvecase/blackbg2.png" class="img2" alt=""> -->
            
          </li>
          <li class="li1">
            <img src="@/img/solvecase/tianyu3.png" class="img1" alt="">
            <!-- <img src="@/img/solvecase/blackbg3.png" class="img2" alt=""> -->
            <div class="showli">
              <h5>天宇3号</h5>
              <h6>LED路灯系统</h6>
              <p>与终端控制器实现远程控制及状态查询等；</p>
              <h6>微基站覆盖系统</h6>
              <p>与移动通信网络传统宏站有效互补；</p>
              <h6>网络多媒体系统</h6>
              <p>有效实现信息发布和广告变现；</p>
              <h6>智慧监控系统</h6>
              <p>满足常规道路监控与应急监控；</p>
              <h6>视频语音求助系统</h6>
              <p>便于紧急信息发布与市民的紧急求助；</p>
              <h6>智慧广播音响系统</h6>
              <p>通过高质量音频信号的发布实现智慧广播；</p>
            </div>
          </li>
        </ul>
      </section>
      <Gototop/>
    </section>
    

  </div>
</template>

<script>
import Trait from '@/components/Trait.vue'
import Gototop from '@/components/Gototop.vue'

export default {
  name: 'solvecase',
  components: {
    Trait,
    Gototop
  },
  data(){
    return {
      fadeClass:""
    }
  },
  // beforeRouteEnter(to,from,next){
  //   console.log(to.query.mId);
    
  //   // console.log(from)
  //   // console.log(next)
  //   next();
  // },
  mounted(){
    // window.addEventListener('scroll',this.scroll,false);
    let mId = this.$route.query.mId;
    // console.log(mId);
    // console.log(document.documentElement.scrollTop);

    if(mId=='zhdg'){
      document.documentElement.scrollTop = 4714;
    }else if(mId=='cpxx'){
      document.documentElement.scrollTop = 6630;
    }else if(mId=='zhzm'){
      document.documentElement.scrollTop = 450;
    }else{
      document.documentElement.scrollTop = 0;
    }

    window.addEventListener('scroll', this.handleScroll,false);
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll,false);
  },
  methods:{
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
      document.body.scrollTop
      // console.log(scrollTop);
      if(scrollTop>3200 && scrollTop <  4700){
        this.fadeClass = 'fade-in-up';
      }else{
        this.fadeClass = '';
      }
    },
    
    // scroll(){
    //   // console.log(document.documentElement.scrollHeight);
    //   console.log(window.scrollY);
    // },
    godenggan(){
      document.documentElement.scrollTop = 4714;
    },
    gocpxx(){
      document.documentElement.scrollTop = 6630;
    }
  },
  
}
</script>

<style lang="scss" scoped>
  @import '../css/about.scss';
  @import '../css/solvecase.scss';

</style>
