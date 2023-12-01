import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'
//使用路由
Vue.use(VueRouter)
//解决移动端300ms延迟
fastClick.attach(document.body)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
