<template>
<label class="survey-radio-wrapper">
    <span class="survey-radio">
      <input 
      class="survey-radio-input" 
      type="radio"
       @click="choose"
       />
      <span class="survey-radio-inner"></span>
    </span>
    <span class="survey-radio-label">
      <slot>
        {{label}}
      </slot>
    </span>
</label>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})
const checked = ref(false)
const choose  = (e) => {
  e.target.checked = false
  console.log(e.target)
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
      width: 18px;
      height: 18px;
      margin: 0;
      cursor: pointer;
    }
  }
  .survey-radio-label {
    padding: 0 8px;
  }
}
</style>