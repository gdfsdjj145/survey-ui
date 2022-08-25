# 布局组件

用于问卷布局时使用

## 代码演示

基础用法

:::demo 最简单的用法。

```vue
<template>
  <SubjectBox title="普通布局"></SubjectBox>
</template>
```

:::

使用下标

:::demo `index`属性

```vue
<template>
  <SubjectBox title="拥有下标" :index="1"></SubjectBox>
</template>
```

:::

编辑功能

:::demo `mode`属性 设置`mode="edit"`即可开启编辑模式，`active` 可设置为选中

```vue
<template>
  <SubjectBox
    v-model:title="title"
    :index="1"
    mode="edit"
    @click="active = !active"
    :active="active"
  ></SubjectBox>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const title = ref('开启编辑模式');
const active = ref(false);
</script>
```

:::
