import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgMedia(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.177 20.293c.055.4.402.707.823.707.459 0 .83-.366.83-.818V5.8l5.251 5.195.093.08a.84.84 0 001.082-.077.81.81 0 00.002-1.157L12.6 3.252a.84.84 0 00-1.189-.012l-6.67 6.6-.08.093a.81.81 0 00.083 1.065.839.839 0 001.175-.003l5.25-5.196v14.383l.008.11z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgMedia