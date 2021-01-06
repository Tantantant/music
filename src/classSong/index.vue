<template>
  <div>
    <!-- 头部 -->
    <!-- <Header /> -->

    <!-- 内容区 -->
    <div class="center">
      <div class="content">
        <!-- 筛选标签 -->
        <div class="playList_tag">
          <div class="playList_item">
            <h3 class="playList_item_header">语种</h3>
            <ul class="playList_item_content">
              <li class="playList_item_box">
                <a href="javascript:;" class="active">国语</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">英语</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">韩语</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">粤语</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">日语</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">法语</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">闽南语</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">拉丁语</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;" class="iconfont icon-jy-Down-Outlined"
                  >更多</a
                >
              </li>
            </ul>
          </div>
          <div class="playList_item">
            <h3 class="playList_item_header">流派</h3>
            <i class="playList_item_line"></i>
            <ul class="playList_item_content">
              <li class="playList_item_box">
                <a href="javascript:;">流行</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">轻音乐</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">摇滚</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">民谣</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">R&B</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">嘻哈</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">电子</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">古典</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;" class="iconfont icon-jy-Down-Outlined"
                  >更多</a
                >
              </li>
            </ul>
          </div>
          <div class="playList_item">
            <h3 class="playList_item_header">主题</h3>
            <i class="playList_item_line"></i>
            <ul class="playList_item_content">
              <li class="playList_item_box">
                <a href="javascript:;">ACG</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">经典</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">网络</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">影视</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">KTV</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">儿歌</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">中国风</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">古风</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;" class="iconfont icon-jy-Down-Outlined"
                  >更多</a
                >
              </li>
            </ul>
          </div>
          <div class="playList_item">
            <h3 class="playList_item_header">心情</h3>
            <i class="playList_item_line"></i>
            <ul class="playList_item_content">
              <li class="playList_item_box">
                <a href="javascript:;">伤感</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">安静</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">快乐</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">治愈</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">励志</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">甜蜜</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">寂寞</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">宣泄</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">思念</a>
              </li>
            </ul>
          </div>
          <div class="playList_item">
            <h3 class="playList_item_header">场景</h3>
            <i class="playList_item_line"></i>
            <ul class="playList_item_content">
              <li class="playList_item_box">
                <a href="javascript:;">睡前</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">夜店</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">学习</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">运动</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">开车</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">约会</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">工作</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;">旅行</a>
              </li>
              <li class="playList_item_box">
                <a href="javascript:;" class="iconfont icon-jy-Down-Outlined"
                  >更多</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- 全部歌单 -->
        <div class="allSong">
          <div class="allSong_header">
            <h2>全部歌单</h2>
            <div class="allSong_new">
              <a href="javascript:;" class="active">推荐</a>
              <a href="javascript:;">最新</a>
            </div>
          </div>
          <div class="allSong_list">
            <ul>
              <li
                class="allSong_list_item"
                v-for="item in songList"
                :key="item.id"
              >
                <div class="allSong_list_img">
                  <a href="javascript:;">
                    <img :src="item.imgurl" alt="" />
                  </a>
                  <i>
                    <!-- <img src="../assets/images/cover_play@2x.png" alt="" /> -->
                  </i>
                </div>
                <div class="allSong_list_box">
                  <a href="javascript" class="a1">{{ item.dissname }}</a>
                  <a href="javascript" class="a2">{{ item.name }}</a>
                  <span
                    >播放量: {{ (item.listennum / 10000).toFixed(1) }}万</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- 下载区 -->
        <div class="songText">
          <span>查看更多内容，请下载客户端</span>
          <div class="songText_a">
            <a href="javascript:;">立即下载</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
// 引入辅助函数
import { mapState } from "vuex";
export default {
  name: "classSong",
  components: {},
  mounted() {
    this.$store.dispatch("getSongList");
  },
  computed: {
    ...mapState({
      songList: (state) => state.classSong.songList,
    }),
  },
};
</script>

<style scoped>
.center {
  width: 100%;
  background-color: rgb(240, 240, 240);
}
.content {
  width: 1200px;
  margin: 0 auto;
}
.playList_tag {
  display: flex;
  width: 1200px;
  height: 116px;
  margin: 0 auto;
  padding: 60px 0 32px 0;
}
.playList_item {
  width: 20%;
  border-right: 1px solid rgb(204, 204, 204);
}
.playList_item:last-child {
  border-right: 0;
}
.playList_item h3 {
  width: 160px;
  font-size: 14px;
  font-weight: 400;
  color: #999;
  padding-left: 10px;
}
.playList_item ul {
  display: flex;
  flex-wrap: wrap;
}
.playList_item li {
  width: 33.3333%;
  margin: 8px 0;
  font-size: 14px;
}
.playList_item li .active {
  color: #fff;
  background-color: #31c27c;
}
.playList_item li a {
  padding: 2px 8px;
  margin-left: 10px;
  text-align: center;
  color: black;
}
.playList_item li a:hover {
  color: rgba(99, 233, 22, 0.856);
}
.playList_item li .active:hover {
  color: #fff;
}
.allSong {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}
.allSong .allSong_header {
  overflow: hidden;
  width: 1200px;
  height: 60px;
}
.allSong .allSong_header h2 {
  float: left;
  font-size: 24px;
  font-weight: 400;
}
.allSong .allSong_header .allSong_new {
  float: right;
  width: 124px;
  height: 40px;
  border: 1px solid #31c27c;
  border-radius: 2px;
}
.allSong .allSong_header .allSong_new a {
  display: block;
  float: left;
  width: 60px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: black;
}
.allSong .allSong_header .allSong_new .active {
  background-color: #31c27c;
  color: #fff;
}
.allSong_list {
  width: 1200px;
}
.allSong_list_item {
  width: 20%;
  float: left;
  padding-bottom: 44px;
}
.allSong_list_img {
  width: 224px;
  height: 224px;
  margin-bottom: 15px;
  position: relative;
}
.allSong_list_img img {
  width: 224px;
  height: 224px;
}
.allSong_list_img i {
  opacity: 0;
  width: 49px;
  height: 49px;
  background-image: url("../assets/images/cover_play@2x.png");
  background-size: contain;
  position: absolute;
  left: 40%;
  top: 40%;
}
.allSong_list_img:hover i {
  opacity: 1;
  transition: opacity 0.4s linear;
}
.allSong_list_item a,
span {
  display: block;
  font-size: 14px;
  color: black;
}
.allSong_list_item a:hover {
  color: #31c27c;
}
.songText span {
  display: block;
  width: 1200px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 18px;
  color: black;
}
.allSong_list_item .a2,
span {
  color: #999999;
}
.songText .songText_a {
  width: 175px;
  height: 41px;
  margin: 20px auto;
  text-align: center;
  line-height: 41px;
  background-color: #31c27c;
  border-radius: 41px;
}
.songText .songText_a:hover {
  background-color: #327e59;
}
.songText .songText_a a {
  font-size: 16px;
  color: #fff;
}
</style>
