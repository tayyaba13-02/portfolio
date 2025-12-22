import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite project configuration
// https://vitejs.dev/config/
export default defineConfig({
  // React plugin for Vite
  plugins: [react()],
  server: {
    // Development server port
    port: 3000,
    // Automatically open browser on start
    open: true
  }
})