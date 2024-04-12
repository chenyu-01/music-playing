import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// import { visualizer } from 'rollup-plugin-visualizer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Music Playing APP',
        theme_color: '#4DBA87',
        icons: [
          {
            src: 'assets/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
        globIgnores: [
          'node_modules/**/*',
          'sw.js',
          'workbox-*.js',
          '**/pwa-*.png',
        ],
      },
    }),
    // visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
