import Vue from "vue";
import App from "./App.vue";
// 引入store----vuex状态管理
import store from "./store";

// 引入公共样式资源
import "./styles/reset.css";
import "./styles/iconfont.css";

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  // 注册store仓库
  store,
}).$mount("#app");
