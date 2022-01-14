import React from 'react'

import {
  CssBaseline,
  Grid,
  createTheme,
  ThemeProvider
} from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: lightBlue
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header title="Ottonova Tours" />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
