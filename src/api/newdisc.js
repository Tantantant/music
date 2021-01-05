import request from '../utils/request';

export const getNewdiscInland = ({ area, limit, offset }) => {
	return request({
		method: 'GET',
		url: `/album/new?area=${area}&limit=${limit}&offset=${offset}`
	});
};