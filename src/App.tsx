import React, { useEffect, useState } from 'react'

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

import { getCities, getContinents } from './api'
import { ICity, ICoordinates } from './interface'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: lightBlue
  }
})

const App = () => {
  const [cities, setCities] = useState<ICity[]>([])
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    lat: 0,
    lng: 0
  })
  const [continents, setContinents] = useState<string[]>([])
  const [selectedContinent, setSelectedContinent] = useState<string>('')

  useEffect(() => {
    getContinents().then((response: string[] | undefined) => {
      setContinents(response!)
    })
  }, [])

  useEffect(() => {
    getCities(selectedContinent).then((response: ICity[] | undefined) => {
      setCities(response!)
      setCoordinates({
        lat: Number(response![0].latitude),
        lng: Number(response![0].longitude)
      })
    })
  }, [selectedContinent])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header title="Ottonova Tours" />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
              cities={cities}
              continents={continents}
              selectedContinent={selectedContinent}
              setSelectedContinent={setSelectedContinent}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              cities={cities}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
