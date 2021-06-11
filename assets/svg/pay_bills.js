import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18 10a6 6 0 00-12 0c0 2.24 1.228 4.19 3.047 5.22.41.233.703.649.703 1.12v0c0 .641.519 1.16 1.16 1.16h2.18c.641 0 1.16-.519 1.16-1.16v0c0-.471.292-.887.703-1.12A5.992 5.992 0 0018 10zM14.25 17.5v.75A2.25 2.25 0 0112 20.5v0a2.25 2.25 0 01-2.25-2.25v-.75"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default SvgComponent
