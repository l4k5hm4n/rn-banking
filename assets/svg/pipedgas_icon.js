import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={18} height={23} viewBox="0 0 18 23" fill="none" {...props}>
      <Path
        d="M9 16c-.5 0-2-.4-2-2.1C7 12.6 9 10 9 10s2 2.5 2 3.9c0 1.7-1.5 2.1-2 2.1z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 4v12.375C17 19.525 14.8 22 12 22H6c-2.8 0-5-2.475-5-5.625V4M1 4h16M12 1H6v3h6V1z"
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
