import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none" {...props}>
      <Path
        d="M11 19a3 3 0 100-6 3 3 0 000 6z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <Path
        d="M19.106 5.211A1 1 0 0119 4.764V2a1 1 0 00-1-1H4a1 1 0 00-1 1v2.764a1 1 0 01-.106.447L1.106 8.79A1 1 0 001 9.236V22a1 1 0 001 1h18a1 1 0 001-1V9.236a1 1 0 00-.106-.447L19.106 5.21z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <Path
        d="M1 9h20M3 5h16"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export default SvgComponent
