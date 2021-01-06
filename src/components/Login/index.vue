<template>
  <div class="loginContainer">
    <div class="Mask"></div>
    <div class="loginBulletContainer">
      <div class="loginheader">
        <a href="javascript:;" class="qqLogin">QQ登录</a>
        <a href="javascript:;">微信登录</a>
      </div>
      <a href="javascript:;" class="close" @click="$emit('close')">x</a>
      <div class="loginContentContainer">
        <div class="loginLeftContainer">
          <div class="tipsTitle">帐号密码登录</div>
          <div class="tips">推荐使用快速安全登录，防止盗号。</div>
          <form class="form">
            <div class="account">
              <input type="text" placeholder="手机号登录" v-model="phone" />
              <p v-if="isTips">请输入正确的手机号</p>
            </div>
            <div class="password">
              <input type="password" placeholder="密码" v-model="password" />
            </div>
            <div class="submit" @click="clickLogin">
              <a href="javascript:;">授权并登录</a>
            </div>
          </form>
          <div class="loginLeftBottom">
            <a href="javascript:;">忘了密码？|</a>
            <a href="javascript:;"> 注册新帐号 |</a>
            <a href="javascript:;"> 意见反馈</a>
          </div>
        </div>
        <div class="loginRightContainer">
          <div class="loginRight">
            <p>
              <span>QQ音乐 </span>
              将获得以下权限：
            </p>
            <div class="SingleContainer">
              <div class="Single">
                <input type="checkbox" checked />
                <label> 全选 </label>
              </div>
              <div class="Single">
                <input type="checkbox" checked disabled />
                <label> 获得您的昵称、头像、性别 </label>
              </div>
            </div>
            <p class="towTips">
              授权后表明你已同意
              <a href="javascript:;">QQ登录服务协议</a>
            </p>
          </div>
        </div>
      </div>
      <div class="loginfooter">
        <a href="javascript:;">下载客户端 体验更多内容</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin } from "../../api/login";

export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
      isTips: false,
      profile: {},
    };
  },
  methods: {
    //点击登录
    async clickLogin() {
      const { phone, password } = this;
      const reg = /^1(3[0-9]|4[01456879]|5[0-3,5-9]|6[2567]|7[0-8]|8[0-9]|9[0-3,5-9])\d{8}$/;
      if (reg.test(phone)) {
        this.isTips = false;
        const result = await getLogin({ phone, password });
        // console.log(result);
        if (result.code === 200) {
          this.$emit("close", result.profile);
          this.$message.success("登录成功");
          localStorage.setItem("token", result.token);
          localStorage.setItem("profile", JSON.stringify(result.profile));
        }
      } else {
        this.isTips = true;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped>
.Mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.loginContentContainer {
  display: flex;
}

.loginBulletContainer {
  width: 700px;
  position: fixed;
  top: 180.5px;
  margin: 10px;
  left: 369px;
  background-color: #fff;
  border: 1px solid #bfbfbf;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  color: #333;
  z-index: 3;

  .loginheader {
    text-align: center;
    line-height: 55px;
    border-bottom: 1px solid #f2f2f2;

    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      color: #000;

      &:hover {
        color: #31c27c !important;
      }
    }

    .qqLogin {
      color: #31c27c;
      margin-right: 120px;
    }
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: 21px;
    outline: none;
    line-height: 24px;
    text-decoration: none;
    margin-top: 3px;

    &:hover {
      color: #31c27c !important;
    }
  }

  .loginLeftContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 430px;
    height: 330px;
    border-right: 1px dotted #e2e2e2;

    .tipsTitle {
      font-size: 20px;
      color: #333;
      margin-bottom: 16px;
      text-align: center;
      margin-top: 20px;
    }

    .tips {
      font-size: 16px;
      color: #666;
      margin-bottom: 36px;
    }

    .form {
      input {
        width: 258px;
        height: 18px;
        padding: 10px 0 10px 10px;
        line-height: 18px;
        color: #333;
        font-family: Verdana, Tahoma, Arial;
        font-size: 14px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-bottom: 15px;
      }

      .account {
        p {
          color: red;
          position: absolute;
          top: 215px;
          left: 92px;
          font-size: 12px;
        }
      }

      .submit {
        background-color: #86ce2f;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 3px;

        a {
          color: #fff;
          height: 40px;
          line-height: 35px;
          font-size: 17px;
          text-decoration: none;

          &:hover {
            color: #fff !important;
          }
        }
      }
    }

    .loginLeftBottom {
      width: 370px;
      height: 16px;
      text-align: right;
      margin-top: 35px;

      a {
        margin-bottom: 8px;
        font-size: 12px;
        margin-right: 6px;
      }
    }
  }

  .loginRightContainer {
    width: 227px;

    .loginRight {
      margin-left: 27px;
      margin-top: 22px;
      width: 100%;

      p {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        border-top: 1px dotted #e2e2e2;
        border-bottom: 1px dotted #e2e2e2;

        span {
          color: #51b7ec;
        }
      }

      .SingleContainer {
        .Single {
          display: flex;
          align-items: center;
          height: 30px;
          font-size: 12px;
          border-top: 1px dotted #e2e2e2;
          border-bottom: 1px dotted #e2e2e2;

          input {
            margin-right: 5px;
          }
        }
      }

      .towTips {
        border-bottom: none;

        a {
          display: inline-block;
          color: #51b7ec;
          margin-top: 20px;
        }
      }
    }
  }

  .loginfooter {
    padding: 14px 0 24px;
    text-align: center;

    a {
      display: inline-block;
      padding: 0 30px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
      border-radius: 20px;
      background-color: #31c27c;
      background-image: linear-gradient(to right, #24ccaa, #31c27c);
      margin-top: 20px;

      &:hover {
        color: #fff !important;
        background-color: #31c27c;
        text-decoration: none;
      }
    }
  }
}
</style>
