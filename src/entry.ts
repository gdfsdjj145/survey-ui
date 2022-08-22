import { App } from 'vue'
import Button from './button/index'
import Input  from './input/index'
import Radio from './radio/index'
import Checkbox from './checkbox/index'
import Subject from './subject/index'
const { SButton, SFCButton, JSXButton } = Button
const { SInput } = Input
const { SRadio, SRadioInput } = Radio
const { SCheckbox, SCheckboxInput } = Checkbox
const { SubjectTitle, SubjectBox } = Subject

export { SButton, SFCButton, JSXButton, SInput, SRadio, SRadioInput, SCheckbox, SCheckboxInput, SubjectTitle, SubjectBox }

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
    installComp(app, [Button, Input, Radio, Checkbox, Subject])
  }
}