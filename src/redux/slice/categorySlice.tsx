import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../utils/api/api";

export type Category = string;
export type CounterState = {
  data: Category[];
  loading: boolean;
  error: string | null;
};

const initialState: CounterState = {
  data: [],
  loading: false,
  error: null,
};

export const getCategory = createAsyncThunk("category", async () => {
  try {
    const response = await axiosInstance.get("/products/categories");
    return response.data;
  } catch (error) {
    throw new Error("Error in getting Category");
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
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.error.message ?? null) as string | null;
        state.data = [];
      });
  },
});

export default categorySlice.reducer;
