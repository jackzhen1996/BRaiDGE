import * as React from "react"
import Svg, {Path,Rect,Defs,Circle,SvgCssUri} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="icons/dark/search"
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 21 21"
      {...props}
    >
      <Path fill="rgba(52,151,253,0)" d="M0 0h21v21H0z" />
      <Path
        d="M13.931 12.967l3.869 3.869a.682.682 0 01-.964.964l-3.869-3.869a6.136 6.136 0 11.964-.964zm-4.794.942a4.773 4.773 0 10-4.773-4.773 4.773 4.773 0 004.772 4.773z"
        fill="#257ff2"
      />
    </Svg>
  )
}

export default SvgComponent
