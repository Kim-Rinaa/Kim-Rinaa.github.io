// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap' 
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    sitemap({ 
      hostname: 'https://www.ihubglobal.co.kr',
      generateRobotsTxt: false, 
    }) 
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
})