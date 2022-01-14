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
import { ICity } from '../../interface'

import useStyles from './styles'

interface ListProps {
  cities: ICity[]
}

const List: FC<ListProps> = ({ cities }): ReactElement => {
  const classes = useStyles()
  const [continent, setContinent] = useState<string>('')
  const continents: string[] = ['Europe', 'Australia']

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
