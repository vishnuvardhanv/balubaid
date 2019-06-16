import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import About from '@/views/about.vue'
import BusinessSector from '@/views/business-sector.vue'
import Careers from '@/views/careers.vue'
import ContactUs from '@/views/contact-us.vue'
import NewsEvents from '@/views/news-events.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/business-sector',
      name: 'businessSector',
      component: BusinessSector
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: ContactUs
    }, {
      path: '/news-events',
      name: 'newsEvents',
      component: NewsEvents
    }
  ]
})
