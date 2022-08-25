import { createApp } from 'vue'

import SurveyUI from './entry'

createApp({
  template: `
  <div style="width: 350px">
    <SInput v-model="text" key-name="ksji" border></SInput>
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
    <SCheckbox v-model="check1" value="A">A</SCheckbox>
    <SCheckbox v-model="check2" value="B">B</SCheckbox>
    <SCheckbox v-model="check3" value="C">C</SCheckbox>
  </div>
  <div style="width: 350px">
    <SCheckboxInput border></SCheckboxInput>
  </div>
  <div style="width: 350px">
    <SubjectTitle title="123"></SubjectTitle>
    <SubjectBox active title="123"></SubjectBox>
  </div>
  `,
  data() {
    return {
      text: '123',
      radio: 1,
      check1: false,
      check2: false,
      check3: false
    }
  },
}).use(SurveyUI).mount('#app')