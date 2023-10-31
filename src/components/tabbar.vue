<template>
  <div class="tabbar-box">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/demo">列表</van-tabbar-item>
    
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0,
    }
  },
  methods:{
    onChange(e){
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
.tabbar-box{
  
}
</style>