import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={19} height={24} viewBox="0 0 19 24" fill="none" {...props}>
      <Path
        d="M16.074 23H9.926a1 1 0 01-1-.923l-.843-11A1 1 0 019.08 10h7.84a1 1 0 01.997 1.077l-.846 11a1 1 0 01-.997.923z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <Path
        d="M8.859 7a13.26 13.26 0 01-.846-2.92A.964.964 0 018 3.92V2a1 1 0 00-1-1H5a1 1 0 00-1 1v2c0 1.329-1.843 4.53-1.843 7.926s.469 4.577.469 6.2C2.626 19.749 2 20.6 2 21.523A1.419 1.419 0 003.33 23H6"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export default SvgComponent
