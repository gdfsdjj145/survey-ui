<template>
<label class="survey-checkbox-wrapper">
    <span class="survey-checkbox">
      <input 
      class="survey-checkbox-input" 
      type="checkbox"
      :value="modelValue"
      :checked="modelValue"
      @change="handleChange"
       />
      <span class="survey-checkbox-inner"></span>
    </span>
    <span class="survey-checkbox-label">
      <slot>
        {{value}}
      </slot>
    </span>
</label>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  disabled: Boolean,
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: false
  },
  name: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change', 'update:modelValue'])
const isChecked = ref(false)

const handleChange = (e) => {
  emit('change', e.target.checked)
  emit('update:modelValue', e.target.checked)
}

</script>

<script lang="ts">
export default {
  name: 'SCheckbox'
}
</script>
<style lang="less">
.survey-checkbox-wrapper {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  margin: 0 8px 0 0;
  font-size: 14px;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
  cursor: pointer;
  .survey-checkbox {
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
    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      margin: 0;
      cursor: pointer;
    }
  }
  .survey-checkbox-label {
    padding: 0 8px;
  }
}
</style>
