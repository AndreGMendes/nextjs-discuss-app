import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

import '@/app/custom-css/animations.css'

interface CustomIconProps {
  iconNameProp: IconProp;
  widthProp: number;
  heightProp?: number;
  colorProp?: string;
  marginLeftProp?: number;
  marginRightProp?: number;
  customCSSAnimationType?: string
}

export default function CustomIcon({
  iconNameProp,
  widthProp,
  heightProp,
  colorProp,
  marginLeftProp,
  marginRightProp,
  customCSSAnimationType
}: CustomIconProps) {
  return (
    <div>
      <FontAwesomeIcon
        icon={iconNameProp}
        style={{
          color: colorProp,
          marginLeft: "10px",
          marginRight: "12px",
        }}
        width={20}
        height={30}
        className={`mx-2 ${customCSSAnimationType}`}
       
      />
    </div>
  );
}
