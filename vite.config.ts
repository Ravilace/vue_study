import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      // 把 /api/qinghua 代理到目标接口
      '/api/qinghua': {
        target: 'https://api.uomg.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/qinghua/, '/api/rand.qinghua?format=json'),
      },
    }
  }
})
