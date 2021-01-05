import Vue from 'vue'
import VueRouter from 'vue-router'

import Songinfo from '../views/songInfo'

const push = VueRouter.prototype.push
VueRouter.prototype.push = function (localtion, onComplate, onAbort) {
    if (onComplate, onAbort) {
        return push.call(this, localtion, onComplate, onAbort)
    }
    return push.call(this, localtion, onComplate, () => { })
}

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/song",
            component: Songinfo
        }
    ]
})
export default router