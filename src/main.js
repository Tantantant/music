

// 引入iconfont样式
import "./styles/iconfont.css";


import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router';
import store from './store';
import './styles/reset.css';
import './plugins/element';
import './styles/iconfont/iconfont.css';

Vue.use(ElementUI)
Vue.config.productionTip = false
// 引入公共资源


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

