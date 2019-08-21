import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import  Joinus from '@/views/Joinus';

export default new Router({
  // mode: 'history',
  mode:'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:{  
        name:"home"
      }
    },
    {
      path: '/home/:time?',
      name: 'home',
      component: ()=> import('@/views/Home.vue')
    },
    {
      path:"/about/:time?",
      name:'about',
      component:()=> import('@/views/About.vue'),
    },
    {
      path: '/solvecase/:time?',
      name: 'solvecase',
      component:  ()=> import('@/views/Solvecase')
    },
    {
      path: '/projectcase/:time?',
      name: 'projectcase',
      component:  ()=> import('@/views/ProjectCase')
    },
    {
      path: '/news/:time?',
      name: 'news',
      component:  ()=> import('@/views/News')
    },
    {
      path: '/newsdetail',
      name: 'newsdetail',
      component:  ()=> import('@/views/NewsDetail')
    },
    {
      path: '/joinus/:time?',
      name: 'joinus',
      component: Joinus
    },
    {
      path:"**",
      redirect:{
        name:"home"
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

