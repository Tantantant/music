import request from '../utils/request'

export const getToplist = () => {
    return request({
        method: "GET",
        url: "/getRanks"
    })
}
export const getTopDetail = () => {
    return request({
        method: "GET",
        url: "/getTopLists"
    })
}

