import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
