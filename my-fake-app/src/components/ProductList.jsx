// ProductList.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectFilteredProducts } from "./productsSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const productsStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  let content;

  if (productsStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (productsStatus === "succeeded") {
    content = products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <img src={product.image} alt={product.title} width="100" />
      </div>
    ));
  } else if (productsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

export default ProductList;
