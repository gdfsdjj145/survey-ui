/// <reference types="vitest">
import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

const alias = {
  '@': path.resolve(__dirname, './src'),
  'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
}

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true,
    brotliSize: true,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SurveyUI',
      fileName: 'survey-ui',
      formats: ['esm', 'umd', 'iife']
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ],
  resolve: { alias: { 'vue': 'vue/dist/vue.esm-bundler.js'} }
})