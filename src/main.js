import './assets/base.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { auth } from './includes/firebase'
import Icon from '@/directives/icon.js'
import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.directive('icon', Icon)
    app.mount('#app')
  }
})
