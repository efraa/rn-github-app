import styled, { css } from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'

export const Container = styled(FlatList)`
  ${({ theme: { colors, gaps } }) => css`
    background-color: ${colors.white};
    padding: 0 ${gaps.normal};
  `}
`

export const Text = styled.Text`
  ${({ theme: { colors, gaps, fonts } }) => css`
    margin-top: ${gaps.large};
    margin-bottom: ${gaps.large};
    font-size: ${fonts.sizes.text};
    font-family: ${fonts.family.regular};
    line-height: ${gaps.large};
    color: ${colors.gray};
    max-width: 90%;
  `}
`
