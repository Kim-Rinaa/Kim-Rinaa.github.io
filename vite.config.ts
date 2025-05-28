// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap' 

export default defineConfig({
  plugins: [
    react(),
    sitemap({ 
      hostname: 'https://www.ihubglobal.co.kr',
      generateRobotsTxt: false, // <--- 이 옵션을 명시적으로 false로 설정합니다.
                                // 또는 이 옵션 줄 자체를 삭제해도 기본값이 false일 수 있습니다.
      // robots: [] // 만약 robots 옵션이 있다면 빈 배열로 설정하거나 주석 처리/삭제합니다.
    }) 
  ],
  base: '/',
})