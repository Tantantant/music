<template>
  <div class="headerContainer">
    <div class="headerTop">
      <h1 class="logo">
        <a href="//y.qq.com">
          <img src="//y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1" alt="" />
        </a>
      </h1>
      <ul class="headerTopNav">
        <li>
          <a href="javascript:;" class="SelectbackColor">音乐馆</a>
        </li>
        <li>
          <a href="javascript:;">我的音乐</a>
        </li>
        <li class="client">
          <a href="javascript:;">客户端</a>
          <img
            class="privilege"
            src="http://y.gtimg.cn/mediastyle/yqq/extra/mark_1.png"
            alt=""
          />
          <!-- <div class="dropDownContainer">
            <div class="dropDown">
              <p>
                <i></i>
                HQ高品质 全员开启
              </p>
              <p>
                <i></i>
                独家音效 全面升级
              </p>
              <p>
                <i></i>
                轻盈视觉 动态皮肤
              </p>
              <a href="javascript:;">下载体验</a>
            </div>
          </div> -->
        </li>
        <li>
          <a href="javascript:;" class="platform">开放平台</a>
        </li>
        <li>
          <a href="javascript:;">VIP</a>
        </li>
      </ul>
      <div class="headerTopInput">
        <el-row class="demo-autocomplete">
          <el-col :span="12">
            <el-autocomplete
              class="inline-input"
              placeholder="搜索音乐、MV、歌单、用户"
              :fetch-suggestions="querySearch"
            ></el-autocomplete>
            <button class="search">
              <i class="iconfont icon-search"></i>
            </button>
          </el-col>
        </el-row>
      </div>
      <div class="headerTopTail">
        <a
          href="javascript:;"
          class="Signin"
          @click="login"
          v-if="!profile.nickname"
          >登录</a
        >
        <div class="headPortrait" v-else>
          <img
            :src="profile.avatarUrl"
            alt="头像"
            class="headPor"
            @click="myMusic"
          />
          <img
            src="//y.gtimg.cn/mediastyle/yqq/img/login_qq.png?max_age=2592000"
            alt="图标"
            class="qqicon"
          />
          <div class="headSelect">
            <img :src="profile.avatarUrl" alt="headPor" class="headPorTwo" />
            <span>{{ profile.nickname }}</span>
            <div class="signLogin" @click="signLogin">退出登录</div>
          </div>
        </div>
        <div class="openingVip">
          <a href="javascript:;">开通VIP</a>
          <ul>
            <li>开通绿钻豪华版</li>
            <li>开通付费包</li>
          </ul>
        </div>
        <div class="Recharge">
          <a href="javascript:;">充值</a>
          <ul class="selectList">
            <li>购买乐币</li>
            <li>充值饭票</li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="headerBottom">
      <li class="home">
        <router-link class="item" to="/">首页</router-link>
      </li>
      <li>
        <router-link class="item" to="/singer">歌手</router-link>
      </li>
      <li>
        <router-link class="item" to="/newdisc">新碟</router-link>
      </li>
      <li>
        <a href="javascript:;" class="item">排行榜</a>
      </li>
      <li>
        <a href="javascript:;" class="item">分类歌单</a>
      </li>
      <li>
        <a href="javascript:;" class="item">电台</a>
      </li>
      <li>
        <a href="javascript:;" class="item">MV</a>
      </li>
      <li>
        <a href="javascript:;" class="item">数字专辑</a>
      </li>
      <li>
        <a href="javascript:;" class="item">票务</a>
      </li>
    </ul>
    <Login v-if="isLogin" @close="close" />
  </div>
</template>

<script>
import Login from "../Login";
import { getSignLogin } from "../../api/login";

export default {
  name: "Header",
  data() {
    return {
      isLogin: false,
      restaurants: [
        { value: "我们的歌" },
        { value: "冰雪奇缘2" },
        { value: "张杰" },
        { value: "桥边姑娘" },
        { value: "星辰大海" },
      ],
      profile: {},
    };
  },
  methods: {
    //弹出登录页面
    login() {
      this.isLogin = true;
    },
    //关闭登录页面
    close(profile = {}) {
      this.profile = profile;
      this.isLogin = false;
    },
    //退出登录
    async signLogin() {
      const result = await getSignLogin();
      // console.log(result);
      if (result.code === 200) {
        this.profile = {};
        this.$message.success("退出登录成功");
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        this.$router.push("/newdisc");
      }
    },
    //点击文本框弹出推荐歌曲
    querySearch(queryString, cb) {
      cb(this.restaurants);
    },
    //跳转到myMusic页面
    myMusic() {
      this.$router.push("/mymusic");
    },
  },
  mounted() {
    let token = localStorage.getItem("token");

    if (token) {
      this.profile = JSON.parse(localStorage.getItem("profile"));
    }
  },
  components: {
    Login,
  },
};
</script>

