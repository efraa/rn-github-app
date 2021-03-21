import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  ${({ theme: { colors, gaps } }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${gaps.normal};
    background-color: ${colors.grayLight};
    border-radius: ${gaps.normal};
    margin-bottom: ${gaps.large};
  `}
`

export const Picture = styled.Image`
  ${({ theme: { colors, gaps, utils } }) => css`
    width: ${utils.size(60)};
    height: ${utils.size(60)};
    border-radius: ${utils.size(100)};
    margin-right: ${gaps.normal};
    background-color: ${colors.white};
    border-color: ${colors.white};
    border-width: ${utils.size(2)};
  `}
`

export const Name = styled.Text`
  ${({ theme: { colors, fonts, utils } }) => css`
    color: ${colors.defaultTextColor};
    font-family: ${fonts.family.medium};
    font-size: ${fonts.sizes.subtitle};
    margin-bottom: ${utils.size(4)};
  `}
`

export const Text = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.secondary};
    font-family: ${fonts.family.medium};
    font-size: ${fonts.sizes.text};
  `}
`

export const Content = styled.View`
  display: flex;
`
