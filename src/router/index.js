import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from "@/utils/index"
import { goLogin } from "@/api/index"

Vue.use(VueRouter);

// 引入路由组件
import IndexPage from '@/pages/Index';
import Home from '@/pages/home';
import Comment from '@/pages/comment';
import List from '@/pages/list';
import Presentation from '@/pages/presentation';

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
  },{
    path: '/index',
    component: IndexPage
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
