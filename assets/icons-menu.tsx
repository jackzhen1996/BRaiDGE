import * as React from "react"
import Svg, {Path,Circle,G,Defs,SvgCssUri,ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke = 'black'
      strokeWidth = '0'
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path id="prefix__a" d="M0 0h24v24H0z" />
        </ClipPath>
        <SvgCssUri
          uri = ".prefix__a{fill:none}"
        />
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path id="prefix__a" d="M0 0h24v24H0z" />
        <Path
          d="M10.75 18.5a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5zm-8-6a.75.75 0 010-1.5h18.5a.75.75 0 010 1.5zm0-6a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5z"
          fill="#454f63"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
