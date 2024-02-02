import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";
import { Product } from "../../type/types";
// export type Product = {
//   id: number;
//   title: string;
//   category: string;
//   price: number;
//   image: string;
// };
export type CounterState = {
  data: Product[];
  loading: boolean;
  error: string | null;
  items: string[];
};

const initialState: CounterState = {
  data: [],
  loading: false,
  error: null,
  items: [],
};

export const getProduct = createAsyncThunk("product", async () => {
  try {
    const response = await axiosInstance.get("/products?limit=8");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default productSlice.reducer;
