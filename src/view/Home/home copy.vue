<template>
  <div class="mod_slide_action">
    <div class="slide_action slide_action--left">
      <a
        href="javascript:;"
        class="slide_action__btn slide_action__btn--left js_jump"
        data-p="prev"
        tabindex="-1"
        data-stat="y_new.index.playlist.pager"
        ><i class="icon_txt">上一页</i
        ><i class="slide_action__arrow slide_action__arrow--left sprite"></i
      ></a>
    </div>
    <div class="slide_action slide_action--right">
      <a
        href="javascript:;"
        class="slide_action__btn slide_action__btn--right js_jump"
        data-p="next"
        tabindex="-1"
        data-stat="y_new.index.playlist.pager"
        ><i class="icon_txt">下一页</i
        ><i class="slide_action__arrow slide_action__arrow--right sprite"></i
      ></a>
    </div>
  </div>
</template>

<script>
// import Carousel from "../../components/Carousel";
// 1. 引入swiper两个文件
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
// Swiper6默认只有核心轮播图功能，其他功能没有 要使用其他功能，需要先加载
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  components: {
    // Carousel,
  },
  data() {
    return {
      titleName: "titleName",
      carouselList: [],
    };
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        // direction: "vertical", // 垂直切换选项
        loop: true, // 循环模式选项
        pagination: {
          // 如果需要分页器
          el: ".swiper-pagination",
          //分页器切换
          clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    },
    mounted() {
      this.initSwiper();
    },
  },
  mounted() {
    this.initSwiper();
  },
};
</script>

<style lang="stylus" >
.home {
  width: 100%;
  background: #ddd;
}

.swiper-container {
  position: relative;
  background: #ddd;
}

.section_inner:hover:after-left {
  content: '台词：1212123124-';
  background-color: yellow;
  color: red;
  font-weight: bold;
  font-size: 80px;
  width: 100%;
  height: 100%;
}

.section_inner {
  margin: 0 auto;
  overflow: hidden;
  background-color: #ddd;
  width: 100%;
  height: 100%;
  min-width: 900px;
  max-width: 1200px;
  background: url('img/bg_detail.jpg') 50% 0 repeat-x;
}

.section_inner .home-hd {
  font-size: 30px;
  text-align: center;
  padding-top: 4.16667%;
  padding-bottom: 2%;
}

.home .section_inner .title-list {
  font-size: 15px;
  display: flex;
  height: 50px;
  text-align: center;
  justify-content: space-around;
  margin: 0 25%;
  color: #000;
  line-height: 1.5;
  font-family: poppin, Tahoma, Arial, \5 FAE \8 F6F \9 6C 5 \9 ED1, sans-serif;
}

.swiper-list {
  display: flex;
  justify-content: space-around;
}

.swiper-item {
  padding-right: 20px;
  width: 20%;
  overflow: hidden;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // background: red;
}

.swiper-item span:nth-of-type(1) {
  color: #000;
  font-size: 14px;
  white-space: normal;
  font-weight: 400;
  line-height: 22px;
  max-height: 44px;
  margin: 5px 0;
}

.swiper-item span:nth-of-type(2) {
  font-family: poppin, Tahoma, Arial, \5 FAE \8 F6F \9 6C 5 \9 ED1, sans-serif;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
}

.swiper-item img {
  width: 100%;
  height: auto;
}

.swiper-button-prev::hover:after {
  background: red;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
}
</style>