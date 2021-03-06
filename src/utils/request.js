// 封装axios拦截器
import axios from "axios";


import { Message } from 'element-ui';

axios.defaults.timeout = 50000;//50s

const instance = axios.create({
  baseURL: `/api`,
});
instance.interceptors.request.use((config) => {
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
	// 响应成功：当响应状态码为2开头
	(response) => {
		// 判断code === 200
		//如果等于返回数据
		// console.log(response);
		if (response.data.code === 200) {
			return response.data;
		}
		const { message } = response.data;

		// 错误提示
		Message.error(message);
		// 功能失败 返回失败的Promise
		return Promise.reject(message);
	},
	// 响应失败：响应状态码不是2开头
	(error) => {
		let message;
		error = '' + error;
		// console.log(error);
		if (error.includes('501')) {
			message = '账号不存在';
		} else if (error.includes('509')) {
			message = '密码错误';
		}
		// message = error.message || '网络错误';
		// 错误提示
		Message.error(message);
		return Promise.reject(message);
	}
);

export default instance;
