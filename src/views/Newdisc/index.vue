<template>
  <div class="newdiscContainerBig">
    <div class="newdiscContainer">
      <div class="navContainer">
        <div class="nav" @click="switchNav">
          <a
            href="javascript:;"
            data-area="ALL"
            :class="{ navactive: area === 'ALL' }"
            >全部</a
          >
          <a
            href="javascript:;"
            data-area="ZH"
            :class="{ navactive: area === 'ZH' }"
            >华语</a
          >
          <a
            href="javascript:;"
            data-area="EA"
            :class="{ navactive: area === 'EA' }"
            >欧美</a
          >
          <a
            href="javascript:;"
            data-area="KR"
            :class="{ navactive: area === 'KR' }"
            >韩国</a
          >
          <a
            href="javascript:;"
            data-area="JP"
            :class="{ navactive: area === 'JP' }"
            >日本</a
          >
        </div>
      </div>
      <div class="contentContainer">
        <div class="content">
          <div
            class="contentItem"
            v-for="newDisc in newDiscList"
            :key="newDisc.id"
            @click="JumpSongInfo(newDisc.id)"
          >
            <div class="imgContainer">
              <img :src="newDisc.picUrl" alt="歌曲图片" />
              <i class="playIcon"></i>
            </div>
            <a href="javascript:;" class="songname">{{ newDisc.name }}</a>
            <a href="javascript:;" class="songauthor">{{
              newDisc.artist.name
            }}</a>
            <span> {{ newDisc.type }} </span>
          </div>
        </div>

        <el-pagination
          layout="prev, pager, next"
          :total="100"
          @current-change="handleCurrentChange"
          :current-page="offset"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewdiscInland } from "../../api/newdisc";

export default {
  name: "Newdisc",
  data() {
    return {
      newDiscList: [],
      area: "ALL",
      offset: 1,
      limit: 20,
    };
  },
  methods: {
    //点击导航栏切换，请求数据
    async switchNav(e) {
      const area = e.target.getAttribute("data-area");
      this.area = area;
      await this.getNewdiscNavData(area, this.limit, this.offset);
    },
    //点击页数，请求数据
    async handleCurrentChange(offset) {
      await this.getNewdiscNavData(this.area, this.limit, offset);
      this.offset = offset;
    },
    //发送请求的函数
    async getNewdiscNavData(area, limit, offset) {
      const DiscInland = await getNewdiscInland({ area, limit, offset });

      this.newDiscList = DiscInland.albums;
    },
    //跳转到SongInfo
    JumpSongInfo(id) {
      this.$router.push("/songinfo");

      this.$store.commit("NEWDISC_SONGINFO", {
        newDiscList: this.newDiscList,
        id,
      });
    },
  },
  //一上来就发送请求
  async mounted() {
    const { area, limit, offset } = this;
    await this.getNewdiscNavData(area, limit, offset);
  },
};
</script>

<style lang="stylus" scoped>
.newdiscContainerBig {
  height: 100%;
  background-color: #f2f2f2;
  padding-bottom: 1px;
}

.newdiscContainer {
  max-width: 1200px;
  margin: 0 auto;

  .navContainer {
    display: flex;
    padding-top: 52px;
    padding-left: 65px;
    background-color: #f2f2f2;

    .nav {
      height: 41px;

      a {
        font-size: 14px;
        color: #000;
        margin: 0 24px 15px 0;
        text-decoration: none;
        padding: 5px 8px;

        &:hover {
          color: #31c27c !important;
        }

        &.navactive {
          background-color: #31c27c;
          color: #fff;

          &:hover {
            color: #fff !important;
          }
        }
      }
    }
  }

  .contentContainer {
    margin-bottom: 30px;

    .content {
      display: flex;
      flex-wrap: wrap;
      width: 1200px;
    }

    .contentItem {
      width: 20%;
      display: flex;
      flex-direction: column;
      padding-bottom: 44px;

      .imgContainer {
        margin-bottom: 15px;
        margin-right: 20px;
        position: relative;
        overflow: hidden;

        &:hover {
          cursor: pointer;
        }

        &:hover .playIcon {
          opacity: 1;
          -webkit-transition: 0.6s cubic-bezier(0, 1, 0.6, 1);
          transition: transform 0.6s linear;
          transform: scale(1.3);
        }

        &:hover img {
          -webkit-transition: 0.6s linear;
          transition: 0.6s linear;
          transform: scale(1.1);
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          -webkit-transition: 0.6s linear;
          transition: 0.6s linear;

          &:hover {
            transform: scale(1.1);
          }
        }

        .playIcon {
          opacity: 0;
          width: 49px;
          height: 49px;
          background-image: url('images/cover_play@2x.png');
          background-size: 100% 100%;
          position: absolute;
          top: 50%;
          margin-top: -25px;
          left: 50%;
          margin-left: -25px;
        }
      }

      a {
        font-size: 14px;
        text-decoration: none;
        margin-bottom: 5px;

        &:hover {
          color: #31c27c !important;
        }
      }

      .songname {
        color: #000;
        font-weight: 400;
      }

      .songauthor {
        color: #999;
        height: 22px;
      }

      span {
        color: #999;
        height: 22px;
        font-size: 14px;
      }
    }
  }

  .el-pagination {
    margin-bottom: 60px;
    text-align: center;

    >>>.el-icon {
      font-size: 16px;
      font-weight: 400;
      line-height: 50px;
      height: 50px;
      width: 50px;
      color: #a2a2a2;
      background-color: #f2f2f2;

      &:hover {
        color: #fff;
        background-color: #31c27c;
      }
    }

    >>>.btn-prev {
      background-color: #f2f2f2;
    }

    >>>button {
      font-size: 16px;
      font-weight: 400;
      line-height: 50px;
      height: 50px;
      width: 50px;
      color: #a2a2a2;
      padding-left: 0px;

      &:hover {
        color: #fff;
        background-color: #31c27c;
      }
    }

    >>>.el-pager {
      .number {
        font-size: 16px;
        font-weight: 400;
        line-height: 50px;
        height: 50px;
        width: 50px;
        color: #a2a2a2;
        background-color: #f2f2f2;

        &:hover {
          color: #fff;
          background-color: #31c27c;
        }

        &.active {
          color: #fff;
          background-color: #31c27c;
        }
      }
    }
  }
}
</style>
