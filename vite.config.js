import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/VITE-Shriniwas-car-decor/', // 👈 very important
  plugins: [react()],
});
