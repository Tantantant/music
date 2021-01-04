import request from '../utils/request';

export const getNewdiscNav = () => {
	return request({
		method: 'GET',
		url: '/music/api/recommend_new_album'
	});
};

// export const getNewdiscInland = () => {
// 	return request({
// 		method: 'GET',
// 		url: '/music/api/album_list'
// 	});
// };

export const getNewdiscInland = () => {
	return request({
		method: 'GET',
		url: '/music/api/recommend_new_song'
	});
};
