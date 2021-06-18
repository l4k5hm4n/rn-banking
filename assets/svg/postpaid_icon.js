import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={18} height={24} viewBox="0 0 18 24" fill="none" {...props}>
      <Path
        d="M12.518 8H6.232h1.714a2.286 2.286 0 010 4.571H6.232L9.66 16M6.232 10.286h6.286"
        stroke="#fff"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 23H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2v18a2 2 0 01-2 2z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default SvgComponent
