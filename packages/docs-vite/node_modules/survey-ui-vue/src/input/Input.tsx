import { defineComponent, PropType } from 'vue'
import { size } from '../common'
import { IColor, ISize } from '../types'
import 'uno.css'

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue'
  },
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  }
} as const

export default defineComponent({
  name: 'SInput',
  props,
  setup (props) {
    return () => <input
    style={
      `line-height: 1.5715`
    }
    class={`
      py-4px
      px-11px
      w-100%
      f-14
      border-rd-2px
      border-gray
      border-solid
      hover:border-${props.color}
      hover:outline-${props.color}
      focus:outline-blue-500
      transition duration-300 ease-in-out transform hover:scale-105
      mx-1
      `
    }
    />
  }
})