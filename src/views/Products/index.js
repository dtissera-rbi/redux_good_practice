import { Provider } from "react-redux";
import store from './store'
import ProductsList from './ProductsList'

export default function ProductsView() {
  return (
    <Provider store={store}>
      <h1>Products View</h1>
      <ProductsList />
    </Provider>
  );
}
