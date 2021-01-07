import request from '../utils/request';

export const getToplist = () => {
	return request({
		method: 'GET',
		url: '/getRanks'
	});
};
export const getTopDetail = () => {
	return request({
		method: 'GET',
		url: '/getTopLists'
	});
};

//评论
export const getComment = () => {
	return request({
		method: 'GET',
		url: `/comment/music?id=${186016}&limit=${1}`
	});
};
