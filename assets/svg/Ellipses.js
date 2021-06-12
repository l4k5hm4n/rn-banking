import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 7.5C3.675 7.5 3 8.175 3 9s.675 1.5 1.5 1.5S6 9.825 6 9s-.675-1.5-1.5-1.5zm9 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S15 9.825 15 9s-.675-1.5-1.5-1.5zM7.5 9c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5-.675 1.5-1.5 1.5S7.5 9.825 7.5 9z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
