import SButton from './Button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'
import { App } from 'vue'

// 导出Button组件
export default {
  install (app: App) {
    app.component(SButton.name, SButton)
  }
}