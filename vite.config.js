import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: './', // Bảo Vite hãy đứng ở thư mục gốc để tìm index.html
  build: {
    outDir: 'backend/dist', // Vẫn xuất file build vào backend/dist
    emptyOutDir: true,
  },
  base: '/'
})