import Vue from 'vue'
import VueRouter from 'vue-router'

import Songinfo from '../views/songInfo'
import home from "../view/Home/home.vue"
import Digital from "../view/Digital"
import Singer from "../views/singer"
import SingerList from "../views/singer-details"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",  // history模式
    routes: [
        {
            path: "/",
            component: home,
        },
        {
            path: '/song',
            component: Songinfo,
        },
        {
            path: "/mv_list",
            component: Digital,
        },
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
