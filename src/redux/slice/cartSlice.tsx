import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";
import { Product } from "../../type/types";
import { Cart } from "../../type/types";

export type CartState = {
  result: Cart[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  productDetails: Product[];
};

const initialState: CartState = {
  result: [],
  loading: false,
  error: null,
  selectedProduct: null,
  productDetails: [],
};

export const getCart = createAsyncThunk("cart/getCart", async () => {
  try {
    const response = await axiosInstance.get("/carts/5");

    const cartItems = response.data.products.map((product: Cart) => ({
      productId: product.productId,
      quantity: product.quantity,
    }));

    const product = cartItems.map(async (item: Product) => {
      const productres = await axiosInstance.get(`/products/${item.productId}`);
      return productres.data;
    });
    const result = await Promise.all(product);

    return {
      result,
    };
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.result = action.payload.result;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.error.message ?? null) as string | null;
        state.result = [];
      });
  },
});

export default cartSlice.reducer;
