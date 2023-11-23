import { ActionType } from "../../actionTypes/actionTypes";
import { ProductAction } from "../../types/actionTypes/productActions";
import { CartProduct, CartState } from "../../types/stateTypes";

const initialState: CartState = {
  cartProducts: [],
  totalProducts: 0,
  totalAmount: 0,
};

export const cartReducer = (
  state = initialState,
  action: ProductAction
): CartState => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      const existingProduct = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        const updatedCartProducts = state.cartProducts.map((item) => {
          if (item.id === existingProduct.id) {
            return {
              ...item,
              price: item.price,
              amount: item.amount + 1,
              totalPrice: item.totalPrice + action.payload.price,
            };
          }
          return item;
        });

        return {
          ...state,
          cartProducts: updatedCartProducts,
          totalProducts: state.totalProducts + 1,
          totalAmount: state.totalAmount + action.payload.price,
        };
      } else {
        const newCartProduct = {
          id: action.payload.id,
          price: action.payload.price,
          amount: action.payload.amount,
          totalPrice: action.payload.price,
          image: action.payload.image,
          category: action.payload.category,
        };

        return {
          ...state,
          cartProducts: [...state.cartProducts, newCartProduct],
          totalProducts: state.totalProducts + 1,
          totalAmount: state.totalAmount + action.payload.price,
        };
      }
    case ActionType.REMOVE_FROM_CART:
      const exist = state.cartProducts.find((product) => {
        return product.id === action.payload.id;
      });
      if (exist?.amount == 1) {
        const leftProduct = state.cartProducts.filter((product) => {
          return exist.id !== product.id;
        });
        return {
          ...state,
          cartProducts: leftProduct,
          totalProducts: state.totalProducts - 1,
          totalAmount: state.totalAmount - action.payload.price,
        };
      } else {
        const product = state.cartProducts.map((item) => {
          if (item.id == exist?.id)
            return {
              ...item,
              price: item.price,
              amount: item.amount - 1,
              totalPrice: item.totalPrice - action.payload.price,
            };
          else {
            return item;
          }
        });
        return {
          ...state,
          cartProducts: product,
          totalProducts: state.totalProducts - 1,
          totalAmount: state.totalAmount - action.payload.price,
        };
      }

    default:
      return state;
  }
};
