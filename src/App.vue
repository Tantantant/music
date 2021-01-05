<template>
  <div class="appContainer">
    <TopList />
    <ModtopList />
   
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import TopList from "./views/topList";
// import SongInfo from "./views/songInfo";
import ModtopList from "./views/mod_topList";


export default {
  name: "App",
  components: {
    TopList,
    ModtopList,
    // SongInfo,
   
  },
};
</script >

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
