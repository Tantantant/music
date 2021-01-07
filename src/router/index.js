import Vue from 'vue'
import VueRouter from 'vue-router'

import Songinfo from '../components/songInfo'
import home from "../views/Home/home.vue"
import Digital from "../views/Digital"
import Singer from "../views/singer"
import SingerList from "../views/singer-details"
import TopList from '../views/mod_topList'
import Newdisc from '../views/Newdisc'
import PlayMusic from '../components/playMusic'
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
        },
        {
            path:'/toplist',
            component:TopList
        },
        {
            path:'/newdisc',
            component:Newdisc
        },   
        {
            path:'/playmusic',
            component:PlayMusic,
            meta: {
                isFooterHide: true
            }
        }   
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
export default router
