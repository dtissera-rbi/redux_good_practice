import { combineReducers } from "redux";
import loginReducer from "../views/Login/reducers";

const rootReducer = combineReducers({
  auth: loginReducer,
});

export default rootReducer;
