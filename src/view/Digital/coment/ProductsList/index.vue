<template>
  <div class="digital-content">
    <div class="digital-content-item">
      <div class="mod_album_list">
        <ul class="album_ul__list" v-for="item in products" :key="item.albumId">
          <li class="album_li__item">
            <div class="img-wrapper">
              <img :src="item.coverUrl" alt="" />
            </div>
            <span class="album_li__item-span"
              ><a href="" class="name"> {{ item.albumName }}</a></span
            >
            <span
              ><a href=""> {{ item.artistName }}</a></span
            >
            <div class="price">
              <span>{{ item.price }}</span>
              <button>立即购买</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { reqGetSaleComentList } from "../../../../api/digital";

export default {
  components: {
    // Carousel,
  },
  props: {
    products: Array,
  },
  data() {
    return {};
  },
  async mounted() {
    console.log("products");
    // let products = await reqGetSaleComentList();
    // this.products = products.products.slice(0, 5); //只需要前五条
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
  width: 100%;
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
  font-size: 0;
}
.album_li__item .img-wrapper img {
  width: 100%;
  height: 100%;
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