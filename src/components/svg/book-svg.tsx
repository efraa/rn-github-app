import React, { memo } from 'react'
import Svg, { Path, G } from 'react-native-svg'
import { useTheme } from 'src/hooks/use-theme'
import { ISVGProps } from './props'

export const BookSVG: React.FC<ISVGProps> = memo(({ color, width, height }) => {
  const { colors } = useTheme()

  return (
    <Svg viewBox="0 0 15 18.333" width={width} height={height}>
      <G transform="translate(0.833 0.833)">
        <Path
          d="M3.333,16.25a2.083,2.083,0,0,1,2.083-2.083h11.25"
          transform="translate(-3.333 -1.667)"
          fill="none"
          stroke={color ?? colors.secondary}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
        />
        <Path
          d="M5.417,1.667h11.25V18.333H5.417A2.083,2.083,0,0,1,3.333,16.25V3.75A2.083,2.083,0,0,1,5.417,1.667Z"
          transform="translate(-3.333 -1.667)"
          fill="none"
          stroke={color ?? colors.secondary}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
        />
      </G>
    </Svg>
  )
})
