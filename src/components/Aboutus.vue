<template>
  <section class="aboutus clearfix" ref='element'>
        <div class="list-introduce none" :class="fadeClass" >
            <div class="appear">
                <h6 @click="goqyjs">关于我们</h6>
                <p class="list-detail">
                    国信天宇网络技术有限公司是一家互联网软件研发公司，注册资本5000万元，致力于在全国市场开展智慧路灯照明与智慧城市建设项目工作。在上市公司的支持下，我们秉承自主创新、科学发展的理念，奉行与上市公司共同进步的双赢发展战略，实现公司的长远发展和社会价值。
                </p>
                <p class="list-detail">
                    我们的产品结合物联网与云计算技术，建设高度融合平台化的城市公共照明管理方案，解决路灯行业的生产系统跟踪、运营效率不高，管理功能不够深入的问题，打破信息孤岛，进行统一管理。为企业提供运营和管理的支撑，为未来的智慧城市发展提供更多的切入口,也是智慧城市数据采集的终端。将依托于城市道路照明管理与智慧城市建设项目来打造大数据、云计算及移动互联三大技术体系，为更多的行业和业务领域提供服务与解决方案。
                </p>
            </div>
            
            <i class="start-left"></i>
            <i class="start-top"></i>
            <i class="start-right"></i>
            <i class="start-bottom"></i>
           
        </div>
        <div class="list-img">
            <img  @click="goqyjs" src="../img/index/index-title.png" alt="">
        </div>
    </section>
</template>

<style scoped lang="scss">
  @import "../css/aboutus.scss";
</style>

<script>
export default {
    data(){
        return{
            fadeClass:''
        }
    },
    mounted(){
        // console.log(this.$refs.element.offsetHeight);
        window.addEventListener('scroll',this.aboutusScroll,false);
        let topHeight = this.$refs.element.offsetTop ; 
        console.log(topHeight);
        if(topHeight<600){
            this.fadeClass = 'about-animate';
        }
    },
    destroyed(){
        window.removeEventListener('scroll',this.aboutusScroll,false);
    },
    methods:{
        aboutusScroll () {
            //滑动的距离
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
            document.body.scrollTop;   
            // console.log(scrollTop);

            //底部到顶部的距离，整个页面的高度
            // let $scrollH = document.documentElement.scrollHeight;
            //div距离顶部的高度
            let topHeight = this.$refs.element.offsetTop ; 
            // console.log(topHeight);
            // console.log(topHeight-scrollTop);

            //显示屏的高度
            // let $h = document.documentElement.clientHeight;

            if(topHeight-scrollTop<300){
                this.fadeClass = 'about-animate';
            }
        },

        goqyjs(){
            this.$router.push({path:'about',query:{mId:'qyjs'}})
        },
    }
}
</script>

