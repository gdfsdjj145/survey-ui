<template>
  <div class="survey-check-input-wrapper">
    <SCheckbox :value="value" :model-value="modelValue" @change="handleChange">
      {{''}}
    </SCheckbox>
    <SInput v-model="label" :width="width" :border="border" :mode="mode"  @change="handleTitleChange"></SInput>
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
  name: 'SCheckboxInput'
}
</script>

<style lang="less">
.survey-check-input-wrapper {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  .survey-checkbox-label {
    padding: 0 !important;
  }
}
</style>
