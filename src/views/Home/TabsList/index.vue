<template>
  <div class="title-list">
    <el-tabs stretch="true">
      <el-tab-pane v-for="item in listSong" :key="item.id" :label="item.name">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import Carousel from "../Carousel";
export default {
  name: "TabsList",
  components: {
    // Carousel,
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

  methods: {
    handleClick(tab) {
      console.log(tab);
    },
  },
};
</script>

<style>
.el-tabs__nav-scroll {
  text-align: center;
  margin: 0 auto;
  width: 50%;
}
.el-tabs__active-bar {
  width: 0 !important;
  height: 0 !important;
}
.el-tabs__nav-wrap::after {
  width: 0% !important;
}
</style>