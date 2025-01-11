import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/assign2_cat201/',
  build: {
    outDir: 'dist' // Default build directory
  }
})
