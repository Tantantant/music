<template>
  <div class="songInfo_Container">
    <div class="songheader">
      <div class="mod_data">
        <span class="data_cover">
          <img class="image" :src="musicInfo[0].album.blurPicUrl" alt="" />
        </span>
      </div>
      <div class="header_right">
        <div class="data__cont">
          <div class="songName">{{ musicInfo[0].album.name }}</div>
          <div class="nickNme">{{ musicInfo[0].artists[0].name }}</div>
          <ul class="attr">
            <li>流派 : POP流行</li>
            <li>语种 : 国语</li>
            <li>发行时间 : 2020-11-19</li>
            <li>唱片公司 : {{ musicInfo[0].album.company }}</li>
            <li>类型 : {{ musicInfo[0].album.subType }}</li>
          </ul>
        </div>

        <div class="mod_songlist_toolbar">
          <a class="btn_green" href="###"
            ><i class="iconfont icon-bofang"></i>播放全部</a
          >
          <a href="###"><i class="iconfont icon-tianjia"></i>收藏</a>
          <a><i class="iconfont icon-piliangbianji"></i>评论(6666)</a>
          <a href="#1F"><i class="iconfont icon-pinglun"></i>更多</a>
        </div>
      </div>
    </div>
    <ul class="songList_header">
      <li class="songName">歌曲</li>
      <li class="songAuthor">歌手</li>
      <li class="songTime">时长</li>
    </ul>

    <ul class="songList_body">
      <li class="songList_li">
        <div class="songList_top"></div>

        <div class="songList_songInfo">金奇</div>
        <div class="songList_Author">奇书</div>
        <div class=" ">03:20</div>
      </li>
    </ul>
    <Comment />
  </div>
</template>

<script>
// songInfoList
import { mapState } from "vuex";
import Comment from "../comment";
export default {
  name: "songInfo",
  data() {
    return {
      musicInfo: {},
    };
  },
  computed: {
    ...mapState({
      songInfoList: (state) => state.topList.songInfoList,
    }),
  },
  methods: {},
  mounted() {
    // this.$router.query
    const { id } = this.$route.query;
    const music = this.songInfoList;

    // this.$nextTick(function () {
    // music.forEach((item)=>{
    //   console.log(item.id)
    // })
    const res = music.filter((item) => {
      return item.id == id;
    });

    this.musicInfo = res;
    // });
    // console.log(this.musicInfo)
  },
  components: {
    Comment,
  },
};
</script>

<style lang="stylus" scoped>
.songList_body {
  width: 868px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  // margin-left: 159px;
  height: 50px;
  line-height: 50px;
  color: #000;
  font-size: 14px;

  .songList_songInfo {
    width: 520px;
  }

  .songList_Author {
    width: 223px;
  }
}

.songList_body .songList_li {
  display: flex;
}

.songInfo_Container {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}

.songheader {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 35px;
}

.mod_data {
  padding-right: 80px;
}

.mod_data .image {
  width: 250px;
  height: 250px;
}

.data__cont {
  width: 100%;

  .songName {
    font-size: 31px;
    height: 50px;
  }

  .nickNme {
    font-size: 16px;
    height: 26px;
  }

  .attr {
    width: 500px;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 200px;
      line-height: 35px;
      font-size: 14px;
    }
  }
}

.mod_songlist_toolbar {
  margin: 30px 0;
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
  color: #fff;
}

.songList_header {
  width: 868px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  // margin-left: 159px;
  height: 50px;
  line-height: 50px;
  // background-color: rgba(0, 0, 0, 0.01);
  color: #999;
  font-size: 14px;
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
</style>
