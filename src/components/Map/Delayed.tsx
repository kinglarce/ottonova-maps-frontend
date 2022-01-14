import React, { FC } from 'react'
import { CircularProgress } from '@material-ui/core'

import useStyles from './styles'

interface DelayedProps {
  children: React.ReactElement
  isLoading: boolean
}

const Delayed: FC<DelayedProps> = ({ children, isLoading }) => {
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

export default Delayed
