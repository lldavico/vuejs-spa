import Vue from 'vue'
import Router from 'vue-router'
import Articles from './components/Articles'
import Article from './components/Article'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/articles',
            name: 'Articles',
            component: Articles,
        },
        {
            path: '/articles/:articleId',
            component: Article,
            props: true,
            /*
            children: [
              {
                path: 'edit',
                component: ArticleEdit
              }
            ]
            */
        }
    ]
})