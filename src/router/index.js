import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CardArticleLeft from '@/components/CardArticleLeft'
import TheArticle from '@/components/TheArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
        path: '',
        name: 'ArticleList',
        component: CardArticleLeft
      }, {
        path: ':id',
        name: 'Article',
        component: TheArticle,
        props: true
      }]
    }
  ]
})
