import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lucide-react']
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: parseInt(process.env.PORT || '3000'),
    host: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
