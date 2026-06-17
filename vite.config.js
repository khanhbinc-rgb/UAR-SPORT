import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: './', 
  build: {
    outDir: 'dist', // Đổi từ 'backend/dist' thành 'dist' để Vercel tự tối ưu Frontend
    emptyOutDir: true,
  },
  base: '/'
})