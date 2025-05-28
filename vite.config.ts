// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap' 

export default defineConfig({
  plugins: [
    react(),
    sitemap({ 
      hostname: 'https://www.ihubglobal.co.kr',
      generateRobotsTxt: true, // <--- 이 옵션을 true로 설정합니다.
      // 만약 기존 robots.txt의 특정 규칙을 유지하고 싶다면,
      // robots 옵션을 사용하여 직접 명시할 수도 있습니다.
      // 예: robots: [{ userAgent: '*', allow: '/' }, { userAgent: 'Googlebot', allow: '/admin', disallow: ['/private'] }]
      // 하지만 지금은 generateRobotsTxt: true 만으로도 충분할 수 있습니다.
    }) 
  ],
  base: '/',
})