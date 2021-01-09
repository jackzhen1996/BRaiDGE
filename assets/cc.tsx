import * as React from "react"
import Svg, {Path, G, Text, Circle, TSpan} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 46 46"
      {...props}
    >
      <G data-name="Group 96" transform="translate(-466 -3199)">
        <Circle
          data-name="Ellipse 36"
          cx={23}
          cy={23}
          r={23}
          transform="translate(466 3199)"
          fill={props.color}
          stroke = 'white'
          strokeWidth = '1'
        />
        <Text
          transform="translate(476 3230)"
          fill="#fff5ea"
          fontSize={18}
          fontFamily="Arial"
          fontWeight={600}
        >
          <TSpan x={0} y={0}>
            {props.name}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default SvgComponent
