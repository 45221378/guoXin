<template>
  <div class="news about">
    <img class="banner-us" src="@/img/banner-news.png" alt="">    
    <section class="nav">
        <p>
          <span @click="gogsxx" :class="blue?'active':''">公司新闻</span>
          <span @click="gohyxx" :class="blue?'':'active'">行业新闻</span>
        </p>
    </section>
    <section class="news-list" v-show='blue'>
      <ul class="clearfix">
        <!-- <li v-for="(curr ,i ) in currentList" :key="i">
          <div class="list-img">
            <img src="@/img/banner-news.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>{{curr.title}}</h6>
            <p class="p1">{{curr.content}}</p>
            <p class="p2">{{curr.time}}</p>
            <p class="p3">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> -->

        <!-- <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>公司新闻</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3" @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li>  -->
        <!-- <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3" @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> -->
      </ul>
      <div class="nav-pagation">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          :current-page.sync ="current"
          :total="total">
        </el-pagination>
      </div>
    </section>
    <section class="news-list" v-show='!blue'>
      <ul class="clearfix">
        <!-- <li v-for="(curr ,i ) in currentList" :key="i">
          <div class="list-img">
            <img src="@/img/banner-news.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>{{curr.title}}</h6>
            <p class="p1">{{curr.content}}</p>
            <p class="p2">{{curr.time}}</p>
            <p class="p3">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> -->
        <!-- <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>行业新闻</h6>
            <p class="p1">行业新闻行业新闻行业新闻行业新闻行业新闻行业新闻行业新闻</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> 
        <li>
          <div class="list-img">
            <img src="@/img/index/city.png" alt="">
          </div> 
          <div class="list-detail">
            <h6>智慧路灯已经形成万亿级新兴产业，智…</h6>
            <p class="p1">截至2017年底，全国公路通车总里程达477.35万公里，是1978年的5.4倍，高速公路……</p>
            <p class="p2">2019-06-19</p>
            <p class="p3"  @click="goNewsDetail">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li> -->
      </ul>
      <div class="nav-pagation">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          :current-page.sync ="current"
          :total="total">
        </el-pagination>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  data(){
    return {
      blue:true,
      list:[],
      current:1,
      pageSize:3
    }
  },
  computed:{
    total(){
      return this.list.length;
    },
    currentList(){
       return this.list.slice(this.current,this.current+3);
    },
  },
  watch:{
      current(newVal){
        console.log(newVal);
      }
  },
  mounted(){
    let mId = this.$route.query.mId;
    document.documentElement.scrollTop = 0;
    // getNewsList().then(res=>{
    //   console.log(res);
    //   this.list = res.data.result;
    // })
    // console.log(mId);
    if(mId=='hyxx'){
      this.blue = false;
    }else{
      this.blue = true;
    }
    this.getgsxx(0);
    this.getgsxx(1);

  },

  create(){
    // this.$axios.get('weixin/clicknewsList',{type:1}).then(res=>{
    //   console.log(res);
    // })
  },

  //点击查看详情，进行跳转
  methods:{
    //获取公司新闻内容
    getgsxx(mId){
      this.$axios.get(`weixin/clicknewsList?type=${mId}`).then(res=>{
        console.log(res);
      })
    },
    gogsxx(){
      this.$router.push({name:'news',params:{time:new Date().getTime()},query:{mId:'gsxx'}})
    },
    gohyxx(){    
			this.$router.push({name:'news',params:{time:new Date().getTime()},query:{mId:'hyxx'}})

    },
    //去新闻详情页
    gonewsDetail(newsId){
        this.$router.push({name:'newsdetail',params:{newsId:newsId}})
    }
  }
}

</script>
<style lang="scss" scoped>
   @import '../css/about.scss';
   @import '../css/news.scss';

   .nav-pagation{
     width:100%;
     display: flex;
     justify-content: center;
   }
</style>