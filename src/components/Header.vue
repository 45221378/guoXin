<template>
  <div class="common-header clearfix">
		<div class="show-logo">
			<img src="@/img/guoxinlogo.png" alt="">
		</div>
		<ul class="navbar-nav clearfix">
			<li class="nav-item">
				<a @click="gohome"  class="nav-item-a" :class="$route.name=='home'?activeClass:''" >
					<span class="header-title">首页</span>
				</a>
			</li>
			<li class="nav-item ">
				<a  @click='goaboutus' class="nav-item-a" :class="$route.name=='about'?activeClass:''">
					<span class="header-title">关于我们</span>
				</a>
				<ol class="show-links">
					<b class="show-arrow"></b>
					<li class="link-item">
							<span @click='goqyjs'>企业介绍</span>
					</li>
					<li class="link-item">
							<span @click='goqywh'>企业文化</span>
					</li>
				</ol>
			</li>
			<li class="nav-item ">
				<a  @click="gosolvecase" class="nav-item-a" :class="$route.name=='solvecase'?activeClass:''">
					<span class="header-title"> 解决方案</span>
				</a>
				<ol class="show-links">
					<b class="show-arrow"></b>
					<li class="link-item">
							<span @click="gozhzm">大数据管理平台</span>
					</li>
					<li class="link-item">
							<span @click="gozhdg">智慧灯杆</span>
					</li>
					<li class="link-item">
							<span @click="gocpxx">产品选型</span>
					</li>
				</ol>
			</li>
			<li class="nav-item ">
				<a  @click="goprojectcase" class="nav-item-a" :class="$route.name=='projectcase'?activeClass:''">
					<span class="header-title">项目案列</span>
				</a>
			</li>
			<li class="nav-item ">
				<a @click="gogsxx" class="nav-item-a"  :class="$route.name=='news'?activeClass:''" >
					<span class="header-title">新闻动态</span>
				</a>
				<ol class="show-links">
					<b class="show-arrow"></b>
					<li class="link-item">
							<span @click="gogsxx">公司新闻</span>
					</li>
					<li class="link-item">
							<span @click="gohyxx">行业新闻</span>
					</li>
				</ol>
			</li>
			<li class="nav-item ">
				<a  @click="gojoinus" class="nav-item-a" :class="$route.name=='joinus'?activeClass:''">
					<span class="header-title">联系我们</span>
				</a>
			</li>
		</ul>    
  </div>
</template>

<style scoped lang="scss">
  @import "../css/header.scss";
</style>

<script>
	export default{
		data(){
			return{
				headerBlue: 1,
				newData:  Date.parse(new Date()),
				activeClass:"head-active"
			}
		},
		mounted(){
			
		},
		methods:{
			goqyjs(){
				this.$router.push({name:'about',params:{time:new Date().getTime()},query:{mId:'qyjs'}})
			},
			goqywh(){
				this.$router.push({name:'about',params:{time:new Date().getTime()},query:{mId:'qywh'}})
			},
			gozhzm(){
				this.$router.push({name:'solvecase',params:{time:new Date().getTime()},query:{mId:'zhzm'}})
			},
			gozhdg(){
				this.$router.push({name:'solvecase',params:{time:new Date().getTime()},query:{mId:'zhdg'}})
			},
			gocpxx(){
				this.$router.push({name:'solvecase',params:{time:new Date().getTime()},query:{mId:'cpxx'}})
			},
			gogsxx(){
				this.$router.push({name:'news',params:{time:new Date().getTime()},query:{mId:'gsxx'}})
			},
			gohyxx(){
				this.$router.push({name:'news',params:{time:new Date().getTime()},query:{mId:'hyxx'}})
			},
			gohome(){
				this.$router.push({name:'home',params:{time:new Date().getTime()}})
			},
			goaboutus(){
				this.$router.push({name:'about',params:{time:new Date().getTime()}})
			},
			gosolvecase(){
				this.$router.push({name:'solvecase',params:{time:new Date().getTime()}})
			},
			goprojectcase(){
				this.$router.push({name:'projectcase',params:{time:new Date().getTime()}})
			},
			gojoinus(){
				this.$router.push({name:'joinus',params:{time:new Date().getTime()}})
			},
		}
	}
</script>


<style scoped lang="scss">
.router-link-exact-active{
	border-bottom: 2px solid #26baee;
	display: block;
	span{
		color:#26baee !important;
	}
}

.head-active{
	border-bottom: 2px solid #26baee;
	display: block;
	span{
		color:#26baee !important;
	}
}
    
    
</style>

