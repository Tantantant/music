<template>
  <!-- <Title /> -->
  <div class="content">
    <div class="title">
      <div class="title_T">
        <h2>歌单推荐</h2>
      </div>
      <div class="title_B">
        <a href="">为你推荐</a>
        <a href="">官方歌单</a>
        <a href="">情歌</a>
        <a href="">网络歌曲</a>
        <a href="">经典</a>
        <a href="">KTV热歌</a>
      </div>
    </div>
  </div>
</template>

<script>
// import Title from "./Title";
export default {
  name: "Home",
  // components: {
  //   Title,
  // },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  .title {
    width: 1200px;
    margin: 0 auto;
    .title_T {
      padding: 50px 0 24px;
      h2 {
        width: 196px;
        height: 40px;
        margin: 0 auto;
        font-size: 28px;
        letter-spacing: 12px;
        text-align: center;
        line-height: 40px;
      }
    }
    .title_B {
      height: 50px;
      text-align: center;
      a {
        font-size: 15px;
        margin: 0 24px;
        color: #3c3c3c;
      }
      a:hover {
        color: #31c27c;
      }
    }
  }
}
</style>
