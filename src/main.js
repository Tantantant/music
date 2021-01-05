import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

// 引入公共资源
import './styles/reset.css';

import './plugins/element';
import './styles/iconfont/iconfont.css';

Vue.config.productionTip = false;

new Vue({
	beforeCreate(){
		Vue.prototype.$bus = this
	},
	render: (h) => h(App),
	router,
	store
}).$mount('#app');
