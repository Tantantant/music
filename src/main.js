import Vue from "vue";
import App from "./App.vue";
// 引入store----vuex状态管理
import store from "./store";

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 注册store仓库
  store,
}).$mount("#app");
