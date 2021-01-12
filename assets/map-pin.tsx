import * as React from "react"
import Svg, {Path,Circle,G,Defs,SvgCssUri} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={23}
      viewBox="0 0 19 23"
      stroke = 'black'
      strokeWidth = '1.5'
      {...props}
    >
      <Defs>
        <SvgCssUri
          uri = ".prefix__a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}"
        />
      </Defs>
      <G transform="translate(-2.5 -.5)">
        <Path
          id="prefix__a"
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
        />
        <Circle
          id="prefix__a"
          cx={3}
          cy={3}
          r={3}
          transform="translate(9 7)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
