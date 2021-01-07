<template>
  <div class="main">
    <!-- 上部介绍 -->
    <div class="mod-data">
      <!-- 左边图片 -->
      <span class="data-cover">
        <img v-lazy="newDisc.picUrl" :alt="newDisc.albumName" />
        <i class="data-cover-mask"></i>
      </span>
      <!-- 右边详细 -->
      <div class="data-cont">
        <div class="data-name">
          <h1 class="data-name-text">{{ newDisc.albumName }}</h1>
        </div>
        <div class="data-songer">
          <!-- 放置一个icon图标 代表账户 -->
          <i class="icon-singer"></i>
          <a href="" class="data-songer-name">{{ newDisc.artistName }}</a>
        </div>
        <ul class="data-info">
          <li class="info-item">流派：POP流行</li>
          <li class="info-item info-item-even">语种：国语</li>
          <li class="info-item">发行时间：201-232-3</li>
          <li class="info-item">唱片公司：环球时代</li>
        </ul>
        <div class="data-tips">已售 {{ newDisc.saleNum }}</div>
        <div class="data-actions">
          <el-button type="text" @click="isPay = true" class="mod_btn_green"
            ><strong class="data__price"> ￥{{ newDisc.price }} </strong>
            点击购买</el-button
          >
          <el-button class="mod_btn" icon="el-icon-video-play"
            >播放全部</el-button
          >
          <el-button class="mod_btn" icon="el-icon-shopping-cart-full"
            >收藏</el-button
          >
          <el-button class="mod_btn" icon="el-icon-chat-dot-square"
            >评论</el-button
          >
          <el-button class="mod_btn" icon="el-icon-chat-dot-round"
            >更多</el-button
          >
        </div>
      </div>
    </div>
    <div class="mod-other">
      <!-- 下部曲目和评论 -->
      <div class="detail_layout">
        <!-- 左边：上面曲目，下面评论 -->
        <div class="mode-teb">
          <el-tabs>
            <el-tab-pane label="曲目列表" name="曲目列表">
              <div class="mode-songlist">
                <el-table stripe style="width: 100%" :data="tableData">
                  <el-table-column prop="name" label="歌曲" width="180">
                  </el-table-column>
                  <el-table-column prop="address" label="歌手">
                  </el-table-column>
                  <el-table-column prop="time" label="时长"> </el-table-column>
                </el-table>
                <ul class="songlist">
                  <li></li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="粉丝榜" name="second">234</el-tab-pane>
          </el-tabs>
        </div>

        <!-- 评论 标题 -->
        <div class="part__hd">
          <h2 class="part__tit">
            评论<span class="c_tx_thin part__tit_desc js_all_comment_num"
              >共2873条评论</span
            >
          </h2>
        </div>
        <!-- 评论 -->
        <div class="comment">
          <Comment />
        </div>
      </div>
      <!-- 右边： 专辑简介-->
      <div class="mode-about-all">
        <div class="mod-about">
          <h3><span class="about-title">简介</span></h3>
          <div class="about-text">
            <p>{{ newDisc.descr }}</p>
          </div>
        </div>
        <div class="mod-more">
          <h3><span class="more-title">歌手的其他专辑</span></h3>
          <div class="mod_playlist">
            <ul class="playlist__list">
              <li
                class="playlist__item"
                v-for="item in songList"
                :key="item.id"
              >
                <div>
                  <img class="playlist__img" v-lazy="item.al.picUrl" alt="" />
                  <div>
                    <span class="playlist__text">{{ item.al.name }}</span>
                    <span class="playlist__other">2010-11-19</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isPay" class="pay">
      <div class="pay-products">
        <h2 class="products-title">购买数字专辑</h2>
        <div class="pro">
          <span class="pro-QQ-name">QQ昵称 :</span>
          <ul class="pro-list">
            <li class="pro-list-item list-one">
              <img
                class="pro-list-item-img"
                src="../../img/pro-list.jpg"
                alt=""
              />
            </li>
            <li class="pro-list-item list-two">
              <span class="item-title">Teh 《虚实X镜》</span>
              <span class="item-price">单价：18元</span>
              <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
              <div class="price-input">
                <el-input-number label="描述文字"></el-input-number>
                <span><em class="pro-price">18</em> 元 </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="pay-area">
          <div class="pay-title">支付方式：</div>
          <ul class="pay-with">
            <li><el-button>Q币支付</el-button></li>
            <li><el-button>Q币支付</el-button></li>
            <li><el-button>Q币支付</el-button></li>
            <li><el-button>Q币支付</el-button></li>
            <li><el-button>Q币支付</el-button></li>
          </ul>
          <div class="checked">
            <el-button @click="isPay = false">确认支付</el-button>
            <el-button @click="isPay = false">点击取消</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reqGetRankingDetail } from "../../../../api/digital";

import Comment from "./Comment";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Comment,
  },
  data() {
    return {
      activeName: "曲目列表",
      // productDetail: null,
      isPay: false, //登陆组件显示切换
      songerOther: {},
      tableData: [
        {
          time: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          time: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          time: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      songList: (state) => state.productsDetail.songerList,
      songListTop: (state) => state.productsDetail.songerListTop,
      newDisc: (state) => state.productsDetail.newDisc,
    }),
  },
  methods: {
    ...mapActions(["getSongerList", "getSongerListTop", "getProductDetail"]),
    open() {
      //弹出购买窗口
      this.$alert("<strong>这是 <i>HTML</i> 片段</strong>", "HTML 片段", {
        dangerouslyUseHTMLString: true,
      });
    },
  },
  async mounted() {
    this.musicId = this.$route.query.id;
    await this.getProductDetail(this.musicId);
    let songerId = this.newDisc.artistId;
    await this.getSongerList(songerId);
    await this.getSongerListTop(songerId);
  },
};
</script>

