import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/api/api";
import { Product } from "../../type/types";
export type DetailState = {
  data: Product | Product[] | null;
  loading: boolean;
  error: string | null;
};

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
    throw new Error("Error in getting Detail");
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
      .addCase(getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.error.message ?? null) as string | null;
        state.data = [];
      });
  },
});

export default detailSlice.reducer;
