<template>
  <div class="joinus about">
    <img class="banner-us" src="@/img/banner-concatus.png" alt="">  
      <div class="joinus-main">
        <div class="h5-title">
          <div class="content-title">
            <i></i>
            <h5>联系我们</h5>
            <i></i>
        </div>
        <div class="jionus-form clearfix">
          <div class="form-title">
            <h5>国信天宇网络技术有限公司</h5>
            <ul class="joinus-ul">
              <li class="clearfix">
                <img src="@/img/phone.png">
                <p>027-85741335</p>
              </li>
              <li class="clearfix">
                <img class="mgt10" src="@/img/area.png">
                <p>湖北省武汉市江汉区建设大道737号广发银行大厦2204室</p>
              </li>
              <li class="clearfix">
                <img src="@/img/mail.png">
                <p>zhangwei@guoxintianyu.com</p>
              </li>
            </ul>
          </div>
          <div class="form-input clearfix">
            <p v-html="errorTip" class="errorTip"></p>
            <label class="name">
              <span>姓名</span><input v-model="username" />
            </label>
            <label class="phone">
              <span>电话</span><input v-model="userphone" />
            </label>
            <label class="message">
              <span>留言</span><textarea  v-model="usersay" />
            </label>
            <button @click="gosubmit">提交</button>
          </div>
        </div>
          <div class="address">
            <div id="container">
                 <el-amap ref="map" vid="amapDemo" :plugin="plugin" :center="center" :zoom="zoom"  class="amap-demo">
                    <el-amap-marker :icon="marker.icon" :position="marker.position"  :visible="marker.visible" vid="id1"></el-amap-marker>
                </el-amap>
                
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../css/about.scss';
  @import '../css/joinus.scss';
</style>

<script>
// 114.274503,30.598135 经纬度

// import MapLoader from '@/assets/js/AMap.js'
// import { AMapManager } from 'vue-amap';
// let amapManager = new AMap.AMapManager();
// // 初始化  vue-amap
import AMap from 'vue-amap';
import Vue from "vue"
import axios from "@/assets/ajax/ajax.js";
import { Message } from 'element-ui';

Vue.use(AMap);
AMap.initAMapApiLoader({
  // 高德的key
  key: 'b509ac189c80b53d5d981a89f458f2fc',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
export default {
  name: 'test',
  mounted(){
    // jounus()
    document.documentElement.scrollTop = 0;
    // jounus().then(res=>{
    //   console.log(res);
    // })

  },
  data () {
    return {
      username:'',
      userphone:'',
      usersay:'',
      errorTip:'',
      map: null,
      // amapManager,
      center: [114.274503,30.598135],
      zoom:18,
      marker:{
        position:[114.274503,30.598135],
        visible:true,
        icon:require("@/img/red-area.png")        
      },
      plugin: [{
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 100,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions:'all',
          pName: 'Geolocation',
      }]
    }
  },
  methods:{
    gosubmit(){
      const phoneReg = /^(^(\d{3,4}-)?\d{7,8})$|(1[0-9]{10})$/;
      var that = this;
      if(that.username==''){
        that.errorTip = '请输入姓名';
        return;
      }else if(that.userphone==''){
        that.errorTip = '请输入手机号';
        return;
      }
      else if(!(phoneReg.test(that.userphone))){
        that.errorTip = '电话输入有误';
        return;
      }
      else 
      {
        const data = {
          name:that.username,
          cellphone:that.userphone,
          message:that.usersay
        }
        // console.log(that.username+that.userphone+that.usersay);
        axios.get('weixin/insertCustomer',{params:data}).then(res=>{
          // that.errorTip = '提交成功';
          Message.success('提交成功')
          that.username='';
          that.userphone='';
          that.usersay='';
        })
      }
    }
  }
}
</script>

<style scoped>
#container,.amap-demo{
    width:100%;
    height:100%;
}
</style>


