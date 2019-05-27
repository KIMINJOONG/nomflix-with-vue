import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter:(to, from ,next) => {
        document.title = "nomflix | movie";
        next();
      },
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/tv',
      name: 'tv',
      beforeEnter:(to, from ,next) => {
        document.title = "nomflix | tv";
        next();
      },
      component: () => import(/* webpackChunkName: "about" */ './views/Tv.vue')
    },
    {
      path: '/search',
      name: 'search',
      beforeEnter:(to, from ,next) => {
        document.title = "nomflix | search";
        next();
      },
      component: () => import(/* webpackChunkName: "about" */ './views/Search.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      beforeEnter:(to, from ,next) => {
        document.title = "nomflix | detail";
        next();
      },
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue')
    }
  ]
})
