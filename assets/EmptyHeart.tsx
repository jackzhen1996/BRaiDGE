import * as React from "react"
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.903}
      height={20.232}
      viewBox="0 0 22.903 20.232"
      {...props}
    >
      <Path
        d="M20.291 2.612a5.5 5.5 0 00-7.78 0l-1.06 1.06-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        fill="none"
        stroke="#257ff2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        data-name="Group 28"
      />
    </Svg>
  )
}

export default SvgComponent
