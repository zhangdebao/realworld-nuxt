import Vue from 'vue'
import dayjs from 'dayjs'
// {{ 表达式 | 过滤器}}
Vue.filter('date', (value, formate = 'YYYY-MM-DD HH:mm:ss') => { 
  return dayjs(value).format(formate)
})