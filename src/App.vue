<template>
  <div id="wrapper">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    
    <Header/>
    <router-view  :key="$route.fullPath"/>
    <Footer/>

  </div>
</template>
<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  // import $ from 'jquery'
  export default {
    // name: 'pc',
    components: {
      Header,
      Footer
    },
    // created(){
    //   console.log($('#wrapper'));
    // }
  }
</script>

<style scoped lang="scss">
  #wrapper{
    position: relative;
  }
</style>




