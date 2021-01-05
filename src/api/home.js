import request from "../utils/request"
//获取推荐的歌单
export const reqGetAllList = () => {
    return request({
        url: "/api/recommend_songlist_hot",
        method: "GET"
    })
};
export const getinfo = () => {
    return request({
        url: "http://localhost:8080/api"
    })
}