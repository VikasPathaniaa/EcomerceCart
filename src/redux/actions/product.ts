import { getRequest } from "../../config/makeRequests";
import { ActionType } from "../actionTypes/actionTypes";

const updateLoadingState = (value: boolean) => {
  return {
    type: ActionType.GET_PRODUCTS_IS_PENDING,
    payload: value,
  };
};

export const getProducts = () => {
  return async (dispatch: any) => {
    try {
      dispatch(updateLoadingState(true));
      let response = await getRequest("products");
      let finalResult = await response?.data;
      dispatch({
        type: ActionType.GET_PRODUCTS_SUCCESS,
        payload: finalResult,
      });
      dispatch(updateLoadingState(false));
    } catch (error) {
      console.log(error);
      dispatch(updateLoadingState(false));
    }
  };
};
