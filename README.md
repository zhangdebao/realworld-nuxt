<!--
 * @Author: zdb
 * @Date: 2020-12-25 10:49:10
 * @LastEditors: zdb
 * @LastEditTime: 2020-12-25 10:55:51
 * @Description: 构建步骤
-->
### 创建初始化项目
- 创建项目
- - 创建项目文件夹```mkdir realworld```
- - 初始化package.json  ```npm init```
- - 安装nuxt ```npm i nuxt```
- - 新建pages文件夹 新建index.vue文件
- 导入样式静态资源
- - 根目录下新建app.html文件, 并填写模板
- - 修改静态资源路径
### 布局组件
- 创建布局组件（layout）
- 根目录下创建```nuxt.config.js```自定义路由

### 最简单的部署方式
- 配置 Host + Port     ```nuxt.config.j--> server```
- 压缩发布包   压缩具体的文件夹 ```.nuxt + static + nuxt.config.js + package.json + package-lock.json```
- 把发布包传到服务端
- - 在服务器创建realworld-nuxt ```mkdir realworld-nuxt```
- - 把本地的压缩文件上传到服务器上 ```~/github/realworld-nuxt#```
- 解压
- 安装依赖
- 启动服务
- pm2 启动nodejs服务 ```pm2 start npm -- start``` npm 启动 start服务， start 服务通过pm2 管理

