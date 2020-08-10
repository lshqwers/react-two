import axios from 'axios'
import { message } from 'antd'
// 本地服务器 baseURL http://localhost:8999/api/v1把url写死了 
// /api/v1这个路径在api中定义
let baseURL = 'http://localhost:8999'

// 创建axios实例
const fetch = axios.create({
  baseURL: baseURL,
  timeout: 10000,  // 超时设置
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 封装请求拦截器
fetch.interceptors.request.use((config) => {
  // 在这里做一些检测或者包装等处理
  // console.log('请求拦截', config)
  // 鉴权 token添加
  config.headers.Authorization = localStorage.getItem('token') || ''
  return config
})

// 封装响应拦截器
fetch.interceptors.response.use((response) => {
  // console.log(response, 'qjaosais')
  // 请求成功
  // console.log('响应拦截', response) 如果出现404, response就获取不到
  // 数据过滤，根据后端标识字符来进行数据
  let code = response.data.err // 根据返回的信息来写的
  if (response.data && response.data.success) {
    console.log(response.data, 'lssasa')
    return response.data.data
  } else if (code === 0) {
    return response.data.data
  } else if (code === 1) {
    message.error('token无效')
    return response
  } else if (code === 2) {
    message.warning(response.data.message)
  } else if (response.status === 200) {
    return response
  }
  else {
    // console.log('response--------',response)
    //  return response
    console.log('网络异步，请稍后再试')
  }
}, (error) => {
  // 请求失败
  return Promise.reject(error)
})

export default fetch
