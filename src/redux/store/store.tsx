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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
