import request from '../utils/request';

//登录
export const getLogin = ({ phone, password }) => {
	return request({
		method: 'GET',
		url: `/login/cellphone?phone=${phone}&password=${password}`
	});
};

//退出登录
export const getSignLogin = () => {
	return request({
		method: 'GET',
		url: `/logout`
	});
};
