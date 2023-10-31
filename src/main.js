import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/css/css.scss'
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
