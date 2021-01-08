<template>
  <div class="headers">
    <div class="singer">
      <div class="singer-inner">
        <h2 class="singer-titel">你关注的歌手将展示在这里</h2>
        <div class="singer-desc">登录查看你关注的歌手</div>
        <button class="sing">立即登录</button>
      </div>
    </div>
    <div class="main">
      <div class="singer-tag">
        <div class="singer-tag-list">
          <a
            href="###"
            class="tag-list-item singer_tag__item--all tag-list-item--select"
            >热门</a
          >
          <!-- :class="{ navactive: navId === nav.id }" -->
          <a
            href="###"
            class="tag-list-item"
            v-for="(item, index) in area"
            :key="item.id"
            data-id="item.id"
            @click="change(item.id, index)"
            :class="cullId === item.id ? 'tag-list-item--select' : ''"
            >{{ item.name }}</a
          >
        </div>
        <div class="singer-tag-list">
          <a
            href="###"
            class="tag-list-item singer_tag__item--all tag-list-item--select"
            >全部</a
          >
          <a
            href="###"
            class="tag-list-item"
            v-for="(gen, index) in genre"
            :key="gen.id"
            @click="change(gen.id, index)"
            :class="cullId === gen.id ? 'tag-list-item--select' : ''"
            >{{ gen.name }}</a
          >
        </div>
        <div class="singer-tag-list">
          <a
            href="###"
            class="tag-list-item singer_tag__item--all tag-list-item--select"
            >全部</a
          >
          <a
            href="###"
            class="tag-list-item"
            v-for="(ind, index) in index"
            :key="ind.id"
            @click="change(ind.id, index)"
            :class="cullId === ind.id ? 'tag-list-item--select' : ''"
            >{{ ind.name }}</a
          >
        </div>
        <div class="singer-tag-list">
          <a
            href="###"
            class="tag-list-item singer_tag__item--all tag-list-item--select"
            >全部</a
          >
          <a
            href="###"
            class="tag-list-item"
            v-for="(sex, index) in sex"
            :key="sex.id"
            @click="change(sex.id, index)"
            :class="cullId === sex.id ? 'tag-list-item--select' : ''"
            >{{ sex.name }}</a
          >
        </div>
      </div>
    </div>
    <div id="singerList">
      <div class="singerLists" v-if="isShow">
        <ul class="singer-list">
          <li class="singer-list-item" v-for="list in dirList" :key="list.id">
            <div class="singer-list-item-box">
              <a href="###">
                <img class="singer_list__pic" :src="list.picUrl" alt="" />
              </a>
              <h3 class="singer-list-title">
                <a href="###">{{ list.name }}</a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <ul class="singer-list-txt">
        <li
          class="singer-list-txt-item"
          v-for="song in discList"
          :key="song.id"
        >
          <a href="###" class="item-a">{{ song.name }}</a>
        </li>
      </ul>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      class="nav"
      :current-page="page"
      :page-size="100"
      @current-change="CurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import { getSonger, getSongersList, getSonger1 } from '../../api/songerList'
// import { getSonger1 } from '../../api/songerList'

export default {
  name: 'Singer',
  data() {
    return {
      page: 1,
      // limit: 20,
      categoryId: 1000000,
      discList: [],
      dirList: [],
      cullId: null,
      isShow: true,
    }
  },
  computed: {
    ...mapState({
      songerList: (state) => state.songerList.songerList,
      songer: (state) => state.songerList.songer,
      area: (state) => state.songerList.area,
      genre: (state) => state.songerList.genre,
      index: (state) => state.songerList.index,
      sex: (state) => state.songerList.sex,
      // list: (state) => state.songerList.list,
    }),
  },
  methods: {
    ...mapActions(['getSongerList1']),
    async change(id, index) {
      this.cullId = id
      /* const res = await getSonger1()
      console.log(res) */
      // this.$store.dispatch('requSonger')
      // console.log(this.list)
      await this.getSongerList1()
      if (index === 0) return
      this.discList = this.songer.slice(index * 10, index * 20)
      this.dirList = this.songerList.slice(index * 20 - 10, index * 20)
    },
    CurrentChange(page) {
      console.log(page)
      // await this.getNewDisc(page)
      // this.getSongerList1(page)
      this.page = page
      //通过下标来进行切割数据
      if (this.page !== 1) {
        this.isShow = false
        this.discList = this.songer.slice(page * 10 - 10, page * 20)
      } else {
        this.isShow = true
        this.discList = this.songer.slice(page * 10 - 10, page * 20)
      }

      // console.log(this.songer)
    },
  },
  /* mounted(){
    this.$store.dispatch('getSongerList1')
  } */
  async mounted() {
    await this.$store.dispatch('getSonger1')
    await this.getSongerList1()
    this.discList = this.songer
    this.dirList = this.songerList.slice(0, 10)
    console.log(this.discList)
  },
}
</script>
<style lang="stylus" scoped>
body
  margin 0
  padding 0
  background-color #fafafa
  a:hover
    color yellowgreen
.headers
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
  .singerLists
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
    margin 20px auto 0
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
