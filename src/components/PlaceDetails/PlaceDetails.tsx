import React, { ReactElement, FC } from 'react'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MapIcon from '@material-ui/icons/Map'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import { ICity } from '../../interface'

import useStyles from './styles'

interface PlaceDetailsProps {
  city: ICity
}

const PlaceDetails: FC<PlaceDetailsProps> = ({ city }): ReactElement => {
  const classes = useStyles()

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 300 }}
        image="/sample-card-image.jpg"
        title={city.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {city.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexWrap="wrap">
            <MapIcon />
            <Typography variant="subtitle1">{city.country}</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap">
            <EventAvailableIcon />
            <Typography gutterBottom variant="subtitle1">
              Founded: {city.founded}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ fontWeight: 'medium' }}
        >
          <Typography variant="subtitle2">Landmarks</Typography>
        </Box>
        {city?.landmarks?.map((landmark) => (
          <Chip
            icon={<LocationOnIcon />}
            key={landmark}
            size="small"
            label={landmark}
            className={classes.chip}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
