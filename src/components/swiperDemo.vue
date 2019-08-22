<template>
    <div class="swiper-container" id="certify">
        <div class="swiper-wrapper" @click="goprojectcase">
            <div v-for="(item,index) in arr" :key="index" class="swiper-slide">
                <img v-bind:src="item.pic" alt="" class="c-img" >
            </div>
        </div>
    </div>
</template>


<script>
import axios from '@/assets/ajax/ajax'
export default {
    data(){
        return {
            arr:[
                {pic:require('@/img/index/home-swiper1.jpg')},
                {pic:require('@/img/index/home-swiper2.jpg')},
                {pic:require('@/img/index/home-swiper3.jpg')},
            ]
        }
    },
    mounted(){
        this.getBottomBanner();
        
    },
    methods:{
        getBottomBanner(){
           
            axios.get('weixin/footBannerList').then(res=>{
                this.arr = res.data.footBannerList;
                this.swiperInit();
            }).catch(err=>{
                this.swiperInit();
            })
        },
        //项目案列的跳转
        goprojectcase(){
            this.$router.push({path:'projectcase'})
        },
        swiperInit(){
            this.$nextTick(()=>{
                const certifySwiper = new Swiper('#certify', {
                    watchSlidesProgress: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    loop: true,
                    loopedSlides: 3,
                    autoplay: true,
                    // autoplayDisableOnInteraction : false,
                    mousewheels: true,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper 
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    on: {
                        progress: function(progress) {
                            for (let i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i);
                                var slideProgress = this.slides[i].progress;
                                var modify = 1;
                                if (Math.abs(slideProgress) > 1) {
                                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                                }
                                var translate = slideProgress * modify * 270 + 'px';
                                // console.log(slideProgress);
                                // console.log(modify);
                                // console.log(translate);
                                var scale = 1 - Math.abs(slideProgress) / 5;
                                var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                                slide.css('zIndex', zIndex);
                                slide.css('opacity', 1);
                                if (Math.abs(slideProgress) > 3) {
                                    slide.css('opacity', 0);
                                }
                            }
                        },
                        setTransition: function(transition) {
                            for (var i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i)
                                slide.transition(transition);
                            }
                        }
                    }
                })
                certifySwiper.el.onmouseover = function(){ //鼠标放上暂停轮播
                    certifySwiper.autoplay.stop();
                }
                certifySwiper.el.onmouseleave = function(){
                    certifySwiper.autoplay.start();
                }
            })
        }
    }
}
</script>

<style scoped>
/* #certify {
    width:100%;
    height:100%;
} */

.c-img{
    width:100%;
    height:100%;
} 


#certify {
	position: relative;
	width: 1200px;
	margin: 0 auto
}

#certify .swiper-container {
	padding-bottom: 60px;
}

#certify  .swiper-slide {
    
	/* width: 620px; */
    width: 680px;
	height: 347px;
    background: #fff;
    cursor: pointer;
	/* box-shadow: 0 8px 30px #ddd; */
}
#certify  .swiper-slide img{
	display:block;
}
#certify  .swiper-slide p {
	line-height: 98px;
	padding-top: 0;
	text-align: center;
	color: #636363;
	font-size: 1.1em;
	margin: 0;
}

#certify .swiper-pagination {
	width: 100%;
	bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 5px;
	border: 3px solid #fff;
	background-color: #d5d5d5;
	width: 10px;
	height: 10px;
	opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
	border: 3px solid #00aadc;
	background-color: #fff;
}

#certify .swiper-button-prev {
	left: -30px;
	width: 45px;
	height: 45px;
	/* background: url(../images/wm_button_icon.png) no-repeat;
	background-position: 0 0;
	background-size: 100%; */
}

#certify .swiper-button-prev:hover {
	background-position: 0 -46px;
	background-size: 100%
}

#certify .swiper-button-next {
	right: -30px;
	width: 45px;
	height: 45px;
	/* background: url(../images/wm_button_icon.png) no-repeat;
	background-position: 0 -93px;
	background-size: 100%; */
}

#certify .swiper-button-next:hover {
	background-position: 0 -139px;
	background-size: 100%
}
</style>
