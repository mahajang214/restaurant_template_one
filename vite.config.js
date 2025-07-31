import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcss from './postcss.config.js'

export default defineConfig({
  plugins: [react()],
  base: '/restaurant_template_one/', // ✅ Required for GitHub Pages
  css: {
    postcss
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['swiper', 'lodash'],
        }
      }
    }
  }
})
