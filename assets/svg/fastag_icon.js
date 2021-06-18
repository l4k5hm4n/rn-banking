import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={30} height={20} viewBox="0 0 30 20" fill="none" {...props}>
      <Path
        d="M23.844 15.09h3.976a1 1 0 00.986-1.163l-.94-5.637a1 1 0 00-.986-.835h-5.036a1 1 0 01-.78-.376l-4.491-5.613a1 1 0 00-.78-.375H8.04a1 1 0 00-.929.628L5.07 6.826a1 1 0 01-.929.629H3.054a1 1 0 00-.97.757L1.03 12.426c-.02.08-.031.16-.027.242a2.545 2.545 0 002.542 2.423h.064M9.844 15.09h7.767"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M6.727 18.91a3.182 3.182 0 100-6.364 3.182 3.182 0 000 6.363zM20.727 18.91a3.182 3.182 0 100-6.365 3.182 3.182 0 000 6.364z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default SvgComponent
