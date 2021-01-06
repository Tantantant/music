import request from "../utils/request"
//获取MV列表
export const reqGetMvList = () => {
    return request({
        url: "/mv_list",
        method: "GET"
    })
};
//获取专辑列表(唱歌)
export const reqGetComentList = () => {
    return request({
        url: '/cgi-bin/musicu.fcg?data={"albumlib":{"method":"get_album_by_tags","param":{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":20,"click_albumid":0},"module":"music.web_album_library"}}',
        method: "GET",
    })
}
//获取数字专辑列表(可以卖的)
export const reqGetSaleComentList = () => {
    return request({
        url: '/album/list',
        method: "GET",
    })
}
//获取数字专辑榜单列表
export const reqGetRankingCometList = () => {
    return request({
        url: `http://localhost:3000/album/songsaleboard?type=year&year=2020&albumType=0`,
        method: "GET",
    })
};
//获取数字专辑详细信息 /artist/top/song?id=6452
export const reqGetRankingDetail = (id) => {
    console.log(id);
    return request({
        url: `/album/detail?id=${id}`,
        method: "GET",
    })
};
//获取歌手的歌曲列表
export const reqGetSongerList = (id) => {
    console.log(id);
    return request({
        url: `artist/top/song?id=${id}`,
        method: "GET",
    })
};
//获取歌手的歌曲列表前50名
export const reqGetSongerListTop = (id) => {
    console.log(id);
    return request({
        url: `artist/top/song?id=${id}`,
        method: "GET",
    })
};

//获取不同地区的专辑列表(可以卖的)
//默认中国
export const reqGetStyleCometList = ({ data = "Z_H" }) => {
    return request({
        url: `/album/list/style?area=${data}`,
        method: "GET",
    })
};

