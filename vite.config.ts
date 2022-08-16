import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default defineConfig({
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
  plugins: [
    vue(),
    vueJsx()
  ]
})