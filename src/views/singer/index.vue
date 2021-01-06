<template>
  <div class="header">
    <div class="singer">
      <div class="singer-inner">
        <h2 class="singer-titel">你关注的歌手将展示在这里</h2>
        <div class="singer-desc">登录查看你关注的歌手</div>
        <button class="sing">立即登录</button>
      </div>
    </div>
    <div class="main">
      <div class="singer-tag">
        <div class="singer-tag-list" v-for="item in tags" :key="item.id">
          <a
            href="###"
            class="tag-list-item singer_tag__item--all tag-list-item--select"
            v-for="list in tags.genre"
            :key="list.id"
            >{{ list.name }}</a
          >
          <!-- <a href="###" class="tag-list-item">555</a> -->
        </div>
      </div>
    </div>
    <div id="singerList">
      <div class="singerList">
        <ul class="singer-list">
          <li
            class="singer-list-item"
            v-for="list in songerList"
            :key="list.singer_id"
          >
            <div class="singer-list-item-box">
              <router-link
                to="/singerlist"
              >
                <img
                  class="singer_list__pic"
                  :src="list.singer_avatar"
                  alt=""
                />
              </router-link>
              <h3 class="singer-list-title">
                <router-link
                  to="/singerlist"
                  >{{ list.singer_name }}</router-link
                >
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <ul class="singer-list-txt">
        <li
          class="singer-list-txt-item"
          v-for="item in songerLists"
          :key="item.singer_id"
        >
          <a href="###" class="item-a">{{ item.singer_name }}</a>
        </li>
      </ul>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      class="nav"
    >
    </el-pagination>
    <!-- <div class="nav">
      <strong class="current">1</strong>
      <a href="###" class="page_index" data-index="2">2</a>
      <a href="###" class="next-index" title="下一页" data-index="2">
        <span>></span>
      </a>
    </div> -->
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
import { getSongerList } from '../../api/songerList'

export default {
  name: 'singer',
  data() {
    return {
      songerList: [], //这个是歌手页面的数据
      songerLists: [], //这个是歌手页面的名称
      tags: {},
    }
  },
  async mounted() {
    const res = await getSongerList()
    console.log(res)
    this.songerList = res.list.slice(0, 10)
    this.songerLists = res.list.slice(11, 67)
    this.tags = res.tags
  },
}
</script>
<style lang="stylus">
body
  margin 0
  padding 0
  background-color #fafafa
  a:hover
    color yellowgreen
.header
  width 100%
  .singer
    width 100%
    height 376px
    background url('../../assets/images/bg_singer.jpg') no-repeat
    .singer-inner
      margin 0 auto
      padding 10px 0 0
      max-width 1200px
      text-align center
      .singer-titel
        font-size 4em
        color #fff
        font-family '宋体'
        padding 60px 0 0
      .singer-desc
        font-size 1.5em
        color #fff
        font-family '宋体'
      .sing
        color #fff
        font-size 20px
        font-family '宋体'
        width 96px
        height 48px
        background-color #31c27c
        margin-top 10px
        border 0
        outline none
        border-radius 10px
  .main
    background-color #fbfbfd
    max-width 1200px
    margin 0 auto
    .singer-tag
      padding 34px 0 17px 40px
      margin 30px 0 20px
      .singer-tag-list
        padding-bottom 3px
        height 43px
        width 1160px
        .tag-list-item
          color black
          float left
          height 26px
          line-height 26px
          margin 0 12px 14px 0
          padding 0 8px
          text-decoration none
        .singer_tag__item--all
          margin-right 28px
        .tag-list-item--select
          background-color #31c27c
          color #ffffff
  .singerList
    display flex
    margin 0 auto
    max-width 1200px
    background-color #fbfbfd
    text-align center
    .singer-list
      margin-bottom 4px
      list-style-type none
      padding 0
      .singer-list-item
        float left
        width 20%
        margin-left 0
        margin-top 20px
        .singer-list-item-box
          background-color #fbfbfd
          margin-right 25px
          min-width 195px
          padding 25px 0
          .singer_list__pic
            width 140px
            height 140px
            border-radius 50%
  .singer-list-txt
    max-width 1200px
    margin-left 310px
    overflow hidden
    margin-bottom 20px
    list-style-type none
    display flex
    justify-content space-around
    flex-wrap wrap
    .singer-list-txt-item
      width 244px
      height 36px
      text-align left
      .item-a
        text-decoration none
  .nav
    clear both
    text-align center
    margin-bottom 60px
    font-size 0
    /* .current
    color #fff
    background-color #31c27c */
  /* strong
  font-size 16px
  font-weight 400
  display inline-block
  line-height 50px
  margin 0 5px
  padding 0 21px
  box-sizing border-box
  min-width 24px */
</style>
