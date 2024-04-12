import './assets/base.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { auth } from './includes/firebase'
import Icon from '@/directives/icon.js'
import App from './App.vue'
import router from './router'
import i18n from './includes/i18n'
import { registerSW } from 'virtual:pwa-register'
import VeeValidatePlugin from './includes/validation'
import GlobalComponents from './includes/_globals'
import progressBar from './includes/progress-bar'
import 'nprogress/nprogress.css'
registerSW({ immediate: true })
progressBar(router)
let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.use(GlobalComponents)
    app.use(i18n)
    app.use(VeeValidatePlugin)
    app.directive('icon', Icon)
    app.mount('#app')
  }
})
