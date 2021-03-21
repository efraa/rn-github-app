import React, { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from 'src/hooks/use-theme'
import { ISVGProps } from './props'

export const StartSVG: React.FC<ISVGProps> = memo(({ color }) => {
  const { colors } = useTheme()

  return (
    <Svg viewBox="0 0 12.833 12.262">
      <Path
        d="M7,1.167,8.8,4.818l4.031.589L9.917,8.248l.688,4.013L7,10.366l-3.605,1.9.688-4.013L1.167,5.407,5.2,4.818Z"
        transform="translate(-0.583 -0.583)"
        fill="none"
        stroke={color ?? colors.secondary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.167"
      />
    </Svg>
  )
})
