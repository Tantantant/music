import Vue from "vue";
import App from "./App.vue";

// 引入iconfont样式
import "./styles/iconfont.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
