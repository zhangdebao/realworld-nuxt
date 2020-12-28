/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'
//创建请求对象
export const Request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})
// 通过插件机制获取到上下文对象(query, params, req, res, app, store)
export default ({ store }) => { 
  // 添加请求拦截器
  // 任何请求都经过拦截器
  // 插件导出函数必须作为default 成员
  Request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // 如果请求失败（此时请求还没有发出去），就会进入这个
    // 对请求错误做些什么， 
    return Promise.reject(error)
  });
}