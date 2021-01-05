<template>
  <div>
    <Header />
    <Newdisc />
  </div>
</template>

<script>
import Newdisc from "./views/Newdisc";
import Header from "./components/header";

export default {
  name: "App",
  components: {
    Newdisc,
    Header,
  },
};
</script>

<style>
</style>
