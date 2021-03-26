import { CommitDTO } from '@api'
import React, { memo } from 'react'
import { Commit, Sha, Message } from './styles'

export const CommitCard: React.FC<CommitDTO> = memo(({ id, message }) => (
  <Commit>
    <Sha>{id}</Sha>
    <Message>{message}</Message>
  </Commit>
))
