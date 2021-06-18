import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M5.3 3.3a.99.99 0 000 1.4l2.593 2.593a1 1 0 010 1.414L5.3 11.3a.99.99 0 101.4 1.4l3.993-3.993a1 1 0 000-1.414L6.7 3.3a.99.99 0 00-1.4 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
