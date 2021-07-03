import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.8}
        d="M1 1l5.5 4L12 1"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={0.4}
        d="M1 7l5.5 4L12 7"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
