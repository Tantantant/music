// 封装axios拦截器
import axios from 'axios';

const instance = axios.create({
  baseURL: `/mock`
})
instance.interceptors.request.use((config) => {

  return config
})

// 响应拦截器
instance.interceptors.response.use(
  // 响应成功：当响应状态码为2开头
  (response) => {
    // 判断code === 200
    //如果等于返回数据
    // console.log(response)
    if (response.data.status === 0) {
      return response.data.data
    }
    // 错误提示
    // Message.error(message)
    // 功能失败 返回失败的Promise
    return Promise.reject()
  },
  // 响应失败：响应状态码不是2开头
  (error) => {
    const message = error.message || "网络错误"
    // 错误提示
    // Message.error(message)
    return Promise.reject(message)
  }
)

export default instance