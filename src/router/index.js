import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from "@/utils/index"
import { goLogin } from "@/api/index"

Vue.use(VueRouter);

// 引入路由组件
import IndexPage from '@/pages/Index';

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: IndexPage
  }, {
    path: '*',
    redirect: '/index'
  }]
})

// 跳转之前
router.beforeEach((to,from,next)=>{
  if(getToken()){
    next()
  }else{
    goLogin()
  }
})

//跳转之后
router.afterEach((to,from)=>{

})

export default router;
