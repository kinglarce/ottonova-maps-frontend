import axios from 'axios'
import { ICity } from '../interface'

const URL = 'http://localhost:8000/'

export const getCities = async (): Promise<ICity[] | undefined> => {
  try {
    const { data } = await axios.get(URL + 'cities')
    return data
  } catch (error) {
    console.log(error)
  }
}
