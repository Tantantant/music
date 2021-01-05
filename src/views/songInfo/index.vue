<template>
  <div class="songInfo_Container">
    <div class="mod_data">
      <span class="data_cover">
        <img class="image" src="" alt="" />
      </span>
    </div>
    <div class="data__cont">
      <div>四季与你</div>
      <div>程翔</div>
      <ul>
        <li>流派:POP流行</li>
        <li>流派:POP流行</li>
        <li>流派:POP流行</li>
        <li>流派:POP流行</li>
        <li>流派:POP流行</li>
      </ul>
    </div>
    <div class="mod_songlist_toolbar">
      <a class="btn_green" href="###"
        ><i class="iconfont icon-bofang"></i>播放全部</a
      >
      <a href="###"><i class="iconfont icon-tianjia"></i>添加到</a>
      <a href="###"><i class="iconfont icon-46"></i>下载</a>
      <a href="###"><i class="iconfont icon-piliangbianji"></i>批量操作</a>
      <a href="###"><i class="iconfont icon-pinglun"></i>评论(6666)</a>
    </div>

    <ul class="songList_header">
      <li class="songName">歌曲</li>
      <li class="songAuthor">歌手</li>
      <li class="songTime">时长</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" scoped>
</style>
