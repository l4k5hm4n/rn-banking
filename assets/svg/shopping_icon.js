import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={23} height={23} viewBox="0 0 23 23" fill="none" {...props}>
      <Path
        d="M6 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2z"
        fill="#fff"
      />
      <Path
        d="M6 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM4.8 6h14.76a2 2 0 011.962 2.392l-1.2 6A2 2 0 0118.36 16H7.751a2 2 0 01-1.982-1.736L4.23 2.736A2 2 0 002.25 1H1"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default SvgComponent
