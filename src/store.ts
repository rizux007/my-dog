import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/products";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./services/product";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      productApi.middleware
    ),
});

setupListeners(store.dispatch);
