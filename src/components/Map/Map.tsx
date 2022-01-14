import React, { ReactElement, FC, Dispatch } from 'react'
import GoogleMapReact from 'google-map-react'
import { ICoordinates } from '../../interface'

import useStyles from './styles'

const API_KEY = 'AIzaSyCOJHqWc6f69wJDwoyUuw7xl2JKcdqVMcA'

interface MapProps {
  coordinates: ICoordinates
  setCoordinates: Dispatch<React.SetStateAction<ICoordinates>>
}

const Map: FC<MapProps> = ({ coordinates, setCoordinates }): ReactElement => {
  const classes = useStyles()

  return (
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
      ></GoogleMapReact>
    </div>
  )
}

export default Map
