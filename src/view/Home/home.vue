<template>
  <div class="home">
    <div class="section_inner">
      <h1 class="home-hd">
        <i class="icon_txt">歌单推荐</i>
      </h1>
      <!-- 导航列表 -->
      <ul class="title-list">
        <li><a href="">歌单推荐</a></li>
        <li><a href="">歌单推荐</a></li>
        <li><a href="">歌单推荐</a></li>
        <li><a href="">歌单推荐</a></li>
        <li><a href="">歌单推荐</a></li>
      </ul>
      <div class="section-index">
        <!-- <Carousel /> -->
        <!-- 首页轮播列表 -->
        <div class="out-swiper">
          <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-list">
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
              </div>
              <div class="swiper-slide swiper-list">
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
                <div class="swiper-item">
                  <img src="./img/300.png" alt="" />
                  <span>夜未眠丨始于脸红终于眼红</span>
                  <span>播放量：12222</span>
                </div>
              </div>
            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
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

.swiper-container {
  position: relative;
  // background: red;
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
  justify-content: space-between;
  margin: 0 25%;
  color: #000;
  line-height: 1.5;
  font-family: poppin, Tahoma, Arial, \5 FAE \8 F6F \9 6C 5 \9 ED1, sans-serif;
}

.swiper-list {
  display: flex;
  justify-content: space-between;
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

.out-swiper {
  display: absolute;
  width: 100%;
  height: 100%;
  background: red;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>