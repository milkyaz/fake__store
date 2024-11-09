// productsSlice.js
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return await response.data;
  }
);
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}
interface ProductsState {
  products: Product[];
  filter: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  filter: "",
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "404";
      });
  },
});

export const { setFilter } = productsSlice.actions;

export const selectFilteredProducts = (state: RootState) => {
  const { products, filter } = state.products;
  if (!filter) {
    return products;
  }
  return products.filter((product) => product.category === filter);
};

export default productsSlice.reducer;
