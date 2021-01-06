<template>
  <div>
    <!-- 一级路由组件显示区域 -->
    <router-view />
    <!-- <Digital /> -->
  </div>
</template>

<script>
// import Digital from "./view/Digital";
import "./styles/reset.css";

export default {
  name: "App",
  components: {
    // Digital,
  },
};
</script>

<style>
</style>
