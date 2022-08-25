# 展示 Demo1

:::demo

```vue
<template>
  <SubjectBox
    v-for="(item, index) in questionList"
    :key="item.key"
    :title="item.title"
    :index="index + 1"
  >
    <template v-if="item.type === 'radio'">
      <div
        style="margin-left: 40px"
        v-for="child in item.children"
        :key="child.key"
      >
        <SRadio :value="child.value" v-model="form[item.key]">
          {{ child.title }}
        </SRadio>
      </div>
    </template>
    <template v-if="item.type === 'checkbox'">
      <div
        style="margin-left: 40px"
        v-for="child in item.children"
        :key="child.key"
      >
        <SCheckbox :value="child.value" v-model="form[child.key]">
          {{ child.title }}
        </SCheckbox>
      </div>
    </template>
  </SubjectBox>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const form = ref({});
const questionList = ref([
  {
    key: 'one',
    title: '问卷第一题-单选题',
    type: 'radio',
    children: [
      { key: 3, title: '选项1', value: 'A' },
      { key: 4, title: '选项2', value: 'B' },
      { key: 5, title: '选项3', value: 'C' },
      { key: 6, title: '选项4', value: 'D' },
    ],
  },
  {
    key: 'two',
    title: '问卷第二题-多选题',
    type: 'checkbox',
    children: [
      { key: 7, title: '选项1', value: 'A' },
      { key: 8, title: '选项2', value: 'B' },
      { key: 9, title: '选项3', value: 'C' },
      { key: 10, title: '选项4', value: 'D' },
    ],
  },
]);
</script>
```

:::
