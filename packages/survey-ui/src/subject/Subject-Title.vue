<template>
  <div class="survey-subject-title">
    <span class="survey-subject-index">{{ Number(index)?`${index}.`: '' }}</span>
    <SInput class="survey-title" :font-size="18" v-model="title" :mode="mode"></SInput>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SInput from '../input/Input.vue'

defineProps({
  index: {
    type: [String, Number]
  },
  title: {
    type: [String, Number],
    default: ''
  },
  mode: String
})
</script>
<script>
export default {
  name: 'SubjectTitle'
}
</script>

<style lang="less">
.survey-subject-title {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 35px;
  margin-bottom: 8px;
  .survey-subject-index {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 11px;
    color: #484848;
    font-size: 18px;
    line-height: 38px;
  }
  .survey-title {
    box-sizing: border-box;
    margin: 0px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    width: 100%;
    color: rgba(0, 0, 0, 0.65);
    font-size: 18px;
    border: 1px solid transparent;
    transition: all 0.3s ease 0s;
  }
}
</style>
