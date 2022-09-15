
import { selector } from "recoil";
import { Basket } from '../atoms/Basket';

export const BasketLength = selector({
    key: 'BasketLength',
    get: ({ get }) => {
        const basket = get(Basket)
        return basket.length
    }
})

export const BasketPrice= selector({
    key: 'BasketPrice',
    get: ({ get }) => {
        const basket = get(Basket)
        let count = 0
        
        basket.map(_item => {
            count += _item.quantity * _item.type.price
        })

        return count
    }
})