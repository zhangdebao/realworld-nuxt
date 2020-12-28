<template>
  <div class="home-page">
  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item" v-if="user">
              <nuxt-link 
              class="nav-link"
              exact
              :class="{ active: tab === 'your_feed' }"
              :to="{
                name: 'home',
                query: {
                  tab: 'your_feed'
                }
              }">Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link 
              exact
              class="nav-link"
              :class="{ active: tab === 'global_feed' }"
              :to="{
                name: 'home',
                query: {
                  tab: 'global_feed'
                }
              }">Global Feed</nuxt-link>
            </li>
            <li class="nav-item" v-if="tag" >
              <nuxt-link 
              exact
              class="nav-link"
              :class="{ active: 'tab' === tab }"
              :to="{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: tag
                }
              }"># {{ tag }}</nuxt-link>
            </li>
          </ul>
        </div>

        <!-- <div class="article-preview">
          <div class="article-meta">
            <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div class="info">
              <a href="" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 29
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div> -->

        <div class="article-preview" v-for="article in articles" :key="article.slug">
          <div class="article-meta">
            <nuxt-link to="{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }">
              <img :src="article.author.image" />
            </nuxt-link>
            <!-- <a href="profile.html"><img :src="article" /></a> -->
            <div class="info">
              <nuxt-link to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                {{article.author.username}}
            </nuxt-link>
              <span class="date">{{ article.createdAt }}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{ active: article.favorited }">
              <i class="ion-heart"></i> {{ article.favoritesCount }}
            </button>
          </div>
          <nuxt-link :to="{
            name: 'article',
            params: {
              slug: article.slug
            }
          }" class="preview-link">
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>
        <!-- 分页 -->
        <nav>
          <ul class="pagination">
            <li v-for="item of totalPage" :key="item" class="page-item" :class="{ active: item === page}"><nuxt-link :to="{
              name: 'home',
              query: {
                page: item,
                tag: $route.query.tag,
                tab: tab
              }
            }" class="page-link">{{item}}</nuxt-link></li>
          </ul>
        </nav>
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link v-for="tag in tags" :key="tag" :to="{
              name: 'home',
              query: {
                tag: tag,
                tab: 'tab'
              }
            }" class="tag-pill tag-default">{{tag}}</nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
import { getArticles, getFeedArticles } from '@/api/article'
import { getTags } from '@/api/tags'
export default {
  name: 'Home',
  async asyncData ({ query , store}) {
    const page = Number.parseInt(query.page || 1)
    const limit = 20
    const { tag } = query
    const tab = query.tab || 'global_feed'
    const loadArticles = store.state.user && tab === 'your_feed' ? getFeedArticles  : getArticles
    const [ articleRes = { data: {} }, tagRes = { data: {} } ] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,  // 偏移量
      tag: query.tag
    }),
    getTags()
    ])
    const { articles = [], articlesCount = 0 } = articleRes.data
    const { tags = [] } = tagRes.data
    return {
       articles,
       articlesCount,
       limit,
       page,
       tags,
       tag,
       tab: query.tab || 'global_feed'
    }
  },
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  watchQuery: ['page', 'tag', 'tab'] // 监察query参数的改变
}
</script>
<style scoped>

</style>