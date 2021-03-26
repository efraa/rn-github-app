import React, { memo } from 'react'
import { SHeading, SText, SContent } from './styles'

export const Heading = memo(p => <SHeading {...p} />)

export const Text = memo(p => <SText {...p} />)

export const Content: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => (
  <SContent>
    <Heading>{title}</Heading>
    <Text>{text}</Text>
  </SContent>
)
