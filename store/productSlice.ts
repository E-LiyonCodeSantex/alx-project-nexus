import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios";
import type { ProductCards } from "@/interface/index"

export const fetchProducts = createAsyncThunk(
  "product/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/products/");
      console.log("Fetched products:", response.data);
      return response.data.results;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue({
          status: error.response.status,
          message:
            error.response.data?.message ||
            "Something went wrong while fetching products.",
        });
      }
      return rejectWithValue({
        status: null,
        message: "Network error. Please check your connection.",
      });
    }
  }
);

interface ProductError {
  status: number | null;
  message: string;
}

interface ProductState {
  products: ProductCards[];
  loading: boolean;
  error: ProductError | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as ProductError;
      });
  },
});

export default productSlice.reducer;
