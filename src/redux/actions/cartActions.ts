//* Add to Cart 

import { ActionType } from "../actionTypes/actionTypes"
import { CartProduct } from "../types/stateTypes"

export const addToCart = (data: CartProduct) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload: data
    }
}
export const removeFromCart = (data: CartProduct) => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payload: data
    }
}
