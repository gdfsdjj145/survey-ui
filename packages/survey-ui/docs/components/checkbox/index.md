# Checkbox 复选框

复选框

## 代码演示

基础用法

:::demo 最简单的用法。

```vue
<template>
  <SCheckbox>Checkbox</SCheckbox>
</template>
```

:::

:::demo 多单选框情况下，会更具`v-model`和`value`的值进行对应。

```vue
<template>
  <SCheckbox v-model="check1" value="A">A</SCheckbox>
  <SCheckbox v-model="check2" value="B">B</SCheckbox>
  <SCheckbox v-model="check3" value="C">C</SCheckbox>
  <SCheckbox v-model="check4" value="D">D</SCheckbox>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const check1 = ref(false);
const check2 = ref(false);
const check3 = ref(false);
const check4 = ref(false);
</script>
```
