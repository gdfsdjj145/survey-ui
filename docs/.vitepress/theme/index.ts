import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import SRadio from '../../../src/radio/Radio.vue'
import SRadioInput from '../../../src/radio/Radio-Input.vue'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component('SRadio', SRadio),
    app.component('SRadioInput', SRadioInput),
    app.component('Demo', Demo),
    app.component('DemoBlock', DemoBlock)
  }
}