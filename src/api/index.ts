import axios from 'axios'
import { ICity } from '../interface'

const apiURL: string = (process.env.REACT_APP_API_URL as string)

export const getCities = async (
  continent?: string
): Promise<ICity[] | undefined> => {
  try {
    const host = `${apiURL}/cities/${continent || ''}`
    const { data } = await axios.get(host)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getContinents = async (): Promise<string[] | undefined> => {
  try {
    const { data } = await axios.get(`${apiURL}/continents`)
    return data
  } catch (error) {
    console.log(error)
  }
}
