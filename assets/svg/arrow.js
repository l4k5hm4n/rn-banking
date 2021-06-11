import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgMedia(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M5.25 3.915a.58.58 0 000 .822L7.513 7 5.25 9.264a.58.58 0 10.822.822L8.75 7.41a.58.58 0 000-.823L6.072 3.91a.586.586 0 00-.822.006z"
        fill="#586AD5"
      />
    </Svg>
  )
}

export default SvgMedia
