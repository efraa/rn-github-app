import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { gaps } }) => css`
    padding: ${gaps.normal} ${gaps.normal};
  `}
`

export const CommitsContent = styled.View`
  ${({ theme: { gaps } }) => css`
    padding: ${gaps.large} 0;
  `}
`
