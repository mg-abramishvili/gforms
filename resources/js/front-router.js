import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/front/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})