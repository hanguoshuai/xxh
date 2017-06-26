// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iconfont的样式表
import "./iconfont/iconfont.css"

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
