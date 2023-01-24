import './bootstrap'

import { createApp } from 'vue'
import router from './admin-router'

import App from './components/admin/App.vue'

const app = createApp(App)

app.use(router).mount('#app')