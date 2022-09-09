import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Router from "./router";
import Layout from './Layout'
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router />    
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
