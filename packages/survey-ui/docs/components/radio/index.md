# Radio 单选框

单选框

## 代码演示

基础用法

:::demo 最简单的用法。

```vue
<template>
  <SRadio v-model="radio" value="Radio">Radio</SRadio>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const radio = ref('');
</script>
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
