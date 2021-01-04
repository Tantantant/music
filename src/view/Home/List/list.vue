<template>
  <div class="swiper-list">
    <div class="swiper-item">
      <img src="../img/300.png" alt="" />
      <span>夜未眠丨始于脸红终于眼红</span>
      <span>播放量：12222</span>
    </div>
    <div class="swiper-item">
      <img src="../img/300.png" alt="" />
      <span>夜未眠丨始于脸红终于眼红</span>
      <span>播放量：12222</span>
    </div>
    <div class="swiper-item">
      <img src="../img/300.png" alt="" />
      <span>夜未眠丨始于脸红终于眼红</span>
      <span>播放量：12222</span>
    </div>
    <div class="swiper-item">
      <img src="../img/300.png" alt="" />
      <span>夜未眠丨始于脸红终于眼红</span>
      <span>播放量：12222</span>
    </div>
    <div class="swiper-item">
      <img src="../img/300.png" alt="" />
      <span>夜未眠丨始于脸红终于眼红</span>
      <span>播放量：12222</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
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
  font-family: poppin, Tahoma, Arial, \5 FAE \8 F6F \9 6c 5 \9 ED1, sans-serif;
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
</style>