import { createApp } from 'vue'

import SurveyUI from './entry'

createApp({
  template: `
  <div style="width: 350px">
    <SInput v-model="text" border></SInput>
  </div>
  <div style="width: 350px">
    <SRadio v-model="radio" value="1">1</SRadio>
    <SRadio v-model="radio" value="2">2</SRadio>
    <SRadio v-model="radio" value="3">3</SRadio>
  </div>
  <div style="width: 350px">
    <SRadioInput border></SRadioInput>
  </div>
  <div style="width: 350px">
    <SCheckbox>123</SCheckbox>
    <SCheckbox>456</SCheckbox>
    <SCheckbox>789</SCheckbox>
  </div>
  <div style="width: 350px">
    <SCheckboxInput border></SCheckboxInput>
  </div>
  <div style="width: 350px">
    <SubjectTitle title="123"></SubjectTitle>
    <SubjectBox active></SubjectBox>
  </div>
  `,
  data() {
    return {
      text: '123',
      radio: 1
    }
  },
}).use(SurveyUI).mount('#app')