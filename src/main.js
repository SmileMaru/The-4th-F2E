import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/base/style.scss"
import "../public/font/PPM/font.css"

createApp(App).use(router).mount('#app')
