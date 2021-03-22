import styled, { css } from 'styled-components/native'
import { Text } from '../typographies'

export const Commit = styled.View`
  ${({ theme: { gaps, colors } }) => css`
    background-color: ${colors.grayLight};
    border-radius: ${gaps.normal};
    padding: ${gaps.large};
    margin-bottom: ${gaps.normal};
  `}
`

export const Sha = styled.Text`
  ${({ theme: { fonts, colors } }) => css`
    font-family: ${fonts.family.medium};
    font-size: ${fonts.sizes.small};
    color: ${colors.secondary};
  `}
`

export const Message = styled(Text)`
  ${({ theme: { fonts, gaps } }) => css`
    margin: ${gaps.small} 0 0 0;
    font-size: ${fonts.sizes.subtitle};
  `}
`
