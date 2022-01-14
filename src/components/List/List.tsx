import React, { ReactElement, FC, useState } from 'react'
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

export interface ICity {
  name: string
  country: string
  continent: string
}

const List: FC = (): ReactElement => {
  const classes = useStyles()
  const [continent, setContinent] = useState<string>('')
  const continents: string[] = ['Europe', 'Australia']
  const cities: ICity[] = [
    {
      name: 'Sydney',
      country: 'Australia',
      continent: 'Australia'
    },
    {
      name: 'New York City',
      country: 'USA',
      continent: 'North America'
    },
    {
      name: 'Madrid',
      country: 'Spain',
      continent: 'Europe'
    },
    {
      name: 'Moscow',
      country: 'Russia',
      continent: 'Europe'
    }
  ]

  return (
    <div className={classes.container}>
      <Typography variant="h4">Landmarks Nearby</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Continents</InputLabel>
        <Select
          value={continent}
          onChange={(e) => setContinent(e.target.value as string)}
        >
          {continents?.map((value: string, i) => (
            <MenuItem key={i} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {cities?.map((value, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails city={value} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
