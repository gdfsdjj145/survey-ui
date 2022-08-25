import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import SurveyUI from '../../../src/entry'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.use(SurveyUI),
    app.component('Demo', Demo),
    app.component('DemoBlock', DemoBlock)
  }
}