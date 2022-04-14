import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import About from '../views/Sidenav.vue'
import Projects from '../views/Projects.vue'
import Projects from '../views/Blogs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/About',
    name: 'About',
    component: About
  },

  {
    path: '/Sidenav',
    name: 'Sidenav',
    component: Sidenav
  },

  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },

  {
    path: '/Blogs',
    name: 'Blogs',
    component: Blogs
  },

  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Sidenav',
    name: 'Sidenav',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sidenav.vue')
  },

  {
    path: '/Projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },

  {
    path: '/Blogs',
    name: 'Blogs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blogs.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
