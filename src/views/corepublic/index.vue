<template>
  <div class="home">
    <div class="content">
      <h2>核心公告</h2>
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <ul>
                <li v-for="(item,idx) in list" :key="idx">
                  <div>{{ item.context }}</div>
                </li>
              </ul>
            </van-list>
          </van-pull-refresh>
       
    </div>
  </div>
</template>

<script>
import getApi from '@/api/data'
export default {
  data(){
    return{
      
      list:[],
      loading: true,
      finished: false,
      refreshing: false,
      par:{
        pageNum:1,
        pageSize:10,
        CoinName:'',
        type:"",
        dateContext:''
      },
    }
  },
  created(){
    this.getList()
  },
  methods:{
    
    getList(){
      // this.loading = false
      getApi.coinCoreItems(this.par).then(res=>{
        res = res.data
        if(res.code == 0){
          console.log(res.data)
          // this.list = this.par.pageNum == 1 ? res.data.list : this.list.push(res.data.list)
          // this.loading = true
          // if(this.list.length >= res.data.total ){
          //   this.finished = true
          // }
          // 空数据 停止加载
          if(res.data.list.length == 0){
              this.list = [];
              this.finished = true;
              return;
          }

          // 有数据 赋值列表 加载状态结束
          res.data.list.forEach(item => {
              this.finished = false
              this.list.push(item)
          })

          this.loading = false;
          this.refreshing = false;

          // 如果list长度大于等于总数据条数，数据全部加载完成
          if(this.list.length >= res.data.total){
              this.finished = true;//结束加载
          }
        }
      })
      
    },
    // 若加载条到了底部
    onLoad() {                          
        this.getList();					// 调用上面方法,请求数据
        this.par.pageNum++;					// 分页数加一
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.list = []
      this.par.pageNum = 1
      this.getList();
    },
  }
}
</script>
<style lang="scss" scoped>
.home {
  .content{
    height:100vh;
    overflow-x:auto;
  }
  h2{
    font-size:16px;
    margin-bottom: 14px;
    font-weight: bold;
    margin-top: 20px;
  }
  ul{
    margin-top: 20px;
    padding-right: 10px;
    li{
      div{
        font-size:14px;
        line-height: 18px;
      }
      p{
        font-size:12px;
        color:#888;
        margin-top: 2px;
      }
      margin-bottom: 20px;
    }
  }
}
</style>