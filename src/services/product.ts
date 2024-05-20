import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SingleProductResponse } from "../types/types";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://freetestapi.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query<SingleProductResponse, number>({
      query: (id) => `/dogs/${id}`,
    }),
  }),
});
export const { useGetProductByNameQuery } = productApi;
