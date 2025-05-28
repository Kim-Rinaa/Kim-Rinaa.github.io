// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap' 
import path from 'path' // <--- 이 줄이 반드시 있어야 합니다!

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
      '@': path.resolve(__dirname, './src'), // <--- 이 설정이 올바른지 확인
    },
  },
})