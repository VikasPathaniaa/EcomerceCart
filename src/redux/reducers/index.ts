import { combineReducers } from "redux";
import productReducer from "./product/ProductReducer";
import { cartReducer } from "./product/cartReducer";



export const rootReducer = combineReducers({
    productReducer:productReducer,
    cartReducer:cartReducer
})