import instance from "../utils/request";

// 封装接口函数
// 获取歌单列表
export const reqSongList = () => instance.get();
