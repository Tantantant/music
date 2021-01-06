// 封装axios拦截器
import axios from 'axios';

import { Message } from 'element-ui';

axios.defaults.timeout = 50000;//50s
const instance = axios.create({
  baseURL: `/api`
  // Headers: {}
});
instance.interceptors.request.use((config) => {
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 直接返回响应数据
    return response.data;
  },
  (error) => {
    alert("错误信息为:" + error.message);
    return Promise.reject(error); // 把错误信息返回，外部可以做处理
  }
);



export default instance
