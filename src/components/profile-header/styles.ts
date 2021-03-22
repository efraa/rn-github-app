import styled, { css } from 'styled-components/native'

export const Content = styled.View`
  ${({ theme: { colors, gaps, utils } }) => css`
    padding: ${gaps.extraLarge} ${gaps.normal};
    border-bottom-width: ${utils.size(6)};
    border-color: ${colors.grayLight};
  `}
`

export const ProfileContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Picture = styled.Image`
  ${({ theme: { colors, gaps, utils } }) => css`
    width: ${utils.size(70)};
    height: ${utils.size(70)};
    border-radius: ${utils.size(100)};
    margin-right: ${gaps.big};
    background-color: ${colors.grayLight};
    border-color: ${colors.grayLight};
    border-width: ${utils.size(2)};
  `}
`

export const Counters = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Counter = styled.View`
  ${({ theme: { gaps } }) => css`
    margin-right: ${gaps.big};
  `}
`
export const CounterNumber = styled.Text`
  ${({ theme: { fonts, colors } }) => css`
    font-family: ${fonts.family.bold};
    font-size: ${fonts.sizes.subtitle};
    color: ${colors.primary};
  `}
`
export const CounterLabel = styled.Text`
  ${({ theme: { fonts, colors } }) => css`
    font-family: ${fonts.family.regular};
    font-size: ${fonts.sizes.text};
    color: ${colors.gray};
  `}
`

export const ProfileInfo = styled.View`
  ${({ theme: { gaps } }) => css`
    margin-top: ${gaps.large};
  `}
`

export const Name = styled.Text`
  ${({ theme: { fonts, colors } }) => css`
    font-family: ${fonts.family.bold};
    font-size: ${fonts.sizes.head};
    color: ${colors.defaultTextColor};
  `}
`
export const Username = styled.Text`
  ${({ theme: { fonts, colors } }) => css`
    font-family: ${fonts.family.regular};
    font-size: ${fonts.sizes.text};
    color: ${colors.defaultTextColor};
  `}
`

export const Bio = styled.Text`
  ${({ theme: { colors, gaps, fonts } }) => css`
    margin-top: ${gaps.large};
    font-size: ${fonts.sizes.text};
    font-family: ${fonts.family.regular};
    line-height: ${gaps.large};
    color: ${colors.gray};
    max-width: 90%;
  `}
`
