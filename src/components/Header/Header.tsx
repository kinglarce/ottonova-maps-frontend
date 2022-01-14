import React, { ReactElement, FC } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'

interface HeaderProps {
  title: String
}

const Header: FC<HeaderProps> = ({ title }): ReactElement => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
