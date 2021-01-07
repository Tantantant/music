<template>
  <!-- 头部 -->
  <div class="mod_Container">
    <TopList />
    <div class="container">
      <div class="topList_header">
        <h1>流行指数榜</h1>
        <span>2021-01-06</span>
        <!-- <a>榜单规则</a> -->
        <el-popover
          placement="bottom"
          title="榜单规则"
          width="200"
          trigger="click"
          content="QQ音乐内综合播放得分最高的100首单曲。
          更新时间：每天
          计算方式：综合播放得分对比七天前涨。"
        >
          <el-button slot="reference">榜单规则</el-button>
        </el-popover>
      </div>
      <!-- 导航 -->
      <div class="mod_songlist_toolbar">
        <a class="btn_green" href="###"
          ><i class="iconfont icon-bofang"></i>播放全部</a
        >
        <a href="###"><i class="iconfont icon-tianjia"></i>添加到</a>

        <a>
          <template>
            <el-button type="text" @click="download1"
              ><i class="iconfont icon-46">下载</i></el-button
            >
          </template>
        </a>
        <a @click="checkedAll"
          ><i class="iconfont icon-piliangbianji"></i
          >{{ isChecked ? "取消批量操作" : "批量操作" }}</a
        >
        <a href="#1F"
          ><i class="iconfont icon-pinglun"></i>评论({{ comment.length }})</a
        >
      </div>

      <ul class="songList_header">
        <li class="songName">歌曲</li>
        <li class="songAuthor">歌手</li>
        <li class="songTime">时长</li>
      </ul>

      <ul class="songList_body">
        <li
          class="songList_li"
          v-for="(song, index) in songInfoList"
          :key="song.id"
        >
          <input
            type="checkbox"
            :checked="isChecked ? 'checked' : ''"
            :style="{ display: isChecked ? 'block' : 'none' }"
          />
          <div class="fonts">
            <a href="###">
              <i
                class="iconfont icon-70BasicIcons-all-64"
                @click="playMusic(index, song.id)"
              >
              </i>
            </a>
            <i class="iconfont icon-tianjia" @click="add"></i>
            <div class="add" :style="{ display: isShow ? 'block' : 'none' }">
              <p>播放队列</p>
              <p>登陆后添加歌单</p>
            </div>
            <template>
              <el-button type="text" @click="download2"
                ><i class="iconfont icon-xiazai"></i
              ></el-button>
            </template>
            <template>
              <el-button type="text"></el-button>
            </template>
            <i class="iconfont icon-zhuanfa" @click="zhuanfa"></i>
            <div
              class="zhuanfa"
              :style="{ display: isZhuanfa ? 'block' : 'none' }"
            >
              <p>QQ好友</p>
              <p>微信好友/朋友圈</p>
              <p>QQ空间</p>
              <p>新浪微博</p>
              <p>复制链接</p>
            </div>
          </div>
          <div class="songList_top">{{ index + 1 }}</div>
          <div class="songList_shang">
            <i class="iconfont icon--xiangshangjiantou"></i>
            <!-- <div> {{song.fee}}%</div> -->
          </div>

          <div class="songList_songInfo">
            <span class="songList_img">
              <a>
                <img
                  @click="toSongInfo(index)"
                  :src="song.album.blurPicUrl"
                  alt=""
              /></a>
            </span>

            <span class="songList_songName"
              ><a href="##">{{ song.name }}</a></span
            >
          </div>
          <div class="songList_Author">
            <a href="##">{{ song.album.artists[0].name }}</a>
          </div>
          <div class=" ">03:20</div>
        </li>
      </ul>
      <Guide />
      <Comment />
    </div>
  </div>
</template>

<script>
// import { getTopDetail } from "../../api/topList";
import { mapState} from "vuex";
import Guide from "../../components/guide";
import Comment from "../../components/comment";
import TopList from "../topList";

export default {
  name: "ModTopLsit",
  data() {
    return {
      // imageList: {},
      isChecked: false,
      isShow: false,
      isZhuanfa: false,
    };
  },
  computed: {
    ...mapState({
      songInfoList: (state) => state.topList.songInfoList,
      comment: (state) => state.topList.comment,
      musicInfo: (state) => state.topList.musicInfo,
    }),
  },
  mounted() {
    this.$store.dispatch("getTopDetail");
    this.$store.dispatch("getComments");
  },

  methods: {
    // 跳转音乐详情
    toSongInfo(index) {
      const id = this.songInfoList[index].id;
      //  console.log(id)
      // this.$router.push('/song',)

      this.$router.push({ path: "/song", query: { id: id } });
    },
    // 播放
    playMusic(index, songId) {
      // const id = this.songInfoList[index].copyrightId;
      this.$store.dispatch("getMusicUrls", songId);
      this.$store.commit("SONGINFO", songId);
      // console.log(this.songInfoList)
      this.$router.push("/playmusic");
      console.log("musicInfo", this.musicInfo);

      // 跳转打开新窗口
      // let routeUrl = this.$router.resolve({ path: "/playmusic" });
      // window.open(routeUrl.href, "_blank");
    },
    // 转发
    zhuanfa() {
      this.isZhuanfa = !this.isZhuanfa;
    },
    // 添加
    add() {
      this.isShow = !this.isShow;
      // console.log(this.isShow);
    },
    download1() {
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
    download2() {
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
    // 批量
    checkedAll() {
      this.isChecked = !this.isChecked;
    },
  },
  components: {
    Guide,
    Comment,
    TopList,
  },
};
</script>

<style lang="stylus" scoped>
* {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mod_songlist_toolbar a:hover {
  color: #000 !important;
}

.icon-46 {
  color: #000;
  font-size: 14px;
}

.container {
  width: 990px;
  margin-left: 30px;
}

.zhuanfa {
  position: absolute;
  left: 140px;
  top: 40px;
  width: 168px;
  // padding: 5px 0;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(183, 183, 183, 0.65);
  // border: 1px solid #bfbfbf;
  z-index: 10;
  text-align: center;

  p {
    height: 50px;
    line-height: 50px;
  }

  p:hover {
    background-color: #31c27c;
    color: #fff;
  }
}

.add {
  position: absolute;
  left: 50px;
  top: 40px;
  width: 168px;
  padding: 5px 0;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(183, 183, 183, 0.65);
  border: 1px solid #bfbfbf;
  z-index: 10;
  text-align: center;

  p {
    height: 50px;
    border-bottom: 1px solid #ddd;
    line-height: 50px;
  }

  p:hover {
    background-color: #31c27c;
    color: #fff;
  }
}

.songList_li {
  position: relative;
}

.fonts {
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
  width: 1200px;
  margin-left: 20px;
  padding-top: 60px;
  margin: 0 auto;
  display: flex;
}

.topList_header {
  display: flex;
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

.mod_songlist_toolbar {
  display: flex;
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
  color: #fff !important;
}

.songList_header {
  width: 868px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
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
  position: relative;
  top: -30px;
  margin-left: 30px;
  font-size: 14px;
  line-height: normal;
  display: inline-block;
}

.songList_Time {
  width: 50px;
}
</style>
