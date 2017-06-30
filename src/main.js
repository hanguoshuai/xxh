// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource"
// 引入iconfont的样式表
import "./iconfont/iconfont.css"
import "./iconfont1/iconfont.css"
import MyHeader from './components/public/Header.vue'
import Headerzm from './components/public/Headerzm.vue'
import MyFooter from './components/public/Footer.vue'
import Content from './components/public/Content.vue'
import cartPage from './components/cartPage/index'
import CartList from './components/cartPage/CartList'
import MyInfo from './components/myinfo/index'
import MyOrder from './components/myorder/index'
import Paid from './components/paid/index'
import Unpaid from './components/unpaid/index'
import Send from './components/send/index'
import All from './components/all/index'
import Cards from './components/cards/index'
import Favorites from './components/favorites/index'
import { Cell } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.use(VueAwesomeSwiper);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(MyHeader.name,MyHeader);
Vue.component(Headerzm.name,Headerzm)
Vue.component(MyFooter.name,MyFooter)
Vue.component(Content.name,Content)
Vue.component(cartPage.name,cartPage)
Vue.component(CartList.name,CartList)
Vue.component(MyInfo.name,MyInfo)
Vue.component(MyOrder.name,MyOrder)
Vue.component(Paid.name,Paid)
Vue.component(Unpaid.name,Unpaid)
Vue.component(Send.name,Send)
Vue.component(All.name,All)
Vue.component(Cards.name,Cards)
Vue.component(Favorites.name,Favorites)
Vue.config.productionTip = false

Vue.use(VueResource);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
