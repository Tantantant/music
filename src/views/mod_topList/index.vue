<template>
  <!-- 头部 -->
  <div class="mod_Container">
    <div class="topList_header">
      <h1>流行指数榜</h1>
      <span>{{ songInfoList.updateTime }}</span>
      <a href="###">榜单规则</a>
    </div>
    <!-- 导航 -->
    <div class="mod_songlist_toolbar">
      <a class="btn_green" href="###"
        ><i class="iconfont icon-bofang"></i>播放全部</a
      >
      <a href="###"><i class="iconfont icon-tianjia"></i>添加到</a>
      <a
        ><i class="iconfont icon-46">
          <template>
            <el-button type="text" @click="open">下载</el-button>
          </template>
        </i></a
      >
      <a @click="checkedAll"
        ><i class="iconfont icon-piliangbianji"></i>批量操作</a
      >
      <a href="###"><i class="iconfont icon-pinglun"></i>评论(6666)</a>
    </div>

    <ul class="songList_header">
      <li class="songName">歌曲</li>
      <li class="songAuthor">歌手</li>
      <li class="songTime">时长</li>
    </ul>

    <ul class="songList_body">
      <li
        class="songList_li"
        v-for="(song, index) in songInfoList.song"
        :key="song.songId"
      >
        <input type="checkbox" :checked="isChecked ? 'checked' : ''" :display="isChecked ? 'none' : 'block'" />
        <div class="fonts">
          <i class="iconfont icon-70BasicIcons-all-64"></i>
          <i class="iconfont icon-tianjia"></i>
          <i class="iconfont icon-xiazai"></i>
          <i class="iconfont icon-zhuanfa"></i>
        </div>
        <div class="songList_top">{{ index + 1 }}</div>
        <div class="songList_shang">
          <i class="iconfont icon--xiangshangjiantou"></i>{{ song.rankValue }}
        </div>

        <div class="songList_songInfo">
          <span class="songList_img">
            <router-link to="/song"
              ><img :src="songInfoList.musichallPicUrl" alt=""
            /></router-link>
          </span>

          <span class="songList_songName"
            ><a href="##">{{ song.title }}</a></span
          >
        </div>
        <div class="songList_Author">
          <a href="##">{{ song.singerName }}</a>
        </div>
        <div class=" ">03:20</div>
      </li>
    </ul>

    <div class="client_guide">
      <p class="client_guide_text">查看更多内容,请下载客户端</p>
      <a href="##" class="client_guide_btn">立即下载</a>
    </div>
  </div>
</template>

<script>
import { getToplist } from "../../api/topList";

export default {
  name: "",
  data() {
    return {
      songInfoList: {},
      songList: {},
      // imageList: {},
      isChecked: false,
    };
  },
  async mounted() {
    const res = await getToplist();
    if (res.response.code === 0) {
      // console.log(res.response.detail.data.data);
      this.songInfoList = res.response.detail.data.data;
      this.songInfoList.song.splice(0, 80);
      console.log(this.songInfoList);
    }

    // const result = await getToplist();
    // if (result.status === 0) {
    //   this.imageList = result.data;
    // }
    // // console.log(this.songList);
  },

  methods: {
    open() {
      this.$confirm(
        " 下载歌曲需要在QQ音乐客户端操作!使用QQ音乐客户端获得高品质完整体验,   若您未安装QQ音乐客户端请先安装",
        "QQ音乐提醒您  ",
        {
          confirmButtonText: "下载客户端",
          cancelButtonText: "打开客户端",
          type: "warning",
        }
      );
    },
    checkedAll() {
      this.isChecked = !this.isChecked;
      console.log(this.isChecked);
    },
  },
};
</script>

<style lang="stylus" scoped>
* {
  list-style: none;
  margin: 0;
  padding: 0;
}

.songList_li {
  position: relative;
}

.songList_li:hover .fonts {
  display: block;
}

.songList_li .fonts {
  position: absolute;
  left: 480px;
  display: none;
}

.songList_li .fonts .iconfont {
  padding: 0 5px;
  font-size: 25px;
  color: #ddd;
}

.songList_li .fonts .iconfont:hover {
  color: #31c27c;
}

.mod_Container {
  width: 990px;
  margin-left: 20px;
}

.topList_header {
  height: 64px;
  line-height: 64px;
  margin-bottom: 10px;
}

.topList_header h1 {
  float: left;
  font-weight: 400;
  font-size: 24px;
  margin: 0;
  margin-right: 15px;
  padding: 0;
}

.topList_header a {
  line-height: 64px;
  text-decoration: none;
  font-size: 14px;
  color: #000;
}

.topList_header a:hover {
  color: #31c27c;
}

.topList_header span {
  font-size: 14px;
  margin-right: 15px;
}

.mod_songlist_toolbar a {
  border-radius: 2px;
  border: 1px solid #c9c9c9;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  min-width: 122px;
  text-align: center;
  color: #000;
}

.mod_songlist_toolbar a .iconfont {
  display: inline-block;
  margin-right: 6px;
}

.mod_songlist_toolbar a:hover {
  background-color: #ddd;
}

.mod_songlist_toolbar .btn_green {
  background-color: #31c27c;
  color: #fff;
}

.mod_songlist_toolbar .btn_green:hover {
  background-color: #2caf6f;
  border-color: #2caf6f;
}

.songList_header {
  padding-left: 122px;
  height: 50px;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.01);
  color: #999;
}

.songList_header li {
  float: left;
}

.songList_header .songName {
  width: 60%;
}

.songList_header .songAuthor {
  width: 25.5%;
}

.songList_header .songTime {
  width: 50px;
}

.songList_body .songList_li a {
  text-decoration: none;
}

.songList_body .songList_li {
  height: 80px;
  line-height: 80px;
  display: flex;
  text-decoration: none;
}

.songList_li .songList_top {
  color: red;
  width: 40px;
  top: 2px;
  left: 0;
  text-align: right;
  font-size: 24px;
}

.songList_li .songList_shang {
  width: 72px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #999;
}

.songList_li .songList_shang i {
  margin: 0 auto;
  width: 15px;
  height: 15px;
  margin-top: 27px;
  display: block;
}

.songList_li .songList_songInfo {
  margin-right: 8px;
  width: 52%;
}

.songList_li a {
  color: #000;
}

.songList_songInfo .songList_img a img {
  width: 70px;
  height: 70px;
  margin-top: 5px;
}

.songList_Author {
  padding-left: 10px;
  width: 21.5%;
}

.songList_songName {
  margin-left: 5px;
  line-height: normal;
  display: inline-block;
}

.songList_Time {
  width: 50px;
}

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
