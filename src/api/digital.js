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
        url: '/v8/fcg-bin/musicmall.fcg?cmd=pc_index_new',
        
        method: "GET",
    })
}
/*
最新专辑（新）
url： https://u.y.qq.com/cgi-bin/musicu.fcg&data={"albumlib":{"method":"get_album_by_tags","param":{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":20,"click_albumid":0},"module":"music.web_album_library"}}

参数：

sin: 当前页
num：每页专辑数量
format：数据格式
callback：jsonp回调函数
说明： 如不需要jsonp调用，将format参数值修改为json并且去掉callback参数


专辑详情
url： https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=001IskfD3Vncxo&g_tk=1278911659&hostUin=0&format=jsonp&jsonpCallback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0

参数：

albummid：专辑id。可从专辑列表中获取
format：数据格式
jsonpCallback：jsonp回调函数
说明： 如不需要jsonp调用，将format参数值修改为json并且去掉jsonpCallback参数
*/