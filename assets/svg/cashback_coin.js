import * as React from "react"
import Svg, {
  Mask,
  Path,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg width={328} height={104} viewBox="0 0 328 104" fill="none" {...props}>
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={16}
        y={0}
        width={312}
        height={87}
      >
        <Path
          d="M16 20C16 8.954 24.954 0 36 0h272c11.046 0 20 8.954 20 20v47c0 11.046-8.954 20-20 20H36c-11.046 0-20-8.954-20-20V20z"
          fill="#AA67F1"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          opacity={0.6}
          transform="rotate(45 43.703 21)"
          fill="url(#paint0_linear)"
          d="M43.7027 20.9999H97.7027V84.2204H43.7027z"
        />
        <Circle
          cx={62.9672}
          cy={40.0574}
          r={27.8436}
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_ii)">
          <Circle
            cx={62.967}
            cy={40.0579}
            r={20.7208}
            fill="url(#paint2_linear)"
          />
        </G>
        <G filter="url(#filter1_d)">
          <Path
            d="M65.606 27.107h-5.779c-.608 0-1.216.486-1.52 1.133l-3.042 11.332c-.304 1.133.456 2.104 1.368 2.104h5.627l-2.28 11.332 11.1-15.217c.76-.971 0-2.59-1.216-2.59h-4.562l1.672-5.99c.305-1.133-.456-2.104-1.368-2.104z"
            fill="url(#paint3_linear)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={70.7027}
          y1={20.9999}
          x2={70.7027}
          y2={84.2204}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFE484" />
          <Stop offset={1} stopColor="#FFE47E" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={62.9672}
          y1={12.2138}
          x2={62.9672}
          y2={67.901}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FEE9A6" />
          <Stop offset={1} stopColor="#FFDE59" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={62.967}
          y1={19.3371}
          x2={62.967}
          y2={60.7787}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FEDA0A" />
          <Stop offset={1} stopColor="#FFBC23" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={63.2908}
          y1={27.1069}
          x2={63.2908}
          y2={53.008}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FDEDB9" />
          <Stop offset={1} stopColor="#FEDD59" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
