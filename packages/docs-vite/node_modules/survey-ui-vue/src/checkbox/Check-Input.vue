<template>
  <div class="survey-check-input-wrapper">
    <SCheckbox :value="value" :model-value="modelValue">
    </SCheckbox>
    <SInput v-model="title" :width="width" :border="border"></SInput>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import  SInput  from '../input/Input.vue'
import  SCheckbox from './Checkbox.vue'

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
  name: 'SCheckboxInput'
}
</script>

<style lang="less">
.survey-check-input-wrapper {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
}
</style>
