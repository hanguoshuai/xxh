import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomePage from '@/components/homePage'
import ListPage from '@/components/ListPage'
import cartPage from '@/components/cartPage'
import faxianPage from '@/components/faxianPage'
import myPage from '@/components/myPage'
import MyInfo from '@/components/MyInfo'
import MyOrder from '@/components/MyOrder'
import Unpaid from '@/components/Unpaid'
import Paid from '@/components/Paid'
import Send from '@/components/Send'
import All from '@/components/All'
import Cards from '@/components/Cards'
import Favorites from '@/components/Favorites'
import Quality from '@/components/quality'
import Appdownload from '@/components/appdownload'
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
    },
    {
     path: '/myinfo',
     name: 'myinfo',
     component:MyInfo
   },
   {
    path: '/cards',
    name: 'Cards',
    component:Cards
  },
  {
   path: '/favorites',
   name: 'Favorites',
   component:Favorites
 },
 {
  path: '/quality',
  name: 'Quality',
  component:Quality
},
{
 path: '/appdownload',
 name: 'Appdownload',
 component:Appdownload
},
   {
    path: '/myorder',
    name:'myorder',
    component:MyOrder,
    children:[
      {path:'',component:All},
      {path:'unpaid',component:Unpaid},
      {path:'paid',component:Paid},
      {path:'send',component:Send}
    ]
  }
  ]
})
