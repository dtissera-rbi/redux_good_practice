import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions";

const initialState = {
  productsList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productsList: [...state.productsList, { ...action.payload }]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productsList: action.payload
      };
    default:
      return state;
  }
}
