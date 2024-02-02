import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";
export interface Product {
  id: Number;
  title: string;
  category: string;
  price: number;
  image: string;
}
export interface DetailState {
  data: Product | Product[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: DetailState = {
  data: null,
  loading: false,
  error: null,
};

export const getDetail = createAsyncThunk("detail", async (id: number) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
});

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getDetail.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default detailSlice.reducer;
