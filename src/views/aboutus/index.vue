<template>
  <div class="home">
    <div class="content">
      <h2>数字货币及交易对上新</h2>
      <van-tabs v-model="activeName" @click="onClick">
        <van-tab v-for="(it,i) in navList" :title="it.title" :key="i" :name="i">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="getList"
            >
              <ul>
                <li v-for="(item,idx) in list" :key="idx">
                  <div>{{ item.title }}</div>
                  <p>{{ item.time }}</p>
                </li>
              </ul>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
      
      
      
    </div>
  </div>
</template>

<script>
// import demoApi from '@/api/demo'
export default {
  data(){
    return{
      activeName:"0",
      navList:[{
        title:"ieo列表"
      },{
        title:"改名列表"
      }],
      list:[],
      loading: false,
      finished: false,
      refreshing: false,
      par:{

      },
    }
  },
  created(){

  },
  methods:{
    onClick(e){
      console.log(e)
    },
    getList(){
      // demoApi.queryList(this.par).then(res=>{
      //   console.log(res)
      // })
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push({
            title:"币安上线第39期新币挖矿，使用BNB、TUSD、FDUSD挖矿Memecoin (MEME)",
            time:"2023-10-27"
          },{
            title:"币安将上线POWR1-50倍U本位永续合约",
            time:"2023-10-26"
          });
        }
        this.loading = false;
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.getList();
    },
  }
}
</script>
<style lang="scss" scoped>
.home {
  .content{
    height:100vh;
    overflow-x:auto ;
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