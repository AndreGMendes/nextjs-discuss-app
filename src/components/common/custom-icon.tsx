import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

import "@/app/custom-css/animations.css";

interface CustomIconProps {
  iconNameProp: IconProp;
  widthProp: number;
  heightProp?: number;
  colorProp?: string;
  marginLeftProp?: number;
  marginRightProp?: number;
  customCSSAnimationTypeProp?: string;
}

export default function CustomIcon({
  iconNameProp,
  widthProp,
  heightProp,
  colorProp,
  marginLeftProp,
  marginRightProp,
  customCSSAnimationTypeProp,
}: CustomIconProps) {
  return (
    <div>
      <FontAwesomeIcon
        icon={iconNameProp}
        style={{
          color: colorProp,
          // marginLeft: "18px",
          // marginRight: "12px",
          marginLeft: marginLeftProp,
          marginRight: marginRightProp,
        }}
        width={widthProp}
        height={heightProp}
        className={` ${customCSSAnimationTypeProp}`}
      />
    </div>
  );
}
