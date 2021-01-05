import request from '../utils/request'

export const getToplist = () => {
    return request({
        method: "GET",
        url: "/toplist/detail"
    })
}
export const getTopDetail = () => {
    return request({
        method: "GET",
        url: "/artist/songs?id=6452"
    })
}

