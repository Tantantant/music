import request from '../utils/request';

export const getNewdiscNav = () => {
	return request({
		method: 'GET',
		url: `/getNewDisks`
	});
};

export const getNewdiscInland = ({ categoryId, page, limit }) => {
	return request({
		method: 'GET',
		url: `/getSongLists?${categoryId}&${page}&${limit}`
	});
};



// export const getNewdiscInland = () => {
// 	return request({
// 		method: 'GET',
// 		url: '/music/api/recommend_new_song'
// 	});
// };
