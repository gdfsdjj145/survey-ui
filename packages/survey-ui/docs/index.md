# SurveyUI

一个用于快速构建问卷的组件库

🔧 提供多个可快速构建一个问卷页面的组件

📦 基于`Vite + Vue3 + Ts`技术栈

## Install

```js
npm i survey-ui-vue
```

## 快速开始

```js
// main.ts

import { createApp } from 'vue';
import 'survey-ui-vue/dist/style.css';
import SurveyUI from 'survey-ui-vue';
import App from './App.vue';

const app = createApp(App);

app.use(SurveyUI);
app.mount('#app');
```

<script setup>
import Radio from '../src/radio/Radio.vue'
</script>
