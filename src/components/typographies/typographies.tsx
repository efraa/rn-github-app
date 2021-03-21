import React, { memo } from 'react'
import { SHeading, SText } from './styles'

export const Heading = memo(p => <SHeading {...p} />)

export const Text = memo(p => <SText {...p} />)
