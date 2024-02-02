import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";
import { Product } from "../../type/types";
import { Cart } from "../../type/types";
// export type Cart = {
//   productId: number;
//   quantity: number;
// };

// export type Product = {
//   id: number;
//   title: string;
//   category: string;
//   price: number;
//   description: string;
//   image: string;
// };

export type CartState = {
  cartItems: Cart[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  productDetails: Product[];
};

const initialState: CartState = {
  cartItems: [],
  loading: false,
  error: null,
  selectedProduct: null,
  productDetails: [],
};

export const getProductDetails = createAsyncThunk(
  "cart/getProductDetails",
  async (productId: number): Promise<Product> => {
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      throw error;
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (): Promise<{ cartItems: Cart[] }> => {
    try {
      const response = await axiosInstance.get("/carts/5");

      const cartItems = response.data.products.map((product: Cart) => ({
        productId: product.productId,
        quantity: product.quantity,
      }));

      return { cartItems };
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  }
);

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
        state.cartItems = action.payload.cartItems;
      })
      .addCase(getCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.cartItems = [];
      })
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getProductDetails.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.error = null;
          state.selectedProduct = action.payload;
        }
      )
      .addCase(
        getProductDetails.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.selectedProduct = null;
        }
      );
  },
});

export default cartSlice.reducer;
