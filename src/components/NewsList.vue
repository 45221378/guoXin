<template>
    <section class="news-list">
       <ul class="clearfix list-ul">
        <li v-for="(curr ,i ) in currentList" :key="i" @click="gonewsDetail(curr.id,curr.title,curr.time)">
          <div class="list-img">
            <img :src="curr.pic" >
          </div> 
          <div class="list-detail">
            <h6>{{curr.title}}</h6>
            <p class="p1" v-html="curr.selectContent"></p>
            <p class="p2">{{curr.time}}</p>
            <p class="p3">
              查看详情
              <a class="right">></a>
            </p>
          </div>
        </li>
      </ul>
      <div class="nav-pagation">
        <el-pagination
          background
          prev-text='< 上一页'
          next-text='下一页 >'
          layout="prev, pager, next"
          :page-size="pageSize"
          :current-page.sync ="current"
          :total="total">
        </el-pagination>
      </div>
    </section>
</template>

<script>
import {mapMutations} from "vuex"
export default {
    props:["types"],
    data(){
        return{
            newsList:[],
            list:[],
            // currentList:[],
            current:1,
            pageSize:6
        }
    },
    computed:{
        total(){
            return this.list.length;
        },
        currentList(){
            let firsttCurrent = (this.current-1)*6
            let lastCurrent = this.current*6
            return this.list.slice(firsttCurrent,lastCurrent);
        },
    },
    watch:{
      current(newVal){
        // console.log(newVal);
      }
    },

    mounted(){
       this.getgsxx() 
    //    this.gethyxx() 
       
    },
    methods:{
        ...mapMutations(['getNewLists']),
        //获取公司新闻内容
        getgsxx(){
            console.log(this.types);
            this.$axios.get(`/weixin/clicknewsList`,{
                params:{
                    type:this.types
                }
            }).then(res=>{
                // console.log(res);
                // this.list = res.data.newsList.concat(res.data.newsList);
                this.list = res.data.newsList;
            })
        },
        //获取行业新闻内容
        // gethyxx(){
        //     this.$axios.get(`/weixin/clicknewsList?type=1`).then(res=>{
        //         console.log(res);
        //         // this.list = res.data.newsList;
        //     })
        // },
        //去新闻详情页
        gonewsDetail(newsId,newsTitle,newsTime){
            this.$router.push({name:'newsdetail',params:{newsId:newsId},query:{newsTitle:newsTitle,newsTime:newsTime}})
        }
    }
}
</script>


