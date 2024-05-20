import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductResponse } from "../types/types";
// import { ProductsResponse } from "../utils/types";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://freetestapi.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getProductsByName: builder.query<ProductResponse, void>({
      query: () => "/dogs",
    }),
  }),
});
export const { useGetProductsByNameQuery } = productsApi;
