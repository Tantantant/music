<template>
  <div class="myMusicContainerBig">
    <div class="myMusicContainer">
      <div class="myMusicTop">
        <div class="imgContainer">
          <img v-lazy="profile.avatarUrl" alt="头像" />
        </div>
        <h1 class="name">
          <span>{{ profile.nickname }}</span>
        </h1>
        <ul>
          <li>
            <a href="javascript:;">
              <strong>{{ profile.follows }}</strong>
              <span>关注</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <strong>{{ profile.followeds }}</strong>
              <span>粉丝</span>
            </a>
          </li>
        </ul>
        <div class="myLike">
          <a href="javascript:;" class="myLikeItem">我喜欢</a>
          <a href="javascript:;">我的已购</a>
          <a href="javascript:;">我创建的歌单</a>
          <a href="javascript:;">关注</a>
          <a href="javascript:;">粉丝</a>
          <a href="javascript:;">我上传的视频</a>
        </div>
      </div>
      <div class="myMusicButtom">
        <div class="myMusicButtomNav">
          <a href="javascript:;" class="song">歌曲{{ MyMusicList.length }}</a>
          <a href="javascript:;">歌单0</a>
          <a href="javascript:;">专辑0</a>
          <a href="javascript:;">视频0</a>
        </div>
        <div class="myMusicButtomNavTwo">
          <a href="javascript:;" class="playAll">
            <i class="iconfont icon-bofang"></i>
            播放全部
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-tianjia"></i>
            添加到
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-46"></i>
            下载
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-piliangbianji"></i>
            批量操作
          </a>
        </div>
        <el-table :data="MyMusicList" stripe style="width: 1200px">
          <el-table-column prop="song.name" label="歌曲" width="600">
          </el-table-column>
          <el-table-column prop="song.ar[0].name" label="歌手" width="240">
          </el-table-column>
          <el-table-column prop="song.al.name" label="专辑" width="240">
          </el-table-column>
          <!-- prop只能找MyMusicList里的数据 -->
          <el-table-column prop="moment" label="时长">
            <template v-slot="{ row }">
              <!-- 插值语法只能拿data里的数据 -->
              {{ moment(row.song.dt).format("mm:ss") }}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="downloadClient">查看更多内容，请下载客户端</div>
      <div class="immediately">立即下载</div>
    </div>
  </div>
</template>

<script>
import { getMyMusic } from "../../api/myMusic";
import moment from "moment";

export default {
  name: "Mymusic",
  data() {
    return {
      MyMusicList: [],
      profile: {},
      // 把moment方法放到data里，让插值语法使用
      moment: moment,
    };
  },
  async mounted() {
    const profile = JSON.parse(localStorage.getItem("profile"));
    this.profile = profile;
    const result = await getMyMusic(profile.userId);
    this.MyMusicList = result.allData.slice(0, 10);
  },
};
</script>

<style lang="stylus" scoped>
.myMusicContainerBig {
  height: 1200px;
}

.myMusicContainer {
  height: 315px;
  padding-top: 65px;
  background: url('./images/bg_profile.jpg') 50% no-repeat;
  background-size: cover;
  text-align: center;
  color: #fff;

  .myMusicTop {
    .imgContainer {
      position: relative;
      width: 102px;
      height: 102px;
      margin: 0 auto;

      img {
        display: block;
        width: 100%;
        height: 100%;
        border: 4px solid #fff;
        border-radius: 99px;
        background: #fff;
      }
    }

    .name {
      font-size: 0;
      text-align: center;
      color: #fff;

      span {
        font-size: 30px;
        font-weight: 400;
        line-height: 64px;
        color: #fff;
      }
    }

    ul {
      height: 40px;
      margin: 4px 15px 26px;
      overflow: hidden;
      font-size: 0;

      li {
        display: inline-block;
        border-right: solid 1px #24313d;
        width: auto;
        text-align: center;
        padding: 0 25px;

        &:hover strong {
          color: #31c27c;
        }

        a {
          color: #fff;
          text-decoration: none;

          strong {
            display: block;
            font-size: 22px;
            line-height: 24px;
            margin-top: -1px;
            font-weight: 400;
          }

          span {
            display: block;
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }

    .myLike {
      width: 600px;
      display: flex;
      height: 80px;
      align-items: center;
      margin-left: 120px;

      a {
        font-size: 16px;
        margin-right: 35px;
        text-decoration: none;
        color: #fff;

        &:hover {
          color: #31c27c !important;
        }
      }

      .myLikeItem {
        color: #31c27c;
      }
    }
  }

  .myMusicButtom {
    background-color: #fff;

    /deep/.el-table {
      margin: 0 auto;
      background-color: #fff;

      /deep/.cell {
        font-weight: 400;
      }
    }

    .myMusicButtomNav {
      margin-bottom: -20px;
      overflow: hidden;
      border-bottom: 0 none;
      height: 56px;
      line-height: 56px;
      width: 1200px;
      text-align: left;
      margin: 0 auto;

      a {
        font-size: 16px;
        margin-right: 55px;
        text-decoration: none;

        &:hover {
          color: #31c27c !important;
        }
      }

      .song {
        color: #31c27c;
      }
    }

    .myMusicButtomNavTwo {
      margin-bottom: 20px;
      font-size: 0;
      padding-top: 30px;
      text-align: left;
      margin: 0 auto;
      width: 1200px;

      a {
        border-radius: 2px;
        font-size: 14px;
        margin-right: 6px;
        padding: 0 23px;
        height: 38px;
        line-height: 38px;
        display: inline-block;
        white-space: nowrap;
        box-sizing: border-box;
        overflow: hidden;
        border: 1px solid #ccc;
        font-weight: 500;
        color: #000;
        text-decoration: none;

        &:hover {
          background-color: #f2f2f2;
          color: #000 !important;
        }
      }

      .playAll {
        border: 1px solid #31c27c;
        background-color: #31c27c;
        color: #fff;

        &:hover {
          background-color: #31c27c;
          color: #fff !important;
        }
      }
    }
  }

  .downloadClient {
    margin-top: 38px;
    margin-bottom: 22px;
    font-size: 18px;
    color: #000;
    text-align: center;
  }

  .immediately {
    display: block;
    margin: 20px auto 0;
    width: 175px;
    height: 41px;
    line-height: 41px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    border-radius: 41px;
    background-color: #31c27c;
    cursor: pointer;
  }
}
</style>
