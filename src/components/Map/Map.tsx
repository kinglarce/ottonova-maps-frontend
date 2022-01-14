import React, { ReactElement, FC } from 'react'
import GoogleMapReact from 'google-map-react'
import useStyles from './styles'

const API_KEY = 'AIzaSyCOJHqWc6f69wJDwoyUuw7xl2JKcdqVMcA'
const Map: FC = (): ReactElement => {
  const classes = useStyles()
  const coordinates = { lat: 0, lng: 0 }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      >
      </GoogleMapReact>
    </div>
  )
}

export default Map
