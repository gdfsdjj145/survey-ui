import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from '../config/unocss'

export default defineConfig({
  server: {
    port: 7001
  },
  plugins: [
    vueJsx(),
    Unocss()
  ]
})