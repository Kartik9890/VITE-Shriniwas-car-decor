import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/VITE-Shriniwas-car-decor/', // ✅ very important
})
