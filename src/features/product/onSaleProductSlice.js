import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOnSaleProductSlice = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/product"
    );
    return response.data;
  }
);

const initialState = {
  product: [],
  status: "idle",
  err: null,
};

export const onSaleProductSlice = createSlice({
  name: "on-sale-product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOnSaleProductSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOnSaleProductSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getOnSaleProductSlice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
