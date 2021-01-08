<template>
  <div class="topList_Container">
    <div class="topList_nav">
      <dl>
        <dt>巅峰榜</dt>
        <dd
          :class="index === indexs ? 'active' : ''"
          v-for="(list, index) in topList"
          :key="list.id"
        >
          {{ list.name }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { getToplist } from "../../api/topList";
export default {
  name: "TopList",
  data() {
    return {
      topList: {},
      indexs: 0,
    };
  },
  async mounted() {
    const res = await getToplist();
    if (res.code === 200) {
      this.topList = res.list;

    }
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

// .topList_nav dl dd:hover {
//   color: #31c27c;
// }

.active {
  background: #31c27c;
  color: #fff;
}

</style>