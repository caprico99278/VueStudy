import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import GrobalParts from './components/GrobalParts.vue'
import router from './router'

const app = createApp(App)
app.component('GrobalParts', GrobalParts)

app.use(createPinia())
app.use(router)

app.mount('#app')
