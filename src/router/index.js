import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomePage from '@/components/homePage'
import ListPage from '@/components/ListPage'
import cartPage from '@/components/cartPage'
import faxianPage from '@/components/faxianPage'
import myPage from '@/components/myPage'
Vue.use(Router)

export default new Router({
  routes: [
    
     {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
     {
      path: '/list',
      name: 'ListPage',
      component: ListPage
    },
     {
      path: '/faxian',
      name: 'faxianPage',
      component: faxianPage
    },
     {
      path: '/cart',
      name: 'cartPage',
      component: cartPage
    },
     {
      path: '/mine',
      name: 'myPage',
      component: myPage
    }
  ]
})
