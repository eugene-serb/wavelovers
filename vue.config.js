'use strict';

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'about.html',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    custom: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'custom.html',
      chunks: ['chunk-vendors', 'chunk-common', 'custom']
    },
    diagnostic: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'diagnostic.html',
      chunks: ['chunk-vendors', 'chunk-common', 'diagnostic']
    },
    donate: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'donate.html',
      chunks: ['chunk-vendors', 'chunk-common', 'donate']
    },
    faq: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'faq.html',
      chunks: ['chunk-vendors', 'chunk-common', 'faq']
    },
    manual: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'manual.html',
      chunks: ['chunk-vendors', 'chunk-common', 'manual']
    },
  }
});
