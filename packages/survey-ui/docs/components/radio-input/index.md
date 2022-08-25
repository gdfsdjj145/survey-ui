# RadioInput 单选输入框

用于设计选择题的组件，文本可修改

## 代码演示

单选输入框

:::demo 用于设计单选项时，通过`mode="edit"`开启编辑，方便修改选项文本，通常配合 SInput 一起使用。

```vue
<template>
  <SRadioInput
    v-model:label="text"
    value="A"
    v-model="radio"
    mode="edit"
  ></SRadioInput>
  <SRadioInput v-model:label="text" value="B" v-model="radio"></SRadioInput>
  <SRadioInput
    v-model:label="text"
    value="C"
    v-model="radio"
    mode="edit"
  ></SRadioInput>
  <SRadioInput v-model:label="text" value="D" v-model="radio"></SRadioInput>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const text = ref('单选输入框');
const radio = ref('A');
</script>
```

:::
