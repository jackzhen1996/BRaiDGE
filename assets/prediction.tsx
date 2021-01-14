import * as React from "react";
import Svg, {Path,Rect,Defs,Circle,SvgCssUri,G} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={17}
      viewBox="0 0 30 17"
      stroke = "#257FF2"
      {...props}
    >
      <Defs>
        <SvgCssUri
          
          uri =   ".prefix__a{fill:#fff}.prefix__a,.prefix__b{stroke:#257ff2}.prefix__b,.prefix__d{fill:none}.prefix__c{stroke:none}"
          
        />
      </Defs>
      <G id ="prefix__a" transform="translate(0 12)">
        <Circle id="prefix__c" cx={2.5} cy={2.5} r={2.5} />
        <Circle id="prefix__d" cx={2.5} cy={2.5} r={2} />
      </G>
      <Path id="prefix__b" d="M3.5 12.5l6-6" />
      <G id="prefix__a" transform="translate(8 3)">
        <Circle id="prefix__c" cx={2.5} cy={2.5} r={2.5} />
        <Circle id="prefix__d" cx={2.5} cy={2.5} r={2} />
      </G>
      <Path id="prefix__b" d="M12.5 5.5l5 4" />
      <G id="prefix__a" transform="translate(16 8)">
        <Circle id="prefix__c" cx={2.5} cy={2.5} r={2.5} />
        <Circle id="prefix__d" cx={2.5} cy={2.5} r={2} />
      </G>
      <Path id="prefix__b" d="M20.5 9.5l6-6" />
      <G id="prefix__a" transform="translate(25)">
        <Circle id="prefix__c" cx={2.5} cy={2.5} r={2.5} />
        <Circle id="prefix__d" cx={2.5} cy={2.5} r={2} />
      </G>
    </Svg>
  )
}

export default SvgComponent
