import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  // Other properties of the product...
}
export interface CounterState {
  data: Product[];
  loading: boolean;
  error: string | null;
  items: string[];
}
interface CartState {
  items: string[];
}
const initialState: CounterState = {
  data: [],
  loading: false,
  error: null,
  items: [],
};

export const getProduct = createAsyncThunk("product", async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=8"
    );
    return response.data;
  } catch (error) {
    // Handle errors if needed
    console.error("Error fetching products:", error);
    throw error;
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
