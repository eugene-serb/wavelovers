import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

const ROOT = resolve(__dirname, 'src/pages');
const PUBLIC_DIR = resolve(__dirname, 'public');
const OUTPUT_DIR = resolve(__dirname, 'dist');

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  root: ROOT,
  publicDir: PUBLIC_DIR,
  build: {
    outDir: OUTPUT_DIR,
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        index: resolve(ROOT, 'index.html'),
        manual: resolve(ROOT, 'manual.html'),
        custom: resolve(ROOT, 'custom.html'),
        diagnostic: resolve(ROOT, 'diagnostic.html'),
        faq: resolve(ROOT, 'faq.html'),
        about: resolve(ROOT, 'about.html'),
        donate: resolve(ROOT, 'donate.html'),
        mobile: resolve(ROOT, 'mobile.html'),
        'mobile-custom': resolve(ROOT, 'mobile-custom.html'),
        phone: resolve(ROOT, 'phone.html'),
        'phone-custom': resolve(ROOT, 'phone-custom.html'),
      },
      output: {
        format: 'es',
        dir: OUTPUT_DIR,
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
});