<style lang="stylus" scoped>
.playlist__img {
  width: 80%;
  height: 80%;
}

.detail_layout {
  width: 822px;
}

.checked {
  padding-top: 50px;
}

.pay-area {
  padding: 20px 70px 40px;
  background-color: #fff;

  .pay-with {
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
}

.pay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;

  .pay-products {
    width: 690px;
    height: 451px;
    // background: pink;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .products-title {
      text-align: center;
      line-height: 39px;
      font-size: 16px;
      overflow: hidden;
      padding-left: 10px;
      font-weight: normal;
      background-color: #ddd;
    }

    .pro-QQ-name {
      display: block;
      margin-bottom: 20px;
    }

    .pro-list {
      display: flex;

      .list-two {
        flex-grow: 0.8;
        // background: green;
        display: flex;
        justify-content: space-between;
      }

      .pro-list-item {
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .pro-list-item-img {
          width: 90px;
          height: 90px;
          margin-right: 20px;
        }

        .item-title {
          font-size: 16px;
          line-height: 1;
          margin-bottom: 10px;
        }

        .item-price {
          color: #969696;
          line-height: 1;
          margin-bottom: 10px;
        }

        .price-input {
          display: flex;
          justify-content: space-between;
          line-height: 38px;
        }

        .pro-price {
          font-size: 38px;
          font-weight: 200;
          color: #313131;
          // margin-left: 100px;
        }
      }
    }
  }

  .pro {
    padding: 25px 60px 25px 70px;
    background-color: #f9f9f9;
    border-bottom: 1px solid #e5e5e5;
  }
}

.mod-other {
  font-size: 14px;
  display: flex;
  justify-content: space-between;

  .mode-about-all {
    width: 290px;
    padding-bottom: 20px;
    margin-left: 30px;

    .mod-about {
      line-height: 22px;
      margin-bottom: 25px;
      margin-top: -8px;

      // background: pink
      .about-title {
        font-size: 20px;
        font-weight: 400;
        line-height: 46px;
      }

      .about-text {
        height: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }

    .mod-more {
      .more-title {
        font-size: 20px;
        font-weight: 400;
        line-height: 46px;
      }

      .mod_playlist {
        width: 100%;

        .playlist__list {
          width: 100%;
          display: flex;
          justify-content: btween;
          flex-wrap: wrap;

          .playlist__item {
            width: 33%;
            font-size: 14px;
            margin-bottom: 15px;
          }

          .playlist__text {
            float: left;
            max-width: 100%;
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 22px;
            max-height: 44px;
          }

          .playlist__other {
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 22px;
          }
        }
      }
    }
  }
}

.mode-teb {
  font-size: 16px;
  color: red;
  position: relative;
  zoom: 1;
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 30px;
}

.main {
  max-width: 1200px;
  margin: 0 auto;

  .mod-data {
    height: 250px;
    margin-top: 40px;
    margin-bottom: 35px;
    display: flex;

    .data-cover {
      width: 250px;
      height: 250px;
      position: relative;

      .data-cover-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 300px;
        height: 266px;
        background: url('../../img/album_cover.png') 0 0 no-repeat;
        pointer-events: none;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .data-cont {
      padding-left: 90px;
      padding-top: 13px;

      .data-name {
        overflow: hidden;
        height: 50px;
        line-height: 50px;

        .data-name-text {
          float: left;
          font-size: 31px;
          line-height: 50px;
          font-weight: 400;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 70%;
          margin-right: 10px;
        }
      }

      .data-songer {
        height: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 90%;

        .icon-singer {
          float: left;
          width: 16px;
          height: 16px;
          margin: 3px 7px 0 0;
          background: url('../../img/icon_sprite.png') -20px -240px;
        }

        .data-songer-name {
          font-size: 16px;
          color: #333;
          cursor: pointer;
        }
      }

      .data-info {
        width: 550px;
        overflow: hidden;
        padding-top: 8px;

        .info-item {
          float: left;
          line-height: 27px;
          width: 200px;
          margin-right: 30px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
        }

        .info-item-even {
          width: 300px;
          margin-right: 0;
        }
      }

      .data-tips {
        color: #999;
        line-height: 27px;
      }

      .data-actions {
        font-size: 0;
        padding-top: 15px;
      }
    }
  }
}

.mod_btn, .mod_btn_green {
  font-size: 14px;
  height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  min-width: 122px;
  text-align: center;
  padding: 0 10px;
  font-family: \5 FAE \8 F6F \9 6C 5 \9 ED1;
}

.mod_btn_green {
  border: 1px solid #31c27c;
  background: #31c27c;
  color: #fff;

  .data__price {
    font-size: 24px;
    margin-right: 5px;
    vertical-align: middle;
    top: 1px;
  }

  &:hover {
    background-color: #2caf6f;
    border-color: #2caf6f;
    color: #fff;
  }
}

.mod_btn {
  border: 1px solid #c9c9c9;
  color: #000;

  &:hover {
    background-color: #ededed;
    color: #333;
  }
}
</style>