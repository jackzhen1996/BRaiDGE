import * as React from "react"
import Svg, {Path,Rect,G} from 'react-native-svg';


function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill = 'red'
      {...props}
    >
      <G transform="rotate(180 12 12)">
        <Path fill="none" d="M0 0h24v24H0z" />
        <Rect width={8} height={2} rx={1} transform="rotate(45 -6.01 14.389)" />
        <Rect
          width={8}
          height={2}
          rx={1}
          transform="rotate(-45 22.696 -6.58)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
