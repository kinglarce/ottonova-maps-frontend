import React, { FC, useState, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'

import useStyles from './styles'

interface DelayedProps {
  children: React.ReactElement
  waitBeforeShow?: number
}

const Delayed: FC<DelayedProps> = ({ children, waitBeforeShow = 500 }) => {
  const classes = useStyles()
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true)
    }, waitBeforeShow)
  }, [waitBeforeShow])

  return isShown
    ? (
        children
      )
    : (
    <div className={classes.loading}>
      <CircularProgress size="5rem" />
    </div>
      )
}

export default Delayed