<style lang="stylus" scoped>
.headerContainer {
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .headerTop {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;

    .logo {
      margin-right: 28px;
    }

    .headerTopNav {
      display: flex;

      .client {
        margin-left: -13px;
      }

      li {
        line-height: 90px;
        height: 90px;
        position: relative;

        a {
          display: block;
          padding: 0 20px;
          line-height: 90px;
          height: 90px;
          font-size: 18px;
          text-decoration: none;
          color: #000;

          &.SelectbackColor {
            background-color: #31c27c;
            color: #fff !important;

            &:hover {
              color: #fff !important;
            }
          }

          &:hover {
            color: #31c27c !important;
            text-decoration: none;
          }
        }

        .privilege {
          position: absolute;
          height: 14px;
          top: 22px;
          left: 58px;
        }
      }

      .platform {
        margin-left: -13px;
      }

      .dropDown {
      }
    }

    /deep/.headerTopInput {
      border: 1px solid #c9c9c9;
      padding: 0 33px 0 11px;
      line-height: 36px;
      height: 36px;
      position: relative;
      border-radius: 3px;
      background-color: #fff;
      position: relative;
      margin-right: 20px;

      /deep/.el-row {
        width: 173px;
      }

      /deep/.el-input__inner {
        width: 190px;
        height: 36px;
        border: 0 none;
        font-size: 14px;
        background: 0 0;
        padding: 0px;
      }

      /deep/.search {
        border: 0 none;
        width: 38px;
        height: 35px;
        overflow: visible;
        background: 0 0;
        position: absolute;
        top: 2px;
        left: 175px;
        font-size: 14px;
        color: #000;
        outline: none;

        /deep/&:hover {
          color: #31c27c;
        }
      }
    }

    .headerTopTail {
      display: flex;
      height: 90px;
      line-height: 90px;
      align-items: center;
      position: relative;

      .headPortrait {
        &:hover .headSelect {
          display: block;
        }

        .headPor {
          width: 38px;
          height: 38px;
          border-radius: 90px;
          vertical-align: -14px;
          cursor: pointer;
        }

        .qqicon {
          position: absolute;
          width: 14px;
          height: 14px;
          bottom: 24px;
          right: -2px;
        }

        .headSelect {
          position: absolute;
          top: 91px;
          left: -18px;
          width: 260px;
          background-color: #fff;
          border: 1px solid #f2f2f2;
          height: 150px;
          z-index: 5;
          display: none;

          .headPorTwo {
            width: 66px;
            height: 66px;
            border-radius: 90px;
            position: absolute;
            top: 18px;
            left: 18px;
          }

          .signLogin {
            width: 100%;
            height: 50px;
            font-size: 16px;
            position: absolute;
            top: 91px;
            left: -78px;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
          }

          span {
            position: absolute;
            top: 0;
            left: 95px;
            font-size: 14px;
          }
        }
      }

      .Signin {
        font-size: 16px;
        width: 38px;
        margin-right: 10px;
        text-align: center;
        color: #000;
        text-decoration: none;

        &:hover {
          color: #31c27c !important;
        }
      }

      .openingVip {
        height: 120px;
        font-size: 13px;
        width: 122px;
        position: absolute;
        top: 25px;
        right: -126px;

        &:hover ul {
          display: block;
        }

        a {
          display: block;
          background-color: #31c27c;
          color: #fff;
          border-color: #31c27c;
          line-height: 38px;
          padding: 0 15px 0 10px;
          text-align: center;
          white-space: nowrap;
          border: 1px solid #c9c9c9;
          border-radius: 3px;

          &:hover {
            color: #fff !important;
            text-decoration: none;
          }
        }

        ul {
          height: 80px;
          display: none;

          li {
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            white-space: nowrap;
            border: 1px solid #c9c9c9;
            background-color: #fff;

            &:hover {
              background-color: #31c27c;
              color: #fff;
            }
          }
        }
      }

      .Recharge {
        width: 83px;
        margin-left: 10px;
        height: 38px;
        font-size: 13px;
        position: absolute;
        top: 26px;
        right: -220px;

        &:hover ul {
          display: block;
        }

        a {
          display: block;
          line-height: 36px;
          padding: 0 15px 0 10px;
          text-align: center;
          white-space: nowrap;
          border: 1px solid #c9c9c9;
          border-radius: 3px;
          text-decoration: none;
          color: #666;

          &:hover {
            background-color: #31c27c;
            color: #fff !important;
          }
        }

        ul {
          height: 80px;
          display: none;

          li {
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            white-space: nowrap;
            border: 1px solid #c9c9c9;
            background-color: #fff;

            &:hover {
              background-color: #31c27c;
              color: #fff;
            }
          }
        }
      }
    }
  }

  .headerBottom {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    height: 51px;
    line-height: 51px;
    text-align: center;

    li {
      font-size: 15px;
      color: #c1c1c1;
      margin-right: 47px;

      .item {
        color: #000;
        text-decoration: none;

        &:hover {
          color: #31c27c !important;
        }
      }
    }

    .home {
      padding-left: 228px;
    }
  }
}
</style>
