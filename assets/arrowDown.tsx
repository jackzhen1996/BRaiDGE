import * as React from "react"
import Svg, {Path,Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill = 'red'
    viewBox="0 0 24 24"
    rotation = {50}
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Rect y = {5} width={8} height={2} rx={1} transform="rotate(45 -6.01 14.389)" />
    <Rect y = {5} width={8} height={2} rx={1} transform="rotate(-45 22.696 -6.58)" />
  </Svg>
  )
}

export default SvgComponent