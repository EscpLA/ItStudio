import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutIt from '../components/Home/AboutIt.vue'
import AboutUs from '../components/Home/AboutUs.vue'
import NotFound from '../views/404.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        // redirect: 'AboutIt',
        children: [
            { path: '/AboutIt', name: 'AboutIt', component: AboutIt }, { path: '/AboutUs', name: 'AboutUs', component: AboutUs }
        ],
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/application',
        name: 'Application',
        component: () =>
            import ('../views/application.vue')
    },

    {
        path: '/feedback',
        name: 'Feedback',
        component: () =>
            import ('../views/feedback.vue')
    },

    { path: '/:catchAll(.*)', component: NotFound },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router