import React, { ReactElement, FC } from 'react'
import { ICity } from '../../interface'

interface PlaceDetailsProps {
  city: ICity
}

const PlaceDetails: FC<PlaceDetailsProps> = ({ city }): ReactElement => {
  return <h1>{city.name}</h1>
}

export default PlaceDetails
