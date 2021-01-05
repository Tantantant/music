<template>
  <div class="client_guide">
    <p class="client_guide_text">查看更多内容,请下载客户端</p>
    <a href="##" class="client_guide_btn">立即下载</a>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="stylus" scoped>
.client_guide {
  height: 87px;
  width: 100%;
  text-align: center;
}

.client_guide .client_guide_text {
  font-size: 18px;
}

.client_guide .client_guide_btn {
  display: block;
  margin: 20px auto 0;
  width: 175px;
  height: 41px;
  line-height: 41px;
  font-size: 16px;
  color: #fff;
  border-radius: 41px;
  background-color: #31c27c;
  text-decoration: none;
}
</style>
