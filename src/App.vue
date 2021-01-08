<template>
  <div id="app">
    <!-- <classSong></classSong> -->

    <!-- <TopList />
    <ModtopList /> -->

    <Header />
    <!-- <Newdisc />
    <Digital />
    <Singer /> -->
    <router-view></router-view>
    <Footer />
    <!-- <Singerlist /> -->
  </div>
</template>

<script>
// import Newdisc from "./views/Newdisc";
import Header from "./components/header";
// import Digital from "./view/Digital";
// import "./styles/reset.css";

// import classSong from "./classSong";
import Footer from './components/footer'
// import Singer from './views/singer'
// import Singerlist from './views/singer-details'
export default {
  name: "App",
  components: {
    // classSong,
    // Newdisc,
    Header,
    // Digital,
    // Singer,
    Footer,
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

