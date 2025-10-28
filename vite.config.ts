import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@root': path.resolve(__dirname, './'),
      '@system': path.resolve(__dirname, './system'),
      '@demos': path.resolve(__dirname, './demos'),
      '@common': path.resolve(__dirname, './common'),
      '@data': path.resolve(__dirname, './data'),
      '@components': path.resolve(__dirname, './components'),
      '@lib': path.resolve(__dirname, './lib'),
      '@pages': path.resolve(__dirname, './pages'),
      '@modules': path.resolve(__dirname, './modules'),
    },
  },
  server: {
    port: 10000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  // Configure Sass to use the modern JS API and prefer the embedded compiler for performance.
  // Vite will automatically use 'sass-embedded' if it's installed. Run: npm i -D sass-embedded
  css: {
    preprocessorOptions: {
      scss: {
        // Use Dart Sass modern compiler API to avoid deprecation warnings and prep for Sass 2.0
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
      },
      sass: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
