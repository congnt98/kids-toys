import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBanners = createAsyncThunk(
  "banner/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:3001/banners");
    return response.data;
  }
);

// Define initial state
const initialState = {
  banners: [],
  status: "idle",
  error: null,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bannerSlice.reducer;
