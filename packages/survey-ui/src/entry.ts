import { App } from 'vue'
import Input  from './input/index'
import Radio from './radio/index'
import Checkbox from './checkbox/index'
import Subject from './subject/index'
const { SInput } = Input
const { SRadio, SRadioInput } = Radio
const { SCheckbox, SCheckboxInput } = Checkbox
const { SubjectTitle, SubjectBox } = Subject

export {SInput, SRadio, SRadioInput, SCheckbox, SCheckboxInput, SubjectTitle, SubjectBox }

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
    installComp(app, [Input, Radio, Checkbox, Subject])
  }
}