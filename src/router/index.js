import Vue from 'vue'
import vueRouter from 'vue-router'
// import home from "../view/Home/home.vue"
import Digital from "../view/Digital"
import ProductsDetail from "../view/Digital/coment/ProductsDetail/index.vue"

Vue.use(vueRouter)

const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Digital,
        },
        {
            path: "/digital",
            component: Digital,
        },
        {
            path: "/productsDetail",
            component: ProductsDetail,
        }
    ]

})
export default router
