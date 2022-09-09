import { LOG_IN, LOG_OUT } from "../actions";

const initialState = {
  logged: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logged: true
      };

    case LOG_OUT:
      return {
        ...state,
        logged: false
      };
    default:
      return state;
  }
}
