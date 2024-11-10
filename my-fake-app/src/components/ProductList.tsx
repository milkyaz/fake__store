import React from 'react';
import { useGetProductsQuery } from "../store/productApi";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const filter = useSelector((state: RootState) => state.products.filter);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  const filteredProducts = filter
    ? products?.filter((product) => product.category === filter)
    : products;

  return (
    <>
      {filteredProducts?.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <img src={product.image} alt={product.title} width="100" />
        </div>
      ))}
    </>
  );
};

export default ProductList;
