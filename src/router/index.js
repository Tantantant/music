import Vue from 'vue'
import vueRouter from 'vue-router'
import home from "../view/Home/home.vue"
import Digital from "../view/Digital"

Vue.use(vueRouter)
const router = new vueRouter({
    routes: [
        {
            path: "/",
            component: home,
        },
        {
            path: "/mv_list",
            component: Digital,
        },
    ]
})
export default router
