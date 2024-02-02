import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";
import { Product } from "../../type/types";
type CategoryProductState = {
  selectedCategory: string[];
  data: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export const fetchCategoryData = createAsyncThunk<Product[], string>(
  "categoryProduct/fetchCategoryData",
  async (category) => {
    try {
      const response = await axiosInstance.get(
        `/products/category/${category}`
      );
      return response.data;
    } catch (error) {}
  }
);
const categoryProduct = createSlice({
  name: "categoryProduct",
  initialState: {
    selectedCategory: [],
    data: [],
    status: "idle",
    error: null,
  } as CategoryProductState,
  reducers: {
    setSelectedCategory: (state, action) => {
      const newCategory = action.payload;

      const index = state.selectedCategory.indexOf(newCategory);

      if (index === -1) {
        state.selectedCategory.push(newCategory);
      } else {
        state.selectedCategory.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCategoryData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { setSelectedCategory } = categoryProduct.actions;
export const selectSelectedCategory = (state: {
  categoryProduct: CategoryProductState;
}) => state.categoryProduct.selectedCategory;
export const selectCategoryProductData = (state: {
  categoryProduct: CategoryProductState;
}) => state.categoryProduct.data;
export const selectCategoryProductStatus = (state: {
  categoryProduct: CategoryProductState;
}) => state.categoryProduct.status;
export const selectCategoryProductError = (state: {
  categoryProduct: CategoryProductState;
}) => state.categoryProduct.error;

export default categoryProduct.reducer;
