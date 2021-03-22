import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { gaps } }) => css`
    padding: ${gaps.normal} ${gaps.normal};
  `}
`

export const ReposContainer = styled.View`
  ${({ theme: { gaps } }) => css`
    padding: ${gaps.normal} 0;
    min-height: 50%;
  `}
`
