import request from '../utils/request';

//获取新碟数据
export const getNewdiscInland = ({ area, limit, offset }) => {
	return request({
		method: 'GET',
		url: `/album/new?area=${area}&limit=${limit}&offset=${offset}`
	});
};