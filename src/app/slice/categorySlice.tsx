import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Category = string;
export interface CounterState {
  data: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  data: [],
  loading: false,
  error: null,
};

export const getCategory = createAsyncThunk("category", async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  } catch (error) {
    // Handle errors if needed
    console.error("Error fetching products:", error);
    throw error;
  }
});

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getCategory.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default categorySlice.reducer;
