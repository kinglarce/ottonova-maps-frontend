import axios from 'axios'
import { ICity } from '../interface'

const URL = 'http://localhost:8000/'

export const getCities = async (
  continent?: string
): Promise<ICity[] | undefined> => {
  try {
    const host = `${URL}cities/${continent || ''}`
    const { data } = await axios.get(host)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getContinents = async (): Promise<string[] | undefined> => {
  try {
    const { data } = await axios.get(URL + 'continents')
    return data
  } catch (error) {
    console.log(error)
  }
}
