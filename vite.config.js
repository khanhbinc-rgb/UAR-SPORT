import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'backend/dist', // Lệnh này giúp build ra folder backend/dist
    emptyOutDir: true,
  },
  base: './' // Lệnh này giúp trình duyệt tìm đúng file JS/CSS
})