import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Increase warning limit slightly and split large vendor libraries
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) return 'lucide-react';
            if (id.includes('framer-motion') || id.includes('motion-dom')) return 'framer-motion';
            if (id.includes('three')) return 'three';
            if (id.includes('@heroicons') || id.includes('@heroicons/react')) return 'heroicons';
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            return 'vendor';
          }
        }
      }
    }
  }
})
