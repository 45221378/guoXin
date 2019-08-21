
<template>
  <div class="gototop" @click='gototop'>
      <img src="@/img/gototop.png" alt="">
  </div>  
</template>

<style scoped lang="scss">
  .gototop{
        position: fixed;
        bottom: 20px;
        right: 20px;
        height: 40px;
        width: 40px;
        img{
          height: 100%;
          width: 100%;
        }
      }
</style>

<script>
export default {
    methods:{
      gototop(){
        document.documentElement.scrollTop = 0;
      }
    }
}
</script>