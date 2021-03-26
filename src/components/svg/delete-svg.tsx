import React, { memo } from 'react'
import Svg, { G, Rect } from 'react-native-svg'
import { useTheme } from 'src/hooks/use-theme'
import { ISVGProps } from './props'

export const DeleteSVG: React.FC<ISVGProps> = memo(
  ({ color, width, height }) => {
    const { colors } = useTheme()

    return (
      <Svg viewBox="0 0 12.728 12.728" width={width} height={height ?? width}>
        <G transform="translate(6.364 -4.95) rotate(45)">
          <Rect
            width="2"
            height="16"
            rx="1"
            transform="translate(7)"
            fill={color ?? colors.primary}
          />
          <Rect
            width="2"
            height="16"
            rx="1"
            transform="translate(16 7) rotate(90)"
            fill={color ?? colors.primary}
          />
        </G>
      </Svg>
    )
  }
)
