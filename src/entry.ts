import { App } from 'vue'
import Button from './button/index'
import Input  from './input/index'
import radio from './radio/index'
import Radio from './radio/index'
const { SButton, SFCButton, JSXButton } = Button
const { SInput } = Input
const { SRadio } = Radio
console.log(Radio)

export { SButton, SFCButton, JSXButton, SInput, SRadio }

// 组测组件
function installComp (app, comPlist) {
  for(const comp of comPlist) {
    for (const key in comp) {
      app.component(comp[key].name, comp[key])
    }
  }
}

export default {
  install (app:App): void {
    installComp(app, [Button, Input, Radio])
  }
}