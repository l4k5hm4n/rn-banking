import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={18} height={24} viewBox="0 0 18 24" fill="none" {...props}>
      <Path
        d="M15 23H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2v18a2 2 0 01-2 2z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <Path
        d="M10 8l-3 4h4l-3 4"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
