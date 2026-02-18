import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // Important for Firebase hosting
  build: {
    outDir: 'dist',  // Make sure this matches firebase.json
    emptyOutDir: true
  }
})