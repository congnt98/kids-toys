import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// async thunk call api cat
export const fetchCat = createAsyncThunk("cat/fetchCat", async () => {
    const response = await axios.get("http://localhost:3001/cat");
    return response.data;
  });

const initialState = {
  cardImage: [],
  status: "idle",
  error: null,
};

const cardImageSlice = createSlice({
  name: "cardImage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCat.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCat.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cardImage = action.payload;
      })
      .addCase(fetchCat.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cardImageSlice.reducer
