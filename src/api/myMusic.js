import request from '../utils/request'

export const getMyMusic = (uid) => {
    return request({
        method: 'GET',
        url: `/user/record?uid=${uid}`
    })
}