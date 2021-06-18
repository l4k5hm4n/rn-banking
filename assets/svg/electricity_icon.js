import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={18} height={24} viewBox="0 0 18 24" fill="none" {...props}>
      <Path
        d="M17 9A8 8 0 001 9a7.99 7.99 0 004.063 6.96c.548.31.937.865.937 1.494v0C6 18.308 6.692 19 7.545 19h2.91c.853 0 1.545-.692 1.545-1.546v0c0-.629.39-1.184.937-1.494A7.99 7.99 0 0017 9zM12 19v1a3 3 0 01-3 3v0a3 3 0 01-3-3v-1"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default SvgComponent
