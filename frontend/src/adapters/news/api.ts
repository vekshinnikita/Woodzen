

import { API_URL } from '@/env'
import { INews } from '@/types'
import axios from 'axios'


export const NewsAPI = {
    async getLimit() {
        return axios
                .get<INews[]>(API_URL + '/news/?limit=4')
      },

    async subscribe(data:any) {
        return axios
                .post(API_URL + '/subscribe/', data, {headers: {'Content-Type': 'application/json'}})
    },


}