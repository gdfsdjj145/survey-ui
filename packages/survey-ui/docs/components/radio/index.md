# Radio 单选框

单选框

## 代码演示

基础用法

:::demo 最简单的用法。

```vue
<template>
  <SRadio>Radio</SRadio>
</template>
```

:::

:::demo 多单选框情况下，会更具`v-model`和`value`的值进行对应。

```vue
<template>
  <SRadio v-model="radio" value="A">A</SRadio>
  <SRadio v-model="radio" value="B">B</SRadio>
  <SRadio v-model="radio" value="C">C</SRadio>
  <SRadio v-model="radio" value="D">D</SRadio>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const radio = ref('A');
</script>
```

:::

单选输入框

:::demo 用于设计单选项时，方便修改选项文本，通常配合 SInput 一起使用。

```vue
<template>
  <SRadioInput title="Radio"></SRadioInput>
</template>
```

:::
