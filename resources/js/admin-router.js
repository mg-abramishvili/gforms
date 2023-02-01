import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/admin/Home.vue'
import FormItem from './components/admin/FormItem.vue'
import Stat from './components/admin/Stat.vue'

const routes = [
    {
        path: '/admin',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin/form/:id',
        name: 'FormItem',
        component: FormItem
    },
    {
        path: '/admin/stat',
        name: 'Stat',
        component: Stat
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})