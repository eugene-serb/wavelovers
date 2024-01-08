import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        manual: resolve(__dirname, 'manual.html'),
        custom: resolve(__dirname, 'custom.html'),
        diagnostic: resolve(__dirname, 'diagnostic.html'),
        faq: resolve(__dirname, 'faq.html'),
        about: resolve(__dirname, 'about.html'),
        donate: resolve(__dirname, 'donate.html'),
        mobile: resolve(__dirname, 'mobile.html'),
        'mobile-custom': resolve(__dirname, 'mobile-custom.html'),
      },
      output: {
        format: 'es',
        dir: 'dist',
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
});
