// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iconfont的样式表
import "./iconfont/iconfont.css"
//引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
//引入  router
import VueRouter from 'vue-router'
//引入vue-resource
import VueResource from 'vue-resource'
//引入iscroll
import Iscroll from 'iscroll'

Vue.use(VueRouter)
Vue.use(VueResource)// vue全局使用VueResource
import MyHeader from './components/public/Header.vue'
import MyFooter from './components/public/Footer.vue'
import Content from './components/public/Content.vue'

Vue.component(MyHeader.name,MyHeader)
Vue.component(MyFooter.name,MyFooter)
Vue.component(Content.name,Content)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
