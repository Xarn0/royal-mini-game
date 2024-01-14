import { createRouter, createWebHashHistory } from 'vue-router'

import Polity from '@/views/Polity.vue'
import lobby from '@/views/Lobby.vue'
import royal from '@/views/index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component:royal
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/policy",
    name:"policy",
    meta:{
      prev:true
    },
    component:Polity
},
  {
    path:"/lobby",
    name:"lobby",
    meta:{
      prev:false
    },
    component:lobby
  }
  ,
  {
    path:"/royal",
    name:"royal",
    meta:{
      prev:true
    },
    component:royal
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
