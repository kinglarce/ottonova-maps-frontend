import React, { ReactElement, FC, Dispatch } from 'react'
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'
import CityDetails from '../CityDetails/CityDetails'
import Loading from '../Loading/Loading'
import { ICity } from '../../interface'

import useStyles from './styles'

interface ListProps {
  cities: ICity[]
  continents: string[]
  selectedContinent: string
  isLoading: boolean
  setSelectedContinent: Dispatch<React.SetStateAction<string>>
}

const List: FC<ListProps> = ({
  cities,
  continents,
  selectedContinent,
  isLoading,
  setSelectedContinent
}): ReactElement => {
  const classes = useStyles()

  return (
    <Loading isLoading={isLoading}>
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel>Continents</InputLabel>
          <Select
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value as string)}
          >
            <MenuItem key={-1} value="">
              All
            </MenuItem>
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
              <CityDetails city={value} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Loading>
  )
}

export default List
