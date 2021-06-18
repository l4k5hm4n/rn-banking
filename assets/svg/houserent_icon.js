import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={25} height={23} viewBox="0 0 25 23" fill="none" {...props}>
      <Path
        d="M1.5 10l11-9 11 9"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 8v14h15V8"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 16l1.646-1.646a.5.5 0 01.708 0l1.292 1.292a.5.5 0 00.708 0L15.5 13"
        stroke="#fff"
        strokeWidth={1.8}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.354 11.854a.5.5 0 01.353-.854H17a.5.5 0 01.5.5v3.293a.5.5 0 01-.854.353l-3.292-3.292z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
