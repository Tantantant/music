import Vue from 'vue'
import VueRouter from 'vue-router'

import Songinfo from '../views/songInfo'
import home from "../view/Home/home.vue"
import Digital from "../view/Digital"

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
        }
    ]
})
export default router
