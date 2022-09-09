import { useDispatch, useSelector } from "react-redux";
import store from './store'

function ProductsList() {
  const dispatch = useDispatch();
  const products2 = useSelector((state) => state.products);
  const products = store.getState()

  const handleAddProduct = () => {
    const newProduct = createNewProduct();
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };

  const handleDeleteProduct = (productId) => {
    const newProducts = products.productsList.filter((product) => product.id !== productId)

    dispatch({ type: 'DELETE_PRODUCT', payload: newProducts })
  }

  const createNewProduct = () => {
    const random = Math.random();
    const newProduct = {
      id: random,
      name: `NEW_PRODUCT_${random}`
    };

    return newProduct;
  };

  console.log('products from useSelector', products2)

  return (
    <>
      <button onClick={handleAddProduct}>+ Add new product</button>
      <div>
        {products.productsList.map((product) => {
          return (
            <h5 key={product.id}>
              <div>ID: {product.id}</div>
              <div>Name: {product.name}</div>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete Product
              </button>
            </h5>
          );
        })}
      </div>
    </>
  )
}

export default ProductsList
