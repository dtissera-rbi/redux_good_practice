import { combineReducers } from "redux";
import loginReducer from "../views/Login/reducers";
import productsReducer from "../views/Products/reducers";
import navigationReducer from "../views/Navigation/reducers";

const rootReducer = combineReducers({
  auth: loginReducer,
  products: productsReducer,
  navigation: navigationReducer
});

export default rootReducer;
