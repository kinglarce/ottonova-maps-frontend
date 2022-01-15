import React, { FC, ReactElement } from 'react'
import { CircularProgress } from '@material-ui/core'

import useStyles from './styles'

interface LoadingProps {
  children: ReactElement
  isLoading: boolean
}

const Loading: FC<LoadingProps> = ({ children, isLoading }): ReactElement => {
  const classes = useStyles()

  return isLoading
    ? (
    <div className={classes.loading}>
      <CircularProgress size="5rem" />
    </div>
      )
    : (
        children
      )
}

export default Loading
