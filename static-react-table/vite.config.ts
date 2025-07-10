import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './static-react-table',
  plugins: [react()],
  build: {
    outDir: '../dist', // output folder goes back up
    emptyOutDir: true
  }
})
