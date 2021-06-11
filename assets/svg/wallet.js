import * as React from "react"
import Svg, { Path, Mask, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.889 15.896H17.84a3.446 3.446 0 01-3.442-3.44 3.447 3.447 0 013.442-3.442h4.048a.75.75 0 010 1.5H17.84a1.945 1.945 0 00-1.942 1.942c0 1.069.872 1.94 1.942 1.94h4.048a.75.75 0 010 1.5z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.298 13.144h-.312a.75.75 0 010-1.5h.312a.75.75 0 010 1.5z"
        fill="#fff"
      />
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={3}
        width={24}
        height={24}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3h20.639v19.173H2V3z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.998 4.5A4.503 4.503 0 003.5 8.998v7.177a4.503 4.503 0 004.498 4.498h8.644a4.503 4.503 0 004.497-4.498V8.998A4.503 4.503 0 0016.642 4.5H7.998zm8.644 17.673H7.998A6.005 6.005 0 012 16.175V8.998A6.005 6.005 0 017.998 3h8.644a6.004 6.004 0 015.997 5.998v7.177a6.004 6.004 0 01-5.997 5.998z"
          fill="#fff"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.685 9.038h-5.4a.75.75 0 010-1.5h5.4a.75.75 0 010 1.5z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
