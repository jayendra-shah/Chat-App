import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const SendIcon: React.FC<IconProps> = ({
  color = '#fff',
  size = 24,
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m9.94 12.646-2.248-.749c-2.353-.784-3.53-1.176-3.53-1.897 0-.72 1.177-1.113 3.53-1.897l8.513-2.838c1.656-.552 2.484-.828 2.921-.391.437.437.161 1.265-.39 2.92l-2.839 8.514c-.784 2.353-1.176 3.53-1.897 3.53-.72 0-1.113-1.177-1.897-3.53l-.75-2.247 4.354-4.354a1 1 0 0 0-1.414-1.414l-4.354 4.353Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export const BackIcon = ({ props }: any) => (
  <Svg width={26} height={26} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
      stroke="#FFFFFF"
      strokeWidth={1.4} // <-- bold
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
