<template>
  <div :class="['survey-title-wrapper', `survey-${mode}-question`]" :style="{width: `${width}px`}">
    <div class="survey-quill">
      <div class="survey-q-container">
        <div
          :id="keyName"
          :tabindex="0"
          class="survey-q-editor"
          :style="{fontSize: `${fontSize}px !important`}"
          :contenteditable="mode === 'edit'"
          @focus="handleFocus"
          @blur="handleTitleChange"
          v-html="modelValue"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'SInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    width: {
      type: [String, Number],
      default: ''
    },
    keyName: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'edit'
    },
    border: {
      type: Boolean
    }
  },
  setup(props, context) {
    const handleTitleChange = (e) => {
      context.emit('change', e.target.innerHTML)
      context.emit('update:value', e.target.innerHTML)
      window.removeEventListener('paste', pasteFn)
    }
    const handleFocus = () => {
      window.addEventListener('paste', pasteFn)
    }
    const pasteFn = (e) => {
      e.preventDefault()
      const paste = (e.clipboardData || window.clipboardData).getData('text/plain')
      var newNode = document.createElement('span')
      newNode.innerHTML = paste
      console.log(window.getSelection().getRangeAt(0), newNode)
      window.getSelection().getRangeAt(0).insertNode(newNode)
    }
    return { handleTitleChange, handleFocus }
  }
})
</script>
<style lang="less">
.survey-q-editor {
  box-sizing: border-box;
  line-height: 1.42;
  height: 100%;
  padding: 5px 0;
  outline: none;
  overflow-y: auto;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  border: 1px solid transparent;
}
.survey-edit-question {
  .survey-q-editor {
    &:focus {
      padding: 5px 8px;
      outline: 0px;
      border: 1px solid rgb(24, 144, 255) !important;
    }
    &:hover {
      border: 1px dashed #aaaaaa;
      transition: all .5s;
    }
  }
}
.survey-title-warp {
  box-sizing: border-box;
  margin: 0px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  width: 100%;
  color: rgba(0, 0, 0, 0.65);
  border: 1px solid transparent;
  transition: all 0.3s ease 0s;
  .survey-quill {
    text-align: center;
    .survey-q-container {
      box-sizing: border-box;
      font-family: Helvetica,Arial,sans-serif;
      font-size: 13px;
      height: 100%;
      margin: 0;
      position: relative;
    }
  }
}
</style>
