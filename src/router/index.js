import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomePage from '@/components/homePage'
import ListPage from '@/components/ListPage'
import cartPage from '@/components/cartPage'
import faxianPage from '@/components/faxianPage'
import UserProfile from '@/components/faxianPage/profile'
import UserPosts from '@/components/faxianPage/posts'
import myPage from '@/components/myPage'
import xianshigouPage from '@/components/xianshigou'
import sousuo from '@/components/homePage/sousuo'
import xiangqing from '@/components/xiangqingPage'
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
      path: '/faxian/:id',
      name: 'faxianPage',
      component: faxianPage,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
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
    },
    {
      path: '/sousuo',
      name: 'mysousuo',
      component: sousuo
    },
    {
      path: '/xianshigou',
      name: 'xianshigouPage',
      component: xianshigouPage
    },
    {
      path: '/xiangqing/:id',
      name: 'xiangqing',
      component: xiangqing
    }
  ]
})
