import styled, { css } from 'styled-components/native'

export const SHeading = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${fonts.sizes.title};
    color: ${colors.defaultTextColor};
    font-family: ${fonts.family.bold};
  `}
`

export const SText = styled.Text`
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

export const SContent = styled.View`
  margin-top: ${({ theme: { gaps } }) => gaps.normal};
`
