<template>
  <div class="home">
    <div class="section_inner">
      <h1 class="home-hd">
        <i class="icon_txt">歌单推荐</i>
      </h1>
      <TabsList :list="listSong" />
    </div>
  </div>
</template>

<script>
import TabsList from "./TabsList";
// import Carousel from "./Carousel";

export default {
  components: {
    // Carousel,
    TabsList,
  },
  data() {
    return {
      listSong: [
        { id: 1, name: "每日推荐" },
        { id: 2, name: "每日推荐" },
        { id: 3, name: "每日推荐" },
      ],
    };
  },
  methods: {},
  async mounted() {},
};
</script>

<style lang="stylus" >
.btn {
  position: absolute;
  top: 51px;
  left: 20px;
  border: 1px solid #c9c9c9;
  color: #000;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.section-content {
  position: relative;
  top: 30px;
}

.home {
  width: 100%;
  background: #ddd;
  // background: red;
}

.section_inner {
  margin: 0 auto;
  overflow: hidden;
  // background-color: #ddd;
  width: 100%;
  height: 100%;
  min-width: 900px;
  max-width: 1200px;
  // background: url(img/bg_detail.jpg?max_age=2592000) 50% 0 repeat-x;
}

.home-hd {
  font-size: 30px;
  text-align: center;
  padding-top: 4.16667%;
  padding-bottom: 2%;
}
</style>