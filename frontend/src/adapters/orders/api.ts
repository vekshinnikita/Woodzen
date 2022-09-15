
import { API_URL } from '@/env'
import { IProduct, IType } from '@/types'
import axios from 'axios'


export const OrdersAPI = {
    async makeOrder(data: any) {
        return axios
                .post(API_URL + '/makeorder/', data, {headers: {'Content-Type': 'application/json'}})
      },
}