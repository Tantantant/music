<template>
  <div id="app">
    <Singer />
    <Footer />
    <!-- <Singerlist /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from './components/footer'
import Singer from './views/singer'
// import Singerlist from './views/singer-details'
export default {
  name: 'App',
  components: {
    Singer,
    Footer,
  },
}
</script>

<style lang="stylus"></style>
