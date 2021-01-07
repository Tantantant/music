import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Singer from "../views/Singer";
import classSong from "../views/classSong";
import PlayList from "../views/PlayList";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history", // history模式
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/singer",
      component: Singer,
    },
    {
      path: "/classSong",
      component: classSong,
    },
    {
      path: "/playList",
      component: PlayList,
    },
  ],
});
export default router;
