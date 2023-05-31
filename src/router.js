import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import AppAbout from './pages/AppAbout.vue';
import AppMain from './pages/AppMain.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/contact',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/about',
                name: 'about',
                component: AppAbout
            },
            {
                path: '/project',
                name: 'projects',
                component: AppMain
            },
            {
                path: '/project/:slug',
                name: 'single-project',
                component: SingleProject
            }
        ]
    }
);

export { router };