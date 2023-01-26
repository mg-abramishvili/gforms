import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/admin/Home.vue'
import FormEditor from './components/admin/forms/Editor.vue'

const routes = [
    {
        path: '/admin',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin/forms/:id?/editor',
        name: 'FormEditor',
        component: FormEditor
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})