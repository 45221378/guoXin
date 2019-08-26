<template>
  <div id="home">
    <div class="h-banner swiper-container" id="swiper-containerOne">
        <div class="swiper-wrapper">
            <div v-for='(el,i) in arrItem' v-bind:key="i" class="swiper-slide">
                <a :href="el.url">
                    <img v-bind:src="el.pic" />
                </a>
            </div>
        </div>
        <div class="swiper-pagination" id="one-page"></div>
    </div>
    <Aboutus/>
    <section class="solve">
      <div class="solve-main clearfix">
        <img @click="gozhzm" src="@/img/index/iMac.png" alt=""> 
        <div class="solve-detail">
            <h6 class="solevecase" @click="gozhzm">解决方案</h6>
            <p>路灯照明全域大数据管理平台</p>
            <i></i>
            <p>国信天宇希望通过提升综合管理和科技信息水平，建设以城市道路照明管理为核心，构建融合智能应用技术和现代信息技术，广域泛在、开放共享的综合管理系统，促进路灯运维、建设、经营、服务灵活介入、协调互动、多能互补，提高数字化管理水平，弥补系统和人员不足。</p>
        </div>
      </div>
    </section>
    <Trait/>
    <div class="detail">
      <h5 @click="goprojectcase">项目案例</h5>
      <p class="trait-detail">智慧照明综合管理平台解决方案</p>
      <div class="scale-swiper">
        <SwiperDemo></SwiperDemo>
      </div>
      <section class="think">
        <ul class="think-three clearfix">
            <li>
                <img src="@/img/index/pc-detail.png" alt="">
                <div>
                    <h6>平台化思想</h6>
                    <i></i>
                    <p>高度融合的平台化思想</p>
                </div>
            </li>
            <li>
                <img src="@/img/index/list-detail.png" alt="">
                <div>
                    <h6>建设设计理念</h6>
                    <i></i>
                    <p>全域资产数字化、业务财务一体化</p>
                </div>                    
            </li>
            <li>
                <img src="@/img/index/react-detail.png" alt="">
                <div>
                    <h6>五大核心能力</h6>
                    <i></i>
                    <p>高度灵活的链接能力、扩展及弹性能力、业务支撑能力、设计极简能力、保障能力</p>
                </div>                
            </li>
        </ul>
      </section>
      <h5 class="margin112" @click="gonews">新闻资讯</h5>
      <section class="news clearfix">
        <div class="img-left">
            <div class="img-left-img" v-for='(it,i) in noticeList.slice(0,1)' v-bind:key="i" @click="gonewsDetail(it.id,it.title,it.time)">
                <img v-bind:src="it.pic">
                <p class="img-p1">{{it.title}}</p>
                <p class="img-p2" v-html="it.content"></p>
            </div>
        </div>
          <!-- <div class="img-left">
              <div class="img-left-img">
                <img @click="gonewsDetail(noticeListOne.id)" src="@/img/index/city.png" alt="">
              </div>
              <p class="img-p1" @click="gonewsDetail(noticeListOne.id)">智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章</p>
              <p class="img-p2">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人</p>
          </div> -->
          <div class="contain-right swiper-container" id="swiper-containerTwo">
              <div ref="con1" class="ul swiper-wrapper" >
                  <div class="clearfix swiper-slide slide-text li" v-for='(el,i) in noticeList' v-bind:key='i' @click="gonewsDetail(el.id,el.title,el.time)">
                      <div class="news-left">
                          <span class="day">{{el.time.toString().substring(8)}}</span>
                          <span>{{el.time.toString().substring(0,7)}}</span>  
                      </div>
                      <div class="news-rigth">
                        <p class="news-p1">{{el.title}}</p>
                        <!-- <p class="news-p2">{{el.selectContent.content}}</p> -->
                        <p class="news-p2" v-html="el.content"></p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
    <Gototop/> 
  </div>
</template>

<script>
  import Aboutus from '@/components/Aboutus.vue'
  import Trait from '@/components/Trait.vue'
  import SwiperDemo from '@/components/swiperDemo.vue'
  import Gototop from '@/components/Gototop.vue'
