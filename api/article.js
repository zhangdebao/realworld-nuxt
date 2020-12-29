import { Request } from '@/plugins/request'
/**
 * 获取文章详情
 * @param {*} params
 * @return {*}
 */
export const getArticle = slug => { 
  return Request({
    methods: 'GET',
    url: `/api/articles/${slug}`
  })
}

/**
 * 添加文章评论
 * @param {*} params
 * @return {*}
 */
export const addComments = (slug, data) => { 
  return Request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  })
}
/**
 * 获取文章评论列表
 * @param {*} params
 * @return {*}
 */
export const getComments = slug => { 
  return Request({
    methods: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

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
    methods: 'get',
    url: '/api/articles/feed',
    params
  })
}

/**
 * 添加点赞
 * @param {*} slug
 * @return {*}
 */
export const addFavorite = slug => { 
  return Request({
    method: 'post',
    url: `/api/articles/${slug}/favorite`
  })
}

/**
 * 添加点赞
 * @param {*} slug
 * @return {*}
 */
export const deleteFavorite = slug => { 
  return Request({
    method: 'delete',
    url: `/api/articles/${slug}/favorite`
  })
}
