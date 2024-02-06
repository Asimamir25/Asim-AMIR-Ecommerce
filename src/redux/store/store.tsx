import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import cartReducer from "../slice/cartSlice";
import detailReducer from "../slice/detailSlice";
import categoryReducer from "../slice/categorySlice";
import categoryProductReducer from "../slice/categoryProduct";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    detail: detailReducer,
    category: categoryReducer,
    selectedCategory: categoryProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
