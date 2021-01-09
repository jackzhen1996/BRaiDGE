import * as React from "react"
import Svg, {G,Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={11.72}
      height={20.41}
      viewBox="0 0 9.537 16.611"
      fill = '#257FF2'
      {...props}
    >
      <G transform="rotate(-180 61.8 81.978)">
        <Rect
          width={11.686}
          height={1.801}
          rx={0.901}
          transform="rotate(-45 253.407 -56.346)"
        />
        <Rect
          width={11.686}
          height={1.801}
          rx={0.901}
          transform="rotate(-135 93.655 53.106)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
