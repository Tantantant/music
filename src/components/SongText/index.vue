<template>
  <!-- 下载区 -->
  <div class="songText">
    <span>查看更多内容，请下载客户端</span>
    <div class="songText_a">
      <a href="javascript:;">立即下载</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongText",
};
</script>

<style lang="less" scoped>
.songText {
  padding-bottom: 10px;
  span {
    display: block;
    width: 1200px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 18px;
    color: black;
  }
  .songText_a {
    width: 175px;
    height: 41px;
    margin: 20px auto;
    text-align: center;
    line-height: 41px;
    background-color: #31c27c;
    border-radius: 41px;
    a {
      display: block;
      font-size: 16px;
      color: #fff;
    }
  }
  .songText_a:hover {
    background-color: #327e59;
  }
}
</style>
