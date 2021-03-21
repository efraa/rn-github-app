import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  ${({ theme: { gaps } }) => css`
    padding: 0 ${gaps.normal};
    background-color: white;
  `}
`
