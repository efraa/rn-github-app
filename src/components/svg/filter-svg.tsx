import React, { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from 'src/hooks/use-theme'
import { ISVGProps } from './props'

export const FilterSVG: React.FC<ISVGProps> = memo(
  ({ color, width, height }) => {
    const { colors } = useTheme()

    return (
      <Svg viewBox="0 0 17.817 10.573" width={width} height={height ?? width}>
        <Path
          d="M11.429,19.573h3.959V17.81H11.429ZM4.5,9v1.762H22.317V9Zm2.969,6.167H19.347V13.405H7.469Z"
          transform="translate(-4.5 -9)"
          fill={color ?? colors.primary}
        />
      </Svg>
    )
  }
)
