import React, { ReactElement, FC, useState } from 'react'
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'

import useStyles from './styles'

const List: FC = (): ReactElement => {
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
    </div>
  )
}

export default List
