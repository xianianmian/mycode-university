import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Denglu from '../components/第三次作业组件/Denglu.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('../views/Home/Home.vue')
      }
    ],
  },
  {
    path:'/',
    redirect:'/Denglu'
  },
  {
    path: '/denglu',
    name: 'Denglu',
    component: Denglu
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
 