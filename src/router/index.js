import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '上币列表'
    },
    component: () => import('../views/home')
  },
  {
    path: '/ieo',
    name: 'Ieo',
    meta: {
      title: 'IEO集合'
    },
    component: () => import('../views/ieo')
  },
  {
    path: '/rename',
    name: 'Rename',
    meta: {
      title: 'IEO/改名列表'
    },
    component: () => import('../views/rename')
  },{
    path:'/aboutus',
    name:'Aboutus',
    meta:{
      title:'关于我们'
    },
    component:() => import('../views/aboutus')
  },{
    path:'/corepublic',
    name:'Corepublic',
    meta:{
      title:'核心公共'
    },
    component:() => import('../views/corepublic')
  }
]

const router = new VueRouter({
  routes,
  // 跳转路由后滚动页面顶部和左侧
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router