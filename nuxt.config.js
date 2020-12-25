module.exports = {
  router: {
    linkActiveClass: 'active',  //路由激活的class
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
              name:'Home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name:'login',
              component: resolve(__dirname, 'pages/Login/')
            },
            {
              path: '/register',
              name:'register',
              component: resolve(__dirname, 'pages/Login/')
            },
            {
              path: '/profile/:username',
              name:'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name:'settings',
              component: resolve(__dirname, 'pages/setting/')
            },
            {
              path: '/editor',
              name:'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name:'article',
              component: resolve(__dirname, 'pages/article/')
            },
          ]
        }
      ])
    }
  }
}