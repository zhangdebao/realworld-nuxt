import { Request } from '@/plugins/request'
/**
 * 获取公共列表
 * @param {*} params
 * @return {*}
 */
export const getArticles = params => { 
  return Request({
    methods: 'GET',
    url: '/api/articles',
    params
  })
}

/**
 * 获取关注的用户的文章列表
 * @param {*} params
 * @return {*}
 */
export const getFeedArticles = params => { 
  return Request({
    methods: 'GET',
    url: '/api/articles/feed',
    params,
    headers: {
      Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTMxMzg4LCJ1c2VybmFtZSI6InpoYW5nMTIzNCIsImV4cCI6MTYxNDMyMzczM30._yfIwM-1eVQzKRaw4x5SY61LbtYw1z0iT6tDPfclSrE`
    }
  })
}