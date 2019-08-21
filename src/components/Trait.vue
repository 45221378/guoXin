<template>
  <section class="trait about">
        <div class="h5-title">
            <div class="content-title">
                <i v-if="this.path"></i>
                <h5>我们的特点</h5>
                <i v-if="this.path"></i>
            </div>
        </div>
        <p class="trait-detail">系统融合\业务闭环\数据跟踪\分析支撑</p>
        <ul class="trait-list clearfix">
            <li>
                <img class="img1" src="../img/dns.png" alt="">
                <img class="img1-1" src="../img/dns-1.png" alt="">
                <p>虚拟网关-云端协议解析</p>
            </li>
            <li>
                <img class="img2" src="../img/modules.png" alt="">
                <img class="img2-2" src="../img/modules-1.png" alt="">
                <p>模块化-系统设计</p>
            </li>
            <li>
                <img class="img3" src="../img/geolacation.png" alt="">
                <img class="img3-3" src="../img/geolacation-1.png" alt="">
                <p>GIS-快捷操作</p>
            </li>
            <li>
                <img class="img4" src="../img/jiankong-pc.png" alt="">
                <img class="img4-4" src="../img/jiankong-pc1.png" alt="">
                <p>数字化-实时监控数据</p>
            </li>
            <li>
                <img class="img5" src="../img/lamp.png" alt="">
                <img class="img5-5" src="../img/lamp-1.png" alt="">
                <p>虚拟灯杆-程序模拟场景</p>
            </li>
            <li>
                <img class="img6" src="../img/list.png" alt="">
                <img class="img6-6" src="../img/list-1.png" alt="">
                <p>可插拔式-运维方案</p>
            </li>
            <li>
                <img class="img7" src="../img/react.png" alt="">
                <img class="img7-7" src="../img/react-1.png" alt="">
                <p>多元化-云部署平台</p>
            </li>
            <li>
                <img class="img8" src="../img/admin.png" alt="">
                <img class="img8-8" src="../img/admin-1.png" alt="">
                <p>权限-成熟的行业授权</p>
            </li>
            <li>
                <img class="img9" src="../img/dingzhi.png" alt="">
                <img class="img9-9" src="../img/dingzhi-1.png" alt="">
                <p>定制化-解决方案</p>
            </li>
            <li>
                <img class="img10" src="../img/wudapingtai.png" alt="">
                <img class="img10-10" src="../img/wudapingtai-1.png" alt="">
                <p>信息化-统一管理大平台</p>
            </li>
            <li>
                <img class="img11" src="../img/api.png" alt="">
                <img class="img11-11" src="../img/api-1.png" alt="">
                <p>API-深度对接</p>
            </li>
            <li>
                <img class="img12" src="../img/aliyun.png" alt="">
                <img class="img12-12" src="../img/aliyun-1.png" alt="">
                <p>安全-阿里云</p>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
  @import "../css/trait.scss";
  @import "../css/about.scss";
</style>

<script>
export default {
    data(){
        return{
            path:true
        }
    },
    mounted(){
        let routerPath = this.$route.name;
        if(routerPath=='home'){
            this.path =false
        }else{
            this.path =true
        }
    }
}
</script>