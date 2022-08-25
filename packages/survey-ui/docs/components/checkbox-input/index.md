# CheckboxInput 复选输入框

类似单选输入框功能

## 代码演示

多选输入框

:::demo 用于设计多选项时，通过`mode="edit"`开启编辑，方便修改选项文本，通常配合 SInput 一起使用。

```vue
<template>
  <SCheckboxInput
    v-model:label="text"
    value="A"
    v-model="check1"
    mode="edit"
  ></SCheckboxInput>
  <SCheckboxInput
    v-model:label="text"
    value="B"
    v-model="check2"
  ></SCheckboxInput>
  <SCheckboxInput
    v-model:label="text"
    value="C"
    v-model="check3"
    mode="edit"
  ></SCheckboxInput>
  <SCheckboxInput
    v-model:label="text"
    value="D"
    v-model="check4"
  ></SCheckboxInput>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const text = ref('单选输入框');
const check1 = ref(false);
const check2 = ref(false);
const check3 = ref(false);
const check4 = ref(false);
</script>
```

:::
