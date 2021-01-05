<template>
  <div class="digital">
    <!-- <Carousel :carouselList="carouselList" /> -->
    <div class="digital-banner">
      <el-carousel class="digital-header" :interval="4000" type="card">
        <el-carousel-item v-for="item in carouselList" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="digital-content" v-for="item in 4" :key="item">
      <div class="digital-content-item">
        <h2 class="part__tit">最新上架</h2>
        <div class="mod_album_list">
          <ul class="album_ul__list" v-for="item in 5" :key="item">
            <li class="album_li__item">
              <div class="img-wrapper">
                <img src="./img/T002R300x300M000001p5Xyb2yi1Kf.jpg" alt="" />
              </div>

              <span class="album_li__item-span"
                ><a href="" class="name"> Anyone</a></span
              >
              <span><a href=""> 贾斯汀比伯</a></span>
              <div class="price">
                <span>￥3</span>
                <button>立即购买</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Carousel from "../../components/Carousel";
import { reqGetSaleComentList } from "../../api/digital";
export default {
  components: {
    // Carousel,
  },
  data() {
    return {
      carouselList: [
        { id: 1, imgUrl: require("./img/3401425.jpg") },
        { id: 2, imgUrl: require("./img/3401425.jpg") },
        { id: 3, imgUrl: require("./img/3401425.jpg") },
        { id: 4, imgUrl: require("./img/3401425.jpg") },
        { id: 5, imgUrl: require("./img/3401425.jpg") },
      ],
    };
  },
  async mounted() {
    let mvSaleList = await reqGetSaleComentList();
    // mvSaleList =JSON.parse( mvSaleList.data;)
    console.log(mvSaleList);
  },
};
</script>

<style>
.digital-banner {
  background-color: #ddd;
}
.digital-content {
  max-width: 1200px;
  margin: 0 auto;
}
.name {
  color: #000 !important;
}
.price {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 28px;
  line-height: 28px;
}
.price span {
  font-weight: 400;
  color: #999;
}
.price button {
  font-size: 12px;
  line-height: 28px;
  height: 28px;
  width: 80px;
  padding: 0;
  text-align: center;
  border: 1px solid #c9c9c9;
  color: #000;
  background-color: white;
}
.price button:hover {
  background-color: #ededed;
  color: #333;
  cursor: pointer;
}
.part__tit {
  float: left;
  margin-left: 20px;
  font-size: 24px;
  font-weight: 400;
  line-height: 58px;
}
.digital-content-item {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.mod_album_list {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.album_ul__list {
  /* display: flex; */
  width: 25%;
  margin: 10px 10px;
  font-size: 14px;
  /* justify-content: space-between; */
}
.album_li__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.album_li__item span {
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
}
.album_li__item-span {
  color: red;
  margin-top: 25px;
}
/* 过度效果 */
.album_li__item .img-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.album_li__item .img-wrapper img {
  width: 100%;
  -webkit-transition: 0.3s linear;
  transition: 0.3s linear;
}
.img-wrapper img:hover {
  transform: scale(1.1);
}
.digital {
  width: 100%;
}
.el-carousel__item .el-carousel__mask {
  height: auto;
}
.el-carousel__button {
  display: block;
  opacity: 0.48;
  border-radius: 50%;
  width: 10px !important;
  height: 10px !important;
}
.digital-header {
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  background: #ddd;
  margin-top: 20px;
}
.digital-header img {
  width: 100%;
  height: auto;
  /* height: 100%; */
  margin-top: 46px;
}
.el-carousel__item h3 {
  color: #ddd;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ddd;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ddd;
}
</style>