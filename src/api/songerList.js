import request from "../utils/request"
// import mock from "../utils/mock"

//获取上方列表数据
export const getSonger = () => {
  return request({
    url: "/playlist/highquality/tags",
    method: "GET"
  })
}
//获取下方歌手数据/toplist/artist
export const getSongerList = (page = "") => {
  return request({
    url: `/toplist/artist?${page}`,
    method: "GET"
  })
}
//获取下方歌手数据
export const Songer = () => {
  return request({
    url: `/toplist/artist?limit=90`,
    method: "GET"
  })
}