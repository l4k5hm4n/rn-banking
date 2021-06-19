import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={24} height={22} viewBox="0 0 24 22" fill="none" {...props}>
      <Path
        d="M15.707 9.007l2.744-6.85a1.838 1.838 0 012.531-.957v0a1.838 1.838 0 01.746 2.6l-3.425 5.65"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M1 16h22"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <Path
        d="M22 16l-.491 1.228A6 6 0 0115.938 21H8.062a6 6 0 01-5.571-3.772L2 16"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path d="M12 5v2a3 3 0 01-3-3V2a3 3 0 013 3z" fill="#fff" />
      <Path
        d="M3 13c0-2.209 2.239-4 5-4a5.487 5.487 0 014 1.6"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M11 13c0-2.209 2.239-4 5-4s5 1.791 5 4"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export default SvgComponent
