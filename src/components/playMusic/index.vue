<template>
  <div
    class="palyMusic_Container"
    :style="{
      background: 'url( ' + palySong[0].picUrl + ')' + '50%' + 'no-repeat',
      'background-size': '100' + '%',
    }"
  >
    <div class="mask">
      <h1 style="padding: 20px">
        <img src="//y.gtimg.cn/mediastyle/yqq/img/player_logo.png" alt="" />
      </h1>
      <div class="palyMusic_center">
        <div class="playMusic_music">
          <div class="playMusic_nav">
            <a href=""><i></i>收藏</a>
            <a href=""><i></i>添加到</a>
            <a href=""><i></i>下载</a>
            <a href=""><i></i>删除</a>
            <a href=""><i></i>清空列表</a>
          </div>
          <div class="ullist">
            <ul class="songlsit_nav">
              <li class="song">歌曲</li>
              <li class="songAuthor">歌手</li>
              <li class="songTime">时长</li>
            </ul>
            s
            <ul class="songlsit_nav">
              <li class="input">
                <input type="checkbox" />
              </li>
              <li class="song">{{ palySong[0].name }}</li>
              <li class="songAuthor">{{ palySong[0].nickName }}</li>
              <li class="songTime">04:16</li>
            </ul>
          </div>
        </div>
        <div class="songNameInfo">
          <div class="download">
            <span class="title">QQ音乐,千万高品质曲库尽享</span>
            <div class="load">客户端下载</div>
          </div>
          <div class="image">
            <img :src="palySong[0].picUrl" alt="" />
          </div>
          <div class="lyric">
            <div>歌曲名:</div>
            <div>歌手名:</div>
            <div>专辑名:</div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="palyMusic_footer">
        <aplayer
          class="aplayer"
          autoplay
          :music="{
            title: palySong[0].name,
            artist: palySong[0].nickName,
            src: musicInfo[0].url,
            pic: palySong[0].picUrl,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import { mapState } from "vuex";
export default {
  name: "PlayMusic",
  data() {
    return {
      isChecked: false,
      lyrics: {},
    };
  },
  computed: {
    ...mapState({
      palySong: (state) => state.topList.palySong,
      musicInfo: (state) => state.topList.musicInfo,
      lyric: (state) => state.topList.lyric,
    }),
  },

  methods: {
    Arrays() {
      console.log(this.lyric.lrc.lyric);
      for (let i of this.lyric.lrc.lyric) {
        console.log('i',i)
        this.lyrics.push(i);
      }
    },
    mounted() {
      console.log(this.palySong)
      this.lyrics = this.palySong
      // this.Arrays();
      // console.log(111);
      // console.log(this.lyric);
      console.log('lyric',this.lyrics)
    },
  },
  components: {
    Aplayer,
  },
};
</script>

<style lang="stylus" scoped>
.aplayer {
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  color: #fff;
}

.lyric {
  height: 40px;
  line-height: 40px;

  div {
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
}

.songNameInfo {
  width: 340px;
  height: 560px;

  .image {
    padding-top: 30px;

    img {
      margin-left: 120px;
      width: 200px;
      height: 200px;
    }
  }
}

.mask {
  background: rgba(0, 0, 0, 0.7);
}

.download {
  display: flex;
  width: 320px;
  height: 30px;
  font-size: 14px;
  color: #fff;
  line-height: 30px;

  .load {
    border-radius: 40px;
    width: 120px;
    background-color: #31c27c;
    text-align: center;
    margin-left: 15px;
  }
}

.right .iconfont {
  padding: 0 20px;
}

.progress {
  width: 645px;
  padding-left: 70px;

  .songname {
    height: 23px;
    line-height: 23px;
    font-size: 14px;
    color: #e1e1e1;
  }

  .pro {
    width: 100%;
    height: 2px;
    background-color: #e1e1e1;
    margin-top: 7px;
  }
}

.iconfont {
  font-size: 30px;
  cursor: pointer;
  color: #fff;
}

.icon-bofang2 {
  margin: 0 45px;
}

.palyMusic_Container {
  width: 100%;
  height: 100%;

  .palyMusic_center {
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
  }
}

.playMusic_nav {
  width: 860px;
  height: 38px;
  padding-bottom: 20px;

  a {
    display: inline-block;
    width: 122px;
    height: 38px;
    color: #fff !important;
    border: 1px solid #fff;
    text-align: center;
    line-height: 38px;
    font-size: 14px;
    margin-right: 10px;
  }
}

.ullist {
  position: relative;
}

.songlsit_nav {
  display: flex;
  width: 853px;
  height: 50px;
  margin: 0 20px;
  line-height: 50px;
  font-size: 16px;
  color: #999;
  border-bottom: 1px solid #bdbdbe;

  .input {
    position: absolute;
    left: -20px;
    top: 30px;
    padding-left: 20px;

    input {
      width: 20px;
      height: 100px;
      opacity: 0.5;
      border: 1px solid #fff;
    }
  }

  .song {
    width: 68%;
    padding-left: 30px;
  }

  .songAuthor {
    width: 26%;
  }

  .songTime {
    width: 50px;
  }
}

.palyMusic_footer {
  display: flex;
  width: 1300px;
  height: 104px;
  margin: 0 auto;
}
</style>
