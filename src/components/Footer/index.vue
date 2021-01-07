<template>
  <div class="footer">
    <div class="footer-fater">
      <div class="footer-info">
        <div class="footer-download">
          <h3 class="footer-tit">下载QQ音乐客户端</h3>
          <ul class="footer-list">
            <li class="list-item">
              <i class="iconfont icon-cry"> </i>
              <span class="pc">PC版</span>
            </li>
            <li class="list-item">
              <i class="iconfont icon-select-bold"> </i>
              <span class="pc">Mac版</span>
            </li>
            <li class="list-item">
              <i class="iconfont icon-home"> </i>
              <span class="pc">Android版</span>
            </li>
            <li class="list-item">
              <i class="iconfont icon-user"> </i>
              <span class="pc">IPhone版</span>
            </li>
          </ul>
        </div>
        <div class="footer-product">
          <h3 class="footer-tit">特色产品</h3>
          <ul class="footer-list">
            <li class="list-item">
              <i class="iconfont icon-user-filling"> </i>
              <span class="pc">全民k歌</span>
            </li>
            <li class="list-item">
              <i class="iconfont icon-success-filling"> </i>
              <span class="pc">Super</span>
            </li>
            <li class="list-item">
              <i class="iconfont icon-cry-filling"> </i>
              <span class="pc">QPlay</span>
            </li>
            <li class="list-item">
              <i class="iconfont icon-home-filling"> </i>
              <span class="pc">Fan直播伴侣</span>
            </li>
            <li class="list-item first">
              <span class="pc">车载互联</span>
            </li>
            <li class="list-item two">
              <span class="pc">QQ演出</span>
            </li>
          </ul>
        </div>
        <div class="footer-grounp">
          <h3 class="footer-tit">TME集团官网</h3>
          <ul class="footer-list">
            <li class="list-item two">
              <span class="pc">腾讯音乐</span>
            </li>
          </ul>
        </div>
        <div class="footer-link">
          <h3 class="footer-tit">合作链接</h3>
          <ul class="footer-list">
            <li class="list-item">
              <span class="pc">PC版</span>
            </li>
            <li class="list-item">
              <span class="pc">Mac版</span>
            </li>
            <li class="list-item">
              <span class="pc">Android版</span>
            </li>
            <li class="list-item">
              <span class="pc">IPhone版</span>
            </li>
          </ul>
        </div>
        <div class="footer-gun">
          <h3 class="footer-tit">TME集团官网</h3>
          <ul class="footer-list">
            <li class="list-item two">
              <span class="pc">腾讯音乐</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-botton">
        <p class="lists">
          <a href="###">关于腾讯</a>
          <a href="###">About Tencent</a>
          <a href="###">服务条款</a>
          <a href="###">用户服务协议</a>
          <a href="###">隐私政策</a>
          <a href="###">权利声明</a>
          <a href="###">广告服务</a>
          <a href="###">腾讯招聘</a>
          <a href="###">客服中心</a>
          <a href="###">网站导航</a>
        </p>
        <p class="center">
          <a href="###">Copyright © 1998 -2021 Tencent. All Rights Reserved.</a>
        </p>
        <p class="last">
          <a href="###"> 腾讯公司 版权所有 腾讯网络文化经营许可证</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
<style lang="stylus">
.footer
  width 100%
  height 663px
  background-color #333
  color #999
  .footer-fater
    white-space nowrap
    max-width 1200px
    height 100%
    margin 0 auto
    .footer-info
      width 100%
      height 511px
      // background-color pink
      position relative
      padding-bottom 45px
      .footer-download
        position absolute
        top 0
        left 10px
        width 357px
        height 213px
        .footer-tit
          font-size 15px
          margin 0
          width 100%
          height 22px
          padding 80px 0 30px
        .footer-list
          margin 0
          padding 0
          display flex
          list-style-type none
          .list-item
            width 48px
            height 48px
            line-height 48px
            margin 0 20px 12px
            white-space nowrap
            &:hover
              color yellowgreen
            .iconfont
              position relative
              font-size 40px
              text-align center
            .pc
              position relative
              top 30px
              left -38px
              font-size 12px
      .footer-product
        position absolute
        top 0
        left 450px
        width 360px
        height 270px
        .footer-tit
          font-size 15px
          margin 0
          width 100%
          height 22px
          padding 80px 0 30px
        .footer-list
          margin 0
          padding 0
          display flex
          list-style-type none
          .list-item
            width 48px
            height 48px
            line-height 48px
            margin 0 20px 12px
            white-space nowrap
            &:hover
              color yellowgreen
            .iconfont
              position relative
              font-size 40px
              text-align center
            .pc
              position relative
              top 30px
              left -38px
              font-size 12px
      .footer-grounp
        position absolute
        top 300px
        left 476px
        width 304px
        .footer-tit
          font-size 15px
          font-weight 400
          padding 80px 0 30px
        .footer-list
          list-style none
          position relative
          .list-item
            position absolute
            left -25px
            top 5px
            // float left
            min-width 100px
            margin 0 5px 12px 0
            text-indent 25px
      .footer-link
        float right
        width 300px
        padding-bottom 57px
        .footer-tit
          font-size 15px
          font-weight 400
          padding 80px 0 30px
          .footer-list
            margin 0
            padding 0
            display flex
            list-style-type none
            .list-item
              width 48px
              height 48px
              line-height 48px
              margin 0 20px 12px
              white-space nowrap
              &:hover
                color yellowgreen
      .footer-gun
        position absolute
        top 300px
        left 10px
        width 320px
        .footer-tit
          font-size 15px
          font-weight 400
          padding 80px 0 30px
          .footer-list
            list-style-type none
            position relative
            .list-item
              position absolute
              left -25px
              top 5px
              // float left
              min-width 100px
              margin 0 5px 12px 0
              text-indent 25px
            .first
              position absolute
              bottom 20px
              left 40px
            .two
              position absolute
              bottom 20px
              left 130px
      .first
        position absolute
        bottom 20px
        left 40px
      .two
        position absolute
        bottom 20px
        left 130px
    .footer-botton
      width 100%
      height 132px
      .lists
        margin-top 0
        padding-top 10px
        text-align center
        a
          margin 0 10px
          text-decoration none
          font-size 14px
          color #999
          &:hover
            color green
      .center
        text-align center
        a
          margin 0 10px
          text-decoration none
          font-size 14px
          color #999
          &:hover
            color green
      .last
        text-align center
        a
          margin 0 10px
          text-decoration none
          font-size 14px
          color #999
          &:hover
            color green
</style>
