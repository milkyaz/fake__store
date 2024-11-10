import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductsState {
  filter: string;
}

const initialState: ProductsState = {
  filter: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = productsSlice.actions;

export const selectFilteredProducts = (state: RootState): Product[] => {
  const { filter } = state.products;
  const productsQuery = state.productsApi.queries.getProducts;
  const products = productsQuery?.data;

  if (!Array.isArray(products)) {
    return [];
  }

  if (!filter) {
    return products;
  }

  return products.filter((product: Product) => product.category === filter);
};

export default productsSlice.reducer
