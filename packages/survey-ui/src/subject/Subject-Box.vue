<template>
  <div :class="['survey-subject-box', active?'subject-box-active':'']">
    <SubjectInput></SubjectInput>
    <slot></slot>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SubjectInput from './Subject-Title.vue'

defineProps({
  active: Boolean
})
</script>
<script>
export default {
  name: 'SubjectBox'
}
</script>


<style lang="less">
.survey-subject-box {
  position: relative;
  padding: 18px 16px;
  border: 1px solid transparent;
  box-sizing: border-box;
  &:hover {
      background-color: #f7f7f7;
      outline: none;
  }
}
.subject-box-active {
  border: 1px dashed #aaaaaa !important;
  background-color: #f5f5f5 !important;
  outline: none;
  box-sizing: border-box;
}
</style>
