import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  return {
    base: isProduction ? '/music-playing/' : '/',
    plugins: [
      vue(),
      VueDevTools(),
      // VitePWA({
      //   registerType: 'autoUpdate',
      //   devOptions: {
      //     enabled: false,
      //   },
      //   manifest: {
      //     name: 'Music Playing APP',
      //     theme_color: '#4DBA87',
      //     icons: [
      //       {
      //         src: 'assets/img/pwa-192x192.png',
      //         sizes: '192x192',
      //         type: 'image/png',
      //       },
      //     ],
      //   },
      //   workbox: {
      //     globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,gif}'],
      //   },
      // }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@public': fileURLToPath(new URL('./public', import.meta.url)),
      },
    },
  }
})
