import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import mhome from '@/pages/home'
import listNews from '@/pages/base/list-news'
import mescrollOptions from '@/pages/base/mescroll-options'
import listProducts from '@/pages/base/list-products'
import mescrollComponent from '@/pages/base/mescroll-component'
import mescrollMore from '@/pages/base/mescroll-more'
import mescrollSwiperNav from '@/pages/base/mescroll-swiper-nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mhome',
      name: 'mhome',
      component: mhome
    }, {
      path: '/listNews',
      name: 'listNews',
      component: listNews
    }, {
      path: '/mescrollOptions',
      name: 'mescrollOptions',
      component: mescrollOptions
    }, {
      path: '/listProducts',
      name: 'listProducts',
      component: listProducts
    }, {
      path: '/mescrollComponent',
      name: 'mescrollComponent',
      component: mescrollComponent
    }, {
      path: '/mescrollMore',
      name: 'mescrollMore',
      component: mescrollMore
    }, {
      path: '/mescrollSwiperNav',
      name: 'mescrollSwiperNav',
      component: mescrollSwiperNav
    }
  ]
})
