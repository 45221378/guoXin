import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTp = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);    

import "@/css/index.scss";


import Swiper from  "@/assets/swiper/swiper.min.js";

import axios from '@/assets/ajax/ajax'
Vue.prototype.$axios = axios;

Vue.mixin({
  data(){
    return {
      bannerPic:[]
    }
  },
  methods:{
    getBanner(type){
        this.$axios.get(`/weixin/selectPic?type=${type}`).then(res=>{
            console.log(res)
            this.bannerPic = res.data.selectPic;
        }).catch(err=>{
           alert('图片请求错误。')
        });
    }
  },
  created(){
    
  }
})


new Vue({
  router,
  store,
  // mixins: [mixin],
  render: h => h(App),
  watch:{
    '$route':function(to,from){ 
    }
  }
}).$mount('#app')
