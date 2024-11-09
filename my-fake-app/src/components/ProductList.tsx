// ProductList.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectFilteredProducts } from "../store/productsSlice";
import { AppDispatch, RootState } from "store/store";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectFilteredProducts);
  const productsStatus = useSelector<RootState>(
    (state) => state.products.status
  );
  const error = useSelector<RootState>((state) => state.products.error);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  if (productsStatus === "loading") {
    return <div>Loading...</div>;
  } else if (productsStatus === "succeeded") {
    return (
      <>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <img src={product.image} alt={product.title} width="100" />
          </div>
        ))}
      </>
    );
  } else if (productsStatus === "failed") {
    return <div>{error as string}</div>;
  }
};

export default ProductList;
