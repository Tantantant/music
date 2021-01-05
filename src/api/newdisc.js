import request from '../utils/request';

export const getNewdiscNav = () => {
	return request({
		method: 'GET',
		url: `/getNewDisks`
	});
};

export const getNewdiscInland = ({ area, limit, offset }) => {
	return request({
		method: 'GET',
		url: `/album/new?area=${area}&limit=${limit}&offset=${offset}`
	});
};

// export const getNewdiscInland = () => {
// 	return request({
// 		method: 'GET',
// 		url: '/music/api/recommend_new_song'
// 	});
// };
