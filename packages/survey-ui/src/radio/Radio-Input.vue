<template>
  <div class="survey-radio-input-wrapper">
    <SRadio :value="value" :model-value="modelValue" @change="handleChange">
      {{''}}
    </SRadio>
    <SInput v-model="label" :width="width" :border="border" :mode="mode" @change="handleTitleChange"></SInput>
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
  label: String,
  width: {
    type: Number,
    default: 250
  },
  border: Boolean,
  mode: {
    type: String,
    default: 'normal'
  }
})
const emit = defineEmits(['change', 'update:modelValue', 'update:label'])
const handleChange = (v) => {
  emit('change', v)
  emit('update:modelValue', v)
}
const handleTitleChange = (v) => {
  emit('update:label', v)
}
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
