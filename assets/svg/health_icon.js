import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M19 8a1 1 0 00-1-1h-4a1 1 0 01-1-1V2a1 1 0 00-1-1H8a1 1 0 00-1 1v4a1 1 0 01-1 1H2a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 011 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 011-1h4a1 1 0 001-1V8z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default SvgComponent
