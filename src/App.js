import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Router from "./router";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
