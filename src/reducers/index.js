import { combineReducers } from "redux";
import loginReducer from "../views/Login/reducers";
import productsReducer from "../views/Products/reducers";

const rootReducer = combineReducers({
  auth: loginReducer,
  products: productsReducer
});

export default rootReducer;
