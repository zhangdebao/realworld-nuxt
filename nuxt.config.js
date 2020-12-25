module.exports = {
  router: {
    // 自定义路由表规则
    extendRoutes(routes, resolve) { 
      routes.splice(0) // 清除Nuxt.js 基于pages目录默认生成的路由表规则
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '',
              component: resolve(__dirname, 'pages/home/')
            }
          ]
        }
      ])
    }
  }
}