//   import moment from 'moment'

export default {
    name: 'home',
    data(){
        return{
            noticeList: [],
            noticeListOne:[],
            animate:false,
            intNum: undefined,
            arrItem:[
                // {pic:require('@/img/index/WechatIMG28.jpeg')},
                // {pic:require('@/img/index/WechatIMG29.jpeg')},
                // {pic:require('@/img/index/WechatIMG30.jpeg')},
            ],

        }
    },
    components: {
      Aboutus,
      Trait,
      SwiperDemo,
      Gototop
    },
    created(){
        // this.getNoticeData();
    },
    methods:{
        _initSwiper(){
            this.$nextTick(()=>{
                let mySwiperOne = new Swiper('#swiper-containerOne', {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    autoplay : {
                        delay:2000
                    },
                })
            })  
        },
        gethomeBanner(){
            this.$axios.get('weixin/bannerList').then(res=>{
                this.arrItem = res.data.bannerList;
                this._initSwiper()      
            }).catch(res=>{
                alert('图片加载错误');
            })
        },
        _initSwiperTwo(){
            this.$nextTick(()=>{
                let mySwiper = new Swiper('#swiper-containerTwo', { 
                    direction: 'vertical',
                    slidesPerView:3,
                    loop: true, 
                    autoplay:true,
                    speed:1000
                })
            })
            
        },
        getNoticeData() {
            this.$axios.get('weixin/newsList').then(res=>{           
                this.noticeList = res.data.newsList;
                this._initSwiperTwo()
            })

            
            /*this.noticeList = [
                    {
                        'time':'2019-06-19',
                        'title': '(1)智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章',
                        'content':'(1-1)截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人，是1978年的5.4倍，是1978年的5.4倍，是1978年的5.4倍'
                    },{
                        'time':'2019-06-20',
                        'title': '(2)智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章',
                        'content':'(2-1)截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人，是1978年的5.4倍，是1978年的5.4倍，是1978年的5.4倍' 
                    },{
                        'time':'2019-06-21',
                        'title': '(3)智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章',
                        'content':'(3-1)截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人，是1978年的5.4倍，是1978年的5.4倍，是1978年的5.4倍' 
                    },{
                        'time':'2019-06-22',
                        'title': '(4)智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章',
                        'content':'(4-1)截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人，是1978年的5.4倍，是1978年的5.4倍，是1978年的5.4倍' 
                    },{
                        'time':'2019-06-23',
                        'title': '(5)智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章',
                        'content':'(5-1)截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人，是1978年的5.4倍，是1978年的5.4倍，是1978年的5.4倍' 
                    },{
                        'time':'2019-06-24',
                        'title': '(6)智慧路灯已经形成万亿级新兴产业，智慧城市建设开启新篇章',
                        'content':'(6-1)截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路覆盖97%的20万以上人，是1978年的5.4倍，是1978年的5.4倍，是1978年的5.4倍' 
                    }
                ]*/
            // this.$nextTick(()=>{
            //     this._initSwiperTwo()
            // })
        },
        
        
        //解决方案的跳转
        gozhzm(){
            this.$router.push({name:'solvecase',params:{time:new Date().getTime()},query:{mId:'zhzm'}})
        },
        //项目案列的跳转
        goprojectcase(){
            this.$router.push({name:'projectcase',params:{time:new Date().getTime()}})
        },
        //新闻资讯
        gonews(){
			this.$router.push({name:'news',params:{time:new Date().getTime()},query:{mId:'gsxx'}})
        },
        //去新闻详情页
        gonewsDetail(newsId,newsTitle,newsTime){
            this.$router.push({name:'newsdetail',params:{newsId:newsId},query:{newsTitle:newsTitle,newsTime:newsTime}})
        }
    },
    mounted(){
        this.gethomeBanner()
        this.getNoticeData()
        document.documentElement.scrollTop = 0;
    }
}
</script>

<style lang="scss" scoped>


@import '../css/home.scss';


#swiper-containerTwo , .slide-text {
    height:421px;
}





</style>