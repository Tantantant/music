<template>
  <div class="title-list">
    <el-tabs>
      <el-tab-pane v-for="item in listSong" :key="item.id" :label="item.name">
      </el-tab-pane>
    </el-tabs>
    <!-- <Carousel /> -->
    <Map />
  </div>
</template>

<script>
// import Carousel from '../../../components/Carousel'
import Map from '../../../components/map'

export default {
  name: 'TabsList',
  components: {
    // Carousel,
    Map,
  },
  data() {
    return {
      listSong: [
        { id: 1, name: '每日推荐' },
        { id: 2, name: '每日推荐' },
        { id: 3, name: '每日推荐' },
      ],
    }
  },
  /*   watch: {
    carouselList() {
      this.$nextTick(() => {
        // 然后这里就不应该new同一个类名，这样使用的就是同一个组件，并且在watch监听组件中，数据只更新一次，
        //因为在ListContainer组件中，一上来要先渲染DOM元素，才会有数据，因为数据是异步请求的，所以我们在watch中监视数据的发现变化，但数据只会请求一次，所以轮播图数据只会请求一次
        if (this.swiper) return
        this.inSwpier()
      })
    },
  }, */
}
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
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>