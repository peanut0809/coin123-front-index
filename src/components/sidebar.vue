<template>
  <div class="sidebar-box">
    <div class="sidebar-content">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item to="/" title="上币列表" />
        <van-sidebar-item to="/ieo" title="IEO集合" />
        <van-sidebar-item to="/rename" title="改名列表" />
        <van-sidebar-item to="/corepublic" title="核心公共" />
        <van-sidebar-item to="/aboutus" title="关于我们" />
      </van-sidebar>
      <div class="container">
        <router-view></router-view>
        <!-- <tabbar></tabbar> -->
      </div>
    </div>
  </div>
</template>
<script>
// import tabbar from './tabbar'
export default {
  data(){
    return{
      activeKey:0,
    }
  },
  created(){
    this.activeKey = localStorage.getItem('cur') ? localStorage.getItem('cur') : 0
  },
  components:{
    // tabbar
  },
  methods:{
    onChange(e){
      console.log(e)
      localStorage.setItem('cur',e)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.sidebar-box{
  .sidebar-content{
    display:flex;
    .van-sidebar{
      min-height:100vh;
      background:#f7f8fa;
      
    }
  }
  .container{
    flex:1;
    padding:0 0 0 20px;
  }
}
</style>