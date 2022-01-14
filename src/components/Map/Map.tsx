import React, {
  ReactElement,
  FC,
  Dispatch,
  AriaAttributes,
  DOMAttributes
} from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlineIcon from '@material-ui/icons/LocationOnOutlined'
import { ICity, ICoordinates } from '../../interface'
import Delayed from './Delayed'

import useStyles from './styles'

const API_KEY = 'AIzaSyCOJHqWc6f69wJDwoyUuw7xl2JKcdqVMcA'

interface MapProps {
  coordinates: ICoordinates
  setCoordinates: Dispatch<React.SetStateAction<ICoordinates>>
  cities: ICity[]
}

declare module 'react' {
  /* eslint-disable no-unused-vars */
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    lat?: number
    lng?: number
  }
}

const Map: FC<MapProps> = ({
  coordinates,
  setCoordinates,
  cities
}): ReactElement => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
    <Delayed>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          onChange={(e) =>
            setCoordinates({
              lat: Number(e.center.lat),
              lng: Number(e.center.lng)
            })
          }
        >
          {cities?.map((city, i) => (
            <div
              key={i}
              className={classes.markerContainer}
              lat={Number(city.latitude)}
              lng={Number(city.longitude)}
            >
              {!isDesktop
                ? (
                <LocationOnOutlineIcon color="primary" fontSize="large" />
                  )
                : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="subtitle2" gutterBottom>
                    {city.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src="/sample-card-image.jpg"
                    alt={city.name}
                  />
                </Paper>
                  )}
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </Delayed>
  )
}

export default Map
