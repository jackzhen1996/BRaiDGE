import * as React from "react"
import Svg, {Path,Rect,Defs,Circle,SvgCssUri} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 29 29"
      stroke = 'black'
      strokeWidth = '1'
      {...props}
    >
      <Defs>
        <SvgCssUri
            uri = ".prefix__b{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        />
      </Defs>
      <Circle cx={14.5} cy={14.5} r={14.5} fill="#fff" />
      <Path id="prefix__b" d="M21 9L9 21M9 9l12 12" />
    </Svg>
  )
}

export default SvgComponent
