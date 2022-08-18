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
  name: "SButton",
  props,
  setup(props, {slots}) {
    return () => <button 
        class={`
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? "rounded-full" : "rounded-lg"}
          bg-${props.color}-${props.plain ? "100" : "500"}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props.plain ? props.color + "-500" : "white"}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          `}
        >
        { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : ''}
     </button>
  }
});