import Vue from "vue";
import App from "./App.vue";
// 引入路由器
import router from "./router";
// 引入store----vuex状态管理
import store from "./store";

// 引入公共组件
import Header from "./components/Header";
import Footer from "./components/Footer";
// 引入公共样式资源
import "./styles/reset.css";
import "./styles/iconfont.css";
import "./plugins/element";
import "./styles/iconfont/iconfont.css";
import "swiper/css/swiper.css";
// 设置header,footer为全局公共组件
Vue.component("Header", Header);
Vue.component("Footer", Footer);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  // 注册使用router
  router,
  // 注册store仓库
  store,
}).$mount("#app");
