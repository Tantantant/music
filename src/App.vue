<template>
  <div id="app">
    <!-- <classSong></classSong> -->

    <TopList />
    <ModtopList />

    <!-- <router-view></router-view> -->

    <Header />
    <Newdisc />
  </div>
</template>

<script>
import Newdisc from "./views/Newdisc";
import Header from "./components/header";

import classSong from "./classSong";
export default {
  name: "App",
  components: {
    classSong,
    Newdisc,
    Header,
  },
};
</script>

<style lang="stylus" scoped>
html, body {
  background-color: #ededed;
}

.appContainer {
  width: 1240px;
  display: flex;
  margin: 0 auto;
}
</style>

