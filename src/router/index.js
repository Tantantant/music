import Vue from 'vue';
import VueRouter from 'vue-router';

import SongInfo from '../views/songInfo';
// import Home from '../views/Home/home.vue';
import Digital from '../views/Digital';
import Singer from '../views/singer';
import SingerList from '../views/singer-details';
import  Newdisc from '../views/Newdisc/'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history', // history模式
	routes: [
		// {
		// 	path: '/',
		// 	component: Home
		// },
		{
			path: '/songinfo',
			component: SongInfo
		},
		{
			path: '/mv_list',
			component: Digital
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
			path: '/newdisc',
			component: Newdisc
		}
	]
});
export default router;
