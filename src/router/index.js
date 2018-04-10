import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
// const AboutUs = () => import(/* webpackChunkName: "group" */ '@/pages/about-us/about-us')
import AboutUs from '@/pages/about-us/about-us'
import NewPatients from '@/pages/new-patients/new-patients'
import Treatments from '@/pages/treatments/treatments'
import Community from '@/pages/community/community'
import Contact from '@/pages/contact-us/contact-us'

import PageNotFound from '@/pages/404/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      navigation: false,
      component: Home
    },
    {
      path: '/about-us',
      name: 'About Us',
      navigation: true,
      component: AboutUs
    },
    {
      path: '/new-patients',
      name: 'New Patients',
      navigation: true,
      component: NewPatients
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      component: Treatments
    },
    {
      path: '/community',
      name: 'Community & Fun',
      navigation: true,
      component: Community
    },
    {
      path: '/contact',
      name: 'Contact',
      navigation: true,
      component: Contact
    },
    {
      path: '/*',
      name: 'page-not-found',
      navigation: false,
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
