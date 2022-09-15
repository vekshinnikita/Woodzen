import { IBasketType } from '@/types'
import { atom } from 'recoil'


export const Basket = atom({
    key: 'Basket',
    default: [] as IBasketType[],
})