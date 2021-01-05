import Vue from 'vue'
import VueRouter from 'vue-router'

import Songinfo from '../views/songInfo'
import ModTopList from '../views/mod_topList'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",  // history模式
    routes: [
        // 首页
        {
            path:'/',  
            component:ModTopList
        },
        {
            path: '/song',
            component: Songinfo,
        },
    ]
})
export default router