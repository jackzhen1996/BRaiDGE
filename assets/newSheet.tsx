import * as React from "react";
import Svg, {Path,Rect,Defs,Circle,SvgCssUri} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48.521}
      height={48.521}
      viewBox="0 0 48.521 48.521"
      stroke = "#257FF2"
      strokeWidth = '2'
      {...props}
    >
      <Defs>
        <SvgCssUri

           uri =  ".prefix__a{fill:none;stroke:#257ff2;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
        />
      </Defs>
      <Path
        className="prefix__a"
        d="M21.808 5.904H5.624A4.624 4.624 0 001 10.528v32.368a4.624 4.624 0 004.624 4.624h32.368a4.624 4.624 0 004.624-4.624V26.712"
      />
      <Path
        className="prefix__a"
        d="M39.148 2.436a4.904 4.904 0 016.936 6.936L24.12 31.336l-9.248 2.312 2.312-9.248z"
      />
    </Svg>
  )
}

export default SvgComponent
