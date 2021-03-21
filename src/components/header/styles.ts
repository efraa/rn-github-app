import { TouchableOpacity } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const FilterButton = styled(TouchableOpacity)<any>`
  ${({ theme: { utils } }) => css`
    width: ${utils.size(22)};
    height: ${utils.size(22)};
  `}
`
