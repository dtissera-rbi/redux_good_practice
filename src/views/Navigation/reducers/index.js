import { ADD_NAVIGATION, DELETE_NAVIGATION } from "../actions";

const initialState = {
  navigationList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NAVIGATION:
      return {
        ...state,
        navigationList: [...state.navigationList, { ...action.payload }]
      };
    case DELETE_NAVIGATION:
      return {
        ...state,
        navigationList: action.payload
      };
    default:
      return state;
  }
}
