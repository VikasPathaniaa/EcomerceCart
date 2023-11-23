import { ActionType } from "../../actionTypes/actionTypes";
import { CartProduct } from "../stateTypes";

//* Action Interfaces
interface GetProductsPendingAction {
    type: ActionType.GET_PRODUCTS_IS_PENDING;
    payload: boolean;
}

interface GetProductsSuccessAction {
    type: ActionType.GET_PRODUCTS_SUCCESS;
    payload: any[];
}

interface GetProductsErrorAction {
    type: ActionType.GET_PRODUCTS_ERROR;
    payload: string;
}


interface AddToCart {
    type:ActionType.ADD_TO_CART;
    payload:CartProduct
}
interface RemoveFromCart {
    type:ActionType.REMOVE_FROM_CART;
    payload:CartProduct
}

export type ProductAction = GetProductsPendingAction | GetProductsSuccessAction | GetProductsErrorAction | AddToCart | RemoveFromCart;