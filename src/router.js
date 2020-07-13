import Vue from 'vue'
import Router from 'vue-router'
import Articles from './components/views/articles/Articles'
import Article from './components/views/articles/Article'
import Home from './components/views/Home'
import SignIn from './components/views/auth/SignIn'
import PageNotFound from './components/views/errors/PageNotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
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
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn,
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
})