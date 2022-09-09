import { Provider, useSelector } from "react-redux";
import store from './store'
import ProductsList from './ProductsList'

export default function ProductsView() {
  const state = useSelector(state => state)

  console.log('state from store.getState()', store.getState())
  console.log('state from useSelector', state)

  return (
    <Provider store={store}>
      <h1>Products View</h1>
      <ProductsList />
    </Provider>
  );
}
