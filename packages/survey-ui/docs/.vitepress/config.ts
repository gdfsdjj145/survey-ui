import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = {
  '/': [
    {
      text: '介绍',
      items: [
        { text: 'SurveyUI', link: '/' }
      ]
    },
    {
      text: '通用',
      items: [
        {
          text: 'Radio 单选框',
          link: '/components/radio/'
        },
        {
          text: 'Checkbox 复选框',
          link: '/components/checkbox/'
        }
      ]
    },
    {
      text: '问卷设计',
      items: [
        {
          text: '布局',
          items: [
            {
              text: 'SubjectBox 题目布局',
              link: '/components/subject/'
            },
          ]
        },
        {
          text: '输入框',
          items: [
            {
              text: 'Input 输入框',
              link: '/components/input/'
            },
          ]
        },
        {
          text: '选择题',
          items: [
            {
              text: 'RadioInput 单选输入框',
              link: '/components/radio-input/'
            },
            {
              text: 'CheckboxInput 复选输入框',
              link: '/components/checkbox-input/'
            },
            // {
            //   text: 'Matrix 矩阵框',
            //   link: '/components/matrix/'
            // }
          ]
        }
      ]
    },
    {
      text: '展示',
      items: [
        {
          text: 'Demo 1',
          link: '/demo/demo1.md'
        }
      ]
    }
  ]
}
const markdown = {
  config: (md) => {
    md.use(demoBlockPlugin , {
      cssPreprocessor: 'less',
      scriptReplaces: [
        { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        }
      ]
    })
  }
}
const config = {
  title: 'SurveyUI',
  markdown,
  themeConfig: {
    sidebar,
  }
}
export default config