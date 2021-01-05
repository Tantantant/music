<template>
  <div class="topList_Container">
    <div class="topList_nav">
      <dl>
        <dt>巅峰榜</dt>
        <dd
          :class="isShow ? 'active' : ''"
          @click="handleSelect(index, $event)"
          v-for="(list, index) in topList"
          :key="list.id"
          :data-id="index"
        >
          {{ list.name }}
        </dd>
        <!-- <dd>热歌榜</dd>
        <dd>新歌榜</dd>
        <dd>流行指数榜</dd>
        <dd>听歌识曲榜</dd>
        <dd>飙升榜</dd> -->
      </dl>
      <!-- <dl>
        <dt>地区榜</dt>
        <dd>内地榜</dd>
        <dd>香港地区榜</dd>
        <dd>台湾地区榜</dd>
        <dd>欧美榜</dd>
        <dd>韩国榜</dd>
        <dd>日本榜</dd>
      </dl>
      <dl>
        <dt>特色榜</dt>
        <dd>网络歌曲榜</dd>
        <dd>DJ舞曲榜</dd>
        <dd>Q音快手榜</dd>
        <dd>抖音排行榜</dd>
        <dd>综艺新歌榜</dd>
        <dd>影视金曲榜</dd>
        <dd>国风热歌榜</dd>
        <dd>说唱榜</dd>
        <dd>电音榜</dd>
        <dd>动漫音乐榜</dd>
        <dd>游戏音乐榜</dd>
        <dd>达人音乐榜</dd>
        <dd>K歌金曲榜</dd>
        <dd>腾讯音乐人原创榜</dd>
      </dl>
      <dl>
        <dt>全球榜</dt>
        <dd>美国公告榜</dd>
        <dd>美国iTunes榜</dd>
        <dd>韩国Melon榜</dd>
        <dd>英国UK榜</dd>
        <dd>日本公信榜</dd>
        <dd>JOOX本地热播帮</dd>
        <dd>香港KKBOX榜</dd>
        <dd>YouTube音乐排行榜</dd>
      </dl> -->
    </div>
  </div>
</template>

<script>
import { getToplist } from "../../api/topList";
export default {
  data() {
    return {
      topList: {},
      isShow: false,
    };
  },
  async mounted() {
    const res = await getToplist();
    // console.log("res", res);
    if (res.code === 200) {
      // console.log(res.list)
      this.topList = res.list;
      // console.log("toplist", this.topList);
    }
  },
  methods: {
    handleSelect(index, e) {
      const { id } = e.target.dataset;
      if (id == index) {
        this.isShow = !this.isShow;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
}

.topList_Container {
  width: 175px;
  height: 100%;
  border: 1px solid #ddd;
}

.topList_nav dl dt {
  width: 116px;
  line-height: 60px;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
  margin: 0 17px 10px;
}

.topList_nav dl dd {
  font-size: 15px;
  display: block;
  line-height: 22px;
  padding: 8px 17px;
}

.topList_nav dl dd:hover {
  color: #31c27c;
}

.active {
  background: #31c27c;
}
</style>