import { ActionType } from "../../actionTypes/actionTypes";
import { ProductAction } from "../../types/actionTypes/productActions";

interface ProductState {
  products: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS_IS_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: null,
      };
    case ActionType.GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
