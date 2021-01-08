<template>
  <div class="newdiscContainer">
    <div class="navContainer">
      <div
        class="nav"
        v-for="nav in navList"
        :key="nav.id"
        @click="switchNav(nav.id)"
      >
        <a href="javascript:;" :class="{ navactive: navId === nav.id }">{{
          nav.name
        }}</a>
      </div>
    </div>
    <div class="contentContainer">
      <div class="content">
        <div
          class="contentItem"
          v-for="newDisc in newDiscList"
          :key="newDisc.id"
        >
          <div class="imgContainer">
            <img :src="newDisc.imgurl" alt="歌曲图片" />
            <i></i>
          </div>
          <a href="javascript:;" class="songname">{{ newDisc.dissname }}</a>
          <a href="javascript:;" class="songauthor">{{
            newDisc.creator.name
          }}</a>
          <span> {{ newDisc.createtime }} </span>
        </div>
      </div>

      <el-pagination
        layout="prev, pager, next"
        :total="100"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-size="newDiscList.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getNewdiscNav, getNewdiscInland } from "../../api/newdisc";

export default {
  name: "Newdisc",
  data() {
    return {
      newDiscList: [],
      navList: [],
      total: 0,
      navId: "",
      page: 1,
      limit: 20,
      categoryId: 1000000,
    };
  },
  methods: {
    switchNav(id) {
      // console.log(id);
      this.navId = id;
    },

    async handleCurrentChange(page) {
      await this.getNewdiscNavData(page, this.limit, this.categoryId);
      this.page = page;
    },

    async getNewdiscNavData(page, limit, categoryId) {
      const DiscInland = await getNewdiscInland({ page, limit, categoryId });
      // console.log(DiscInland);
      // this.total = DiscInland.total;
      // let newDiscInland;
      // if (page === 1) {
      //   newDiscInland = DiscInland.list.slice(0, 20);
      // } else if (page === 2) {
      //   newDiscInland = DiscInland.list.slice(20, 40);
      // } else if (page === 3) {
      //   newDiscInland = DiscInland.list.slice(40, 60);
      // } else if (page === 4) {
      //   newDiscInland = DiscInland.list.slice(60, 80);
      // } else if (page === 5) {
      //   newDiscInland = DiscInland.list.slice(80, 100);
      // }

      this.newDiscList = DiscInland.data.list;
    },
  },

  async mounted() {
    const { page, limit, categoryId } = this;
    let DiscNav = await getNewdiscNav();
    await this.getNewdiscNavData({ categoryId, page, limit });
    this.navList = DiscNav.new_album_tag.data.area;
    this.navId = DiscNav.new_album_tag.data.area[0].id;
  },
};
</script>

<style lang="stylus" scoped>
.newdiscContainer {
  width: 1200px;
  margin: 0 auto;

  .navContainer {
    display: flex;
    margin-top: 52px;
    padding-left: 65px;

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

        img {
          width: 224px;
          height: 224px;
          border-radius: 5px;
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

      &:hover {
        color: #fff;
        background-color: #31c27c;
      }
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
