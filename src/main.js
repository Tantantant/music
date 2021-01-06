import Vue from "vue";
import App from "./App.vue";
// 引入store----vuex状态管理
import store from "./store";

// 引入iconfont样式
// import "./styles/iconfont.css";


import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router';
import store from './store';
import './styles/reset.css';
import './plugins/element';
import './styles/iconfont/iconfont.css';
// 引入mockServer,为了加载里面代码，里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import './mock/mockServe';

Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 注册store仓库
  store,
}).$mount("#app");
