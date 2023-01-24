import './bootstrap'

import { createApp } from 'vue'
import router from './front-router'

import App from './components/front/App.vue'

const app = createApp(App)

app.use(router).mount('#app')