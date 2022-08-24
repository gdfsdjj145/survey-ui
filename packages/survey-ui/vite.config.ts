/// <reference types="vitest">
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SurveyUI',
      fileName: 'survey-ui-vue',
      formats: ['esm', 'umd', 'iife']
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        extract: true
      }
    }
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: { alias: { 'vue': 'vue/dist/vue.esm-bundler.js'} }
})