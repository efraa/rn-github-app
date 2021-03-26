import React, { memo } from 'react'
import { Container, Indicator } from './styles'

export const Spinner = memo(() => (
  <Container>
    <Indicator size="large" />
  </Container>
))
