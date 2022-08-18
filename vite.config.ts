/// <reference types="vitest">
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
  build: {
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    minify: false,
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