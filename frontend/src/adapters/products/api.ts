
import { API_URL } from '@/env'
import { IProduct, IType } from '@/types'
import axios from 'axios'


export const ProductsAPI = {
    async getAll() {
      return axios
              .get<IProduct[]>(API_URL + '/products/')
    },

    async getLimit() {
        return axios
                .get<IProduct[]>(API_URL + '/products/?limit=9')
      },
    
      async getType(id: string) {
        return axios
                .get<IType>(API_URL + `/products/types/${id}`)
      },
}