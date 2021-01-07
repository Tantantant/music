<template>
  <div class="comment_Container">
    <a name="1F"></a>
    <div class="part_header">
      <h2>评论</h2>
      <span>共215565条评论</span>
    </div>
    <div class="commentArea">
      <input
        type="textArea"
        placeholder="期待你的评论......"
        v-model="comment"
      />
      <span class="surplus">剩余300字</span>
    </div>
    <div class="publish">
      <i class="iconfont icon-xiaolian"></i>
      <span class="fabiao" @click="handleComment">发表评论</span>
    </div>
    <div class="new_message">
      <p>最新评论({{ commentList.length }})</p>
    </div>

    <ul class="message">
      <li
        class="messageList"
        v-for="comment in commentList"
        :key="comment.commentId"
      >
        <a href="###"
          ><img class="image" :src="comment.user.avatarUrl" alt=""
        /></a>
        <div class="messageContent">
          <span class="messageName">{{ comment.user.nickname }}</span>
          <p class="messageText">{{ comment.content }}</p>
          <div class="messageTime">
            <span>1月4日 10:43</span>
            <span>
              <i class="iconfont icon-dianzan">0</i>
              <i class="iconfont icon-pinglun"></i>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getComment } from "../../api/topList";

export default {
  name: "Comment",
  data() {
    return {
      commentList: [],
      comment: "",
    };
  },
  async mounted() {
    const res = await getComment();
    if (res.code === 200) {
      this.commentList = res.hotComments;
      // console.log(this.commentList)
    }
  },
  methods: {
    // 添加评论
    handleComment() {
      let { comment } = this;
      if (comment) {
        console.log(comment);
        this.commentList.unshift(comment);
      }
      console.log(this.commentList);
    },
  },
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fabiao {
  cursor: pointer;
}

.messageName {
  font-size: 14px;
}

.messageText {
  font-size: 14px;
  margin: 5px 0;
}

.messageTime {
  font-size: 13px;
}

.icon-dianzan {
  margin-right: 22px;
}

.messageTime {
  display: flex;
  justify-content: space-between;
}

.messageTime i {
  font-size: 17px;
}

.messageList {
  position: relative;
  width: 100%;
}

.messageContent {
  width: 100%;
  display: inline-block;
  padding: 15px 0 15px 56px;
  zoom: 1;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #ededed;
  box-sizing: border-box;
}

.message .image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  border-radius: 50%;
}

.new_message {
  height: 34px;
  line-height: 34px;
  font-size: 16px;
  overflow: hidden;
  margin-top: 50px;
  border-bottom: 1px solid #eee;
}

.publish {
  float: right;
  padding: 10px 0;
}

.publish .iconfont {
  color: #31c27c;
  display: inline-block;
  font-size: 20px;
  margin-right: 10px;
}

.publish span {
  background-color: #31c27c;
  width: 80px;
  height: 27px;
  line-height: 27px;
  display: inline-block;
  color: #fff;
  text-align: center;
  font-size: 14px;
}

.part_header {
  height: 60px;
  display: flex;
  align-items: center;
  color: #999;
}

.part_header h2 {
  font-size: 24px;
  font-weight: 400;
  line-height: 58px;
  color: #000;
}

.part_header span {
  font-size: 14px;
  margin-left: 12px;
}

.commentArea {
  position: relative;
  width: 100%;
  height: 102px;
  border: solid 1px #ececec;
  background-color: #f5f5f5;
}

.commentArea input {
  position: absolute;
  width: 94%;
  height: 80px;
  border: none;
  outline: 0;
  background-color: #f5f5f5;
  overflow: auto;
  padding: 0 30px;
}

.surplus {
  position: absolute;
  right: 20px;
  bottom: 5px;
  font-size: 14px;
}
</style>
