<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <!-- <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img v-lazy="carousel.imgUrl" />
      </div> -->
      <div class="swiper-slide">
        <div class="slide-item">
          <ul class="item-ul">
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="slide-item">
          <ul class="item-ul">
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="slide-item">
          <ul class="item-ul">
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
            <li class="lists">
              <img src="../../assets/images/300.jpg" alt="" class="image" />
              <div class="last">
                <span class="first">大吉大利，今晚吃鸡</span>
                <span class="two">播放量：4555万</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 1. 引入swiper两个文件
import Swiper, { Navigation, Pagination } from 'swiper'

// https://swiperjs.com/get-started/
// Swiper6默认只有核心轮播图功能，其他功能没有
// 要使用其他功能，需要先加载, Autoplay
Swiper.use([Navigation, Pagination])

export default {
  name: 'Carousel',
  watch: {
    carouselList() {
      // [] --> 最终的数据 数据发生变化才会触发
      // 轮播图DOM元素要渲染完成 --> 轮播图数据
      // watch为了确保有轮播图数据
      // this.$nextTick为了确保轮播图数据已经渲染成DOM元素

      // 确保：swiper不能new多次
      if (this.swiper) return

      this.$nextTick(() => {
        this.initSwiper()
      })
    },
  },
  methods: {
    initSwiper() {
      // 使用 this.$refs.swiper 取代 .swiper-container
      // 使用 this.$refs.swiper 才能保证轮播图组件使用的自己的swiper
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        autoplay: {
          // 自动轮播
          delay: 2000, // 轮播间隔时间
          disableOnInteraction: false, // 当用户点击下一页时，仍会开启自动轮播
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
  },
  mounted() {
    // 轮播图数据要有 且 轮播图DOM元素要渲染完成 才能 new Swiper
    /* 
      1. ListContainer组件
        一上来没有数据 -- 触发watch
      2. Floor 
        一上来就有数据 -- mounted  
    */
    // if (!this.carouselList.length) return

    this.initSwiper()
  },
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 310px;
  // border: 1px solid pink;
}
.swiper-slide {
  // border: 1px solid black;
  box-sizing: border-box;
}
.slide-item {
  width: 90%;
  height: 260px;
  // border: 1px solid pink;
  margin: 0 auto;
}
.item-ul {
  width: 100%;
  height: 100%;
  display: flex;
  white-space: normal;
}
.lists {
  width: 224px;
  height: 260px;
  // border: 1px solid green;
  white-space: normal;
  margin-right: 20px;
}
.image {
  width: 100%;
  height: 204px;
}
.last {
  width: 140px;
  height: 50px;
  display: flex;
  flex-direction: column;
}
.first {
  width: 100%;
  height: 24px;
  font-size: 14px;
}
.two {
  width: 100%;
  height: 22px;
  font-size: 14px;
}
</style>
