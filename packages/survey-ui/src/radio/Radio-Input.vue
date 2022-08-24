<template>
  <div class="survey-radio-input-wrapper">
    <SRadio :value="value" :model-value="modelValue">
    </SRadio>
    <SInput v-model="title" :width="width" :border="border"></SInput>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import  SInput  from '../input/Input.vue'
import  SRadio from './Radio.vue'

const props = defineProps({
  disabled: Boolean,
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  title: String,
  width: {
    type: Number,
    default: 250
  },
  border: Boolean
})
</script>
<script lang="ts">
export default {
  name: 'SRadioInput'
}
</script>

<style lang="less">
.survey-radio-input-wrapper {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  .survey-radio-label {
    padding: 0 !important;
  }
}
</style>
