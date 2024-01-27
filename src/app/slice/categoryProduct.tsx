// src/app/categoryProduct.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CategoryProductState {
  selectedCategory: string[]; // Change the type to an array of strings
  data: any[]; // Change this type to match your API response structure
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchCategoryData = createAsyncThunk<any[], string>(
  "categoryProduct/fetchCategoryData",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

const categoryProduct = createSlice({
  name: "categoryProduct",
  initialState: {
    selectedCategory: [], // Initialize as an empty array
    data: [],
    status: "idle",
    error: null,
  } as CategoryProductState,
  reducers: {
    // Modify setSelectedCategory to handle both single and multiple selections
    setSelectedCategory: (state, action) => {
      const newCategory = action.payload;

      // Check if the category is already selected
      const index = state.selectedCategory.indexOf(newCategory);

      if (index === -1) {
        // If not selected, add to the array
        state.selectedCategory.push(newCategory);
      } else {
        // If already selected, remove it from the array
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
