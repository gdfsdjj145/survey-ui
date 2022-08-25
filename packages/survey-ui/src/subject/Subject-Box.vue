<template>
  <div :class="['survey-subject-box', active?'subject-box-active':'', `subject-${mode}-box`]">
    <SubjectInput :title="title" :index="index" :mode="mode"></SubjectInput>
    <slot></slot>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SubjectInput from './Subject-Title.vue'

defineProps({
  active: Boolean,
  title: {
    type: [String, Number],
    default: ''
  },
  index: {
    type: [String, Number]
  },
  mode: {
    type: String,
    default: 'normal'
  }
})
</script>
<script>
export default {
  name: 'SubjectBox'
}
</script>


<style lang="less">
.subject-edit-box {
  &:hover {
      background-color: #f7f7f7;
      outline: none;
  }
}
.survey-subject-box {
  position: relative;
  padding: 18px 16px;
  border: 1px solid transparent;
  box-sizing: border-box;
}
.subject-box-active {
  border: 1px dashed #aaaaaa !important;
  background-color: #f5f5f5 !important;
  outline: none;
  box-sizing: border-box;
}
</style>
