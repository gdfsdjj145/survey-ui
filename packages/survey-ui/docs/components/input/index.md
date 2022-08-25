# Input 文本输入框

一个比较特殊文本输入框，主要用于低代码设计页面的一个输入框

值的内容为 html，所以显示的时候需要用`v-html`或使用`SubjectBox` 布局组件显示

## 代码演示

基础用法

:::demo 最简单的用法。

```vue
<template>
  <SInput v-model="text"></SInput>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const text = ref('这是一个特殊的文本框');
</script>
```

:::
