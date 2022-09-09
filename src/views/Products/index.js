import { useDispatch, useSelector } from "react-redux";

export default function ProductsView() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddProduct = () => {
    const newProduct = createNewProduct();
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };

  const createNewProduct = () => {
    const random = Math.random();
    const newProduct = {
      id: random,
      name: `NEW_PRODUCT_${random}`
    };

    return newProduct;
  };

  const handleDeleteProduct = (productId) => {
    const newProductsList = products.productsList.filter(
      (product) => product.id !== productId
    );

    dispatch({ type: "DELETE_PRODUCT", payload: newProductsList });
  };

  return (
    <div>
      <h1>Products View</h1>
      <button onClick={handleAddProduct}>+ Add new product</button>
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
  );
}
