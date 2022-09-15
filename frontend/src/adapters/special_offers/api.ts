
import { API_URL } from '@/env'
import { IOffer} from '@/types'
import axios from 'axios'


export const OffersAPI = {
    async getAll() {
      return axios
              .get<IOffer[]>(API_URL + '/offers/')
    },

}