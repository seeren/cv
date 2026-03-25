import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/cv/',
  plugins: [react(), svgr()],
  server: {
    port: 3001,
    open: true
  }
})
