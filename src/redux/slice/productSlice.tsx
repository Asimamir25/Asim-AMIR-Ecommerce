import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";
import { Product } from "../../type/types";

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
    throw new Error("Error in getting Product");
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
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.error.message ?? null) as string | null;
        state.data = [];
      });
  },
});

export default productSlice.reducer;
