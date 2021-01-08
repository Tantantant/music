import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../views/Home/home.vue"
import SongInfo from '../views/songInfo';
import Digital from "../views/Digital"
import Singer from "../views/singer"
import SingerList from "../views/singer-details"
import TopList from '../views/mod_topList'
import Newdisc from '../views/Newdisc'
import PlayMusic from '../components/playMusic'
import classSong from "../views/classSong";
import PlayList from "../views/PlayList";




Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",  // history模式
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: '/songinfo',
      component: SongInfo,
    },
    {
      path: "/digital",
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
      path: '/toplist',
      component: TopList
    },
    {
      path: '/newdisc',
      component: Newdisc
    },
    {
      path: '/playmusic',
      component: PlayMusic,
      meta: {
        isFooterHide: true
      }
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
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router;

