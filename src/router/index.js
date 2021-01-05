import Vue from 'vue'
import vueRouter from 'vue-router'

import Singer from "../views/singer"
import SingerList from "../views/singer-details"

Vue.use(vueRouter)
const router = new vueRouter({
  routes: [
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/singerlist',
      component: SingerList
    }
  ]
})


export default router

/*  {
   path: '/singer',
   component: Singer
 },
 {
   path: '/singerlist',
   component: SingerList
 } */