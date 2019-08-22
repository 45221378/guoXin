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


new Vue({
  router,
  store,
  render: h => h(App),
  watch:{
    '$route':function(to,from){
      // console.log(to.name);
    }
  }
}).$mount('#app')
