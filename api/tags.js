import { Request } from '@/plugins/request'
/**
 * 获取标签列表
 * @param {*} params
 * @return {*}
 */
export const getTags = () => { 
  return Request({
    methods: 'GET',
    url: '/api/tags'
  })
}