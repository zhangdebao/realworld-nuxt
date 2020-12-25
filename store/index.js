const cookieparser = process.server ? require('cookieparser') : undefined
/**
 * 在服务端渲染器件运行的都是同一个实例
 * 为了防止数据重提， 务必要把state定义成一个函数， 返回数据对象
 */
export const state = () => { 
  return {
    // 当前登录用户的登录状态
    user: null
  }
}

export const mutations = {
  setUser(state, data) { 
    state.user = data
  }
}

export const actions = {
  /**
   * nuxtServerInit 是一个特殊的action方法
   * 这个action会在服务端渲染期间自动调用
   * 作用：初始化容器(store)数据， 传递给客户端使用
   * @param {*} commit 提交
   * @param {*} req 请求
   */
  nuxtServerInit({ commit }, { req }) {
    console.log('nuxtServerInit')
    let user = null
    // 如果请求头中有Cookie
    if (req.headers.cookie) { 
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {

      }
    }
    // 提交mutation修改state状态
    commit('setUser', user)
  }
}