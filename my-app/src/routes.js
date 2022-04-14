import {createWebHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Sidenav from './views/Sidenav.vue';
import Projects from './views/Projects.vue';
import Blogs from './views/Blogs.vue';

const routes= [
    {
        name: './',
        path: '/',
        component: Home
    },

    {
        name: 'About',
        path: '/About',
        component: About
    },
    
    {
        name: 'Sidenav',
        path: '/Sidenav',
        component: Sidenav
    },

    {
        name: 'Projects',
        path: '/Projects',
        component: Projects
    },

    {
        name: 'Blogs',
        path: '/Blogs',
        component: Blogs
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router