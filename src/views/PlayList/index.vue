<template>
  <div class="play">
    <div class="play_a"><SongText /></div>
  </div>
</template>

<script>
import SongText from "../../components/SongText";
export default {
  name: "PlayList",
  components: {
    SongText,
  },
};
</script>

<style lang="less" scoped>
.play {
  width: 100%;
  height: 100%;
  .play_a {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
