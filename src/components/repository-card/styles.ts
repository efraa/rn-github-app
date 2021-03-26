import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from '../typographies'

export const Repo = styled(TouchableOpacity)<any>`
  ${({ theme: { gaps, colors } }) => css`
    background-color: ${colors.grayLight};
    border-radius: ${gaps.normal};
    padding: ${gaps.large};
    margin-bottom: ${gaps.normal};
  `}
`

export const Flex = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Name = styled.Text`
  ${({ theme: { fonts, colors, gaps } }) => css`
    font-family: ${fonts.family.bold};
    font-size: ${fonts.sizes.subtitle};
    color: ${colors.defaultTextColor};
    margin-left: ${gaps.normal};
  `}
`

export const Badge = styled.View`
  ${({ theme: { utils, colors, gaps } }) => css`
    background-color: ${colors.primary};
    padding: ${utils.size(4)} ${gaps.normal};
    border-radius: 100px;
  `}
`

export const BadgeText = styled.Text`
  ${({ theme: { fonts, colors } }) => css`
    font-family: ${fonts.family.medium};
    font-size: ${fonts.sizes.small};
    color: ${colors.white};
  `}
`

export const StarText = styled.Text`
  ${({ theme: { fonts, colors, gaps } }) => css`
    font-family: ${fonts.family.regular};
    font-size: ${fonts.sizes.text};
    color: ${colors.defaultTextColor};
    margin-left: ${gaps.small};
  `}
`

export const Description = styled(Text)``
