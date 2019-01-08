import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入路由组件
// import IndexPage from '@/pages/Index';
// import Home from '@/pages/home';

// 这种写法 要下载一个包 babel-plugin-syntax-dynamic-import
// 然后在.babelrc里面加syntax-dynamic-import
// 这种写法作用是 按需加载，意思就是打开那个页面加载那个页面
const IndexPage = () => import('@/pages/Index')
const Home = () => import('@/pages/home')

import Comment from '@/pages/comment';
import List from '@/pages/list';
import Presentation from '@/pages/presentation';
import Address from '@/pages/address';
import QuestList from '@/pages/questlist';

const router = new VueRouter({
  routes: [{
    path: '/home',
    component: Home,
    children:[
      {
        path:"/comment",
        component:Comment
      }, {
        path:"/list",
        component:List
      }, {
        path:"/presentation",
        component:Presentation
      }
    ]
  }, {
    path: '/index',
    component: IndexPage
  }, {
    path:'/address',
    component:Address
  }, {
    path:'/questList',
    component:QuestList
  }, {
    path: '*',
    redirect: '/index'
  }]
})

// // 跳转之前
// router.beforeEach((to,from,next)=>{
//   if(getToken()){
//     next()
//   }else{
//     goLogin()
//   }
// })

// //跳转之后
// router.afterEach((to,from)=>{

// })

export default router;
