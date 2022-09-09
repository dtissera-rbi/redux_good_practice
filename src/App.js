import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Router from "./router";
import Layout from './Layout'

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />    
      </Layout>
    </Provider>
  );
}
