import { Request } from '@/plugins/request'
/**
 * 用户登录请求
 * @param {*} data
 * @return {*}
 */
export const login = data => { 
  return Request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

/**
 * 用户注册请求
 * @param {*} data
 * @return {*}
 */
export const register = data => { 
  return Request({
    method: 'POST',
    url: '/api/users',
    data
  })
}