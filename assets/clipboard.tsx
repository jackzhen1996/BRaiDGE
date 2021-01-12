import * as React from "react"
import Svg, {Path,Rect,Defs,G,Circle,SvgCssUri} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width={17.4}
      height={21}
      viewBox="0 0 15.4 19"
      stroke = "#257FF2"
      {...props}
    >
      <Defs>
      <SvgCssUri
          
           uri =  ".prefix__a,.prefix__c,.prefix__d{stroke:#257ff2}.prefix__a,.prefix__d{stroke-linecap:round}.prefix__d,.prefix__g{fill:none}.prefix__d{stroke-linejoin:round}.prefix__f{stroke:none}"
        />
      </Defs>
      <G transform="translate(-3.5 -1.5)">
        <Path
          className="prefix__a"
          d="M5.9 8.918h6.168M5.9 11.918h6.168M5.9 14.918h6.168"
        />
        <G transform="translate(14 8)" fill="#fff" stroke="#707070">
          <Circle className="prefix__f" cx={1} cy={1} r={1} />
          <Circle className="prefix__g" cx={1} cy={1} r={0.5} />
        </G>
        <G className="prefix__c" transform="translate(14 8)">
          <Circle className="prefix__f" cx={1} cy={1} r={1} />
          <Circle className="prefix__g" cx={1} cy={1} r={0.5} />
        </G>
        <Path
          className="prefix__d"
          d="M14.8 4h1.8a1.789 1.789 0 011.8 1.778v12.444A1.789 1.789 0 0116.6 20H5.8A1.789 1.789 0 014 18.222V5.778A1.789 1.789 0 015.8 4h1.8"
        />
        <Rect
          className="prefix__d"
          width={6}
          height={4}
          rx={1}
          transform="translate(8.2 2)"
        />
        <G transform="translate(14 11)" fill="#257ff2" stroke="#257ff2">
          <Circle className="prefix__f" cx={1} cy={1} r={1} />
          <Circle className="prefix__g" cx={1} cy={1} r={0.5} />
        </G>
        <G className="prefix__c" transform="translate(14 14)">
          <Circle className="prefix__f" cx={1} cy={1} r={1} />
          <Circle className="prefix__g" cx={1} cy={1} r={0.5} />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent;
