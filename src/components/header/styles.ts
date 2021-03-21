import { TouchableOpacity } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${fonts.sizes.title};
    color: ${colors.defaultTextColor};
    font-family: ${fonts.family.bold};
  `}
`

export const FilterButton = styled(TouchableOpacity)<any>`
  ${({ theme: { utils } }) => css`
    width: ${utils.size(22)};
    height: ${utils.size(22)};
  `}
`
