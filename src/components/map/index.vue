<template>
  <div class="block">
    <!-- <span class="demonstration">Click 指示器触发</span> -->
    <el-carousel trigger="click" height="350px" class="carousel">
      <!-- <el-carousel-item v-for="item in 2" :key="item"> -->
      <!-- <h3 class="small">{{ item }}</h3> -->
      <el-carousel-item class="caousel-item">
        <ul class="item-ul">
          <li class="lists">
            <img src="../../assets/images/300.jpg" alt="" class="image" />
            <div class="last">
              <span class="first">大吉大利，今晚吃鸡</span>
              <span class="two">播放量：4555万</span>
            </div>
            <div class="three"></div>
          </li>
          <li class="lists">
            <img src="../../assets/images/300.jpg" alt="" class="image" />
            <div class="last">
              <span class="first">大吉大利，今晚吃鸡</span>
              <span class="two">播放量：4555万</span>
            </div>
            <div class="three"></div>
          </li>
          <li class="lists">
            <img src="../../assets/images/300.jpg" alt="" class="image" />
            <div class="last">
              <span class="first">大吉大利，今晚吃鸡</span>
              <span class="two">播放量：4555万</span>
            </div>
            <div class="three"></div>
          </li>
          <li class="lists">
            <img src="../../assets/images/300.jpg" alt="" class="image" />
            <div class="last">
              <span class="first">大吉大利，今晚吃鸡</span>
              <span class="two">播放量：4555万</span>
            </div>
            <div class="three"></div>
          </li>
        </ul>
      </el-carousel-item>
      <el-carousel-item class="caousel-item">
        <ul class="item-ul">
          <li class="lists">
            <img src="../../assets/images/300.jpg" alt="" class="image" />
            <div class="last">
              <span class="first">大吉大利，今晚吃鸡</span>
              <span class="two">播放量：4555万</span>
            </div>
            <div class="three"></div>
          </li>
          <li class="lists">
            <img src="../../assets/images/300.jpg" alt="" class="image" />
            <div class="last">
              <span class="first">大吉大利，今晚吃鸡</span>
              <span class="two">播放量：4555万</span>
            </div>
            <div class="three"></div>
          </li>
          <li class="lists">
            <img src="../../assets/images/300.jpg" alt="" class="image" />
            <div class="last">
              <span class="first">大吉大利，今晚吃鸡</span>
              <span class="two">播放量：4555万</span>
            </div>
            <div class="three"></div>
          </li>
          <li class="lists">
            <img src="../../assets/images/300.jpg" alt="" class="image" />
            <div class="last">
              <span class="first">大吉大利，今晚吃鸡</span>
              <span class="two">播放量：4555万</span>
            </div>
            <div class="three"></div>
          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.el-carousel__item h3 {
  // color: #fff;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  // background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n + 1) {
  // background-color: #d3dce6;
}
.block {
  width: 100%;
  height: 350px;
  background-color: #fafafa;
}
.item-ul {
  width: 100%;
  height: 350px;
  display: flex;
  white-space: normal;
  background-color: transparent;
}
.lists {
  width: 224px;
  height: 260px;
  // border: 1px solid green;
  white-space: normal;
  margin-right: 20px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
/* .image {
  width: 100%;
  height: 204px;
    overflow: hidden;
} */
.image {
  width: 100%;
  height: 204px;
  -webkit-transition: 0.3s linear;
  transition: 0.3s linear;
  overflow: hidden;
}
.image:hover {
  transform: scale(1.1);
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
  margin-top: 20px;
}
.two {
  width: 100%;
  height: 22px;
  font-size: 14px;
}
.three {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid pink;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -40px;
  margin-left: -30px;
  opacity: 0.9;
  /*   opacity: 0.5;
  transform: scale(0.7) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s; */
}
</style>
