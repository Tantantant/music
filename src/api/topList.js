import request from '../utils/request'

// 榜单
export const getToplist = () => {
    return request({
        method: "GET",
        url: "/toplist/detail"
    })
}
// 排行榜
export const getTopDetail = () => {
    return request({
        method: "GET",
        url: "/top/song?id=6452"
    })
}

// 评论
export const getComment = () => {
    return request({
        method: "GET",
        url: `/comment/music?id=${186016}&limit=${1}`
    })
}

// 音乐地址
export const getMusicUrl = (id) => {
    return request({
        method: "GET",
        url: `/song/url?id=${id}`
    })
}

// 歌词

export const getLyric = (id) => {
    return request({
        method: 'GET',
        url: `/lyric?id=${id}`
    })
}


