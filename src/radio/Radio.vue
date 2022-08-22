<template>
<label class="survey-radio-wrapper">
    <span class="survey-radio">
      <input 
      class="survey-radio-input" 
      type="radio"
      v-model="modelValue"
      :value="value"
      @change="handleChange"
       />
      <span class="survey-radio-inner"></span>
    </span>
    <span class="survey-radio-label">
      <slot>
        {{value}}
      </slot>
    </span>
</label>
</template>
<script lang='ts' setup>
import { ref } from 'vue'

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
  name: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change', 'update:modelValue'])

const handleChange = (e) => {
  emit('change', e.target.value)
  emit('update:modelValue', e.target.value)
}
</script>
<script lang="ts">
export default {
  name: 'SRadio'
}
</script>
<style lang="less">
.survey-radio-wrapper {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  margin: 0 8px 0 0;
  font-size: 14px;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
  cursor: pointer;
  .survey-radio {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    top: 0.2em;
    display: inline-block;
    outline: none;
    cursor: pointer;
    input[type="radio"] {
      width: 16px;
      height: 16px;
      margin: 0;
      cursor: pointer;
    }
  }
  .survey-radio-label {
    padding: 0 8px;
  }
}
</style>