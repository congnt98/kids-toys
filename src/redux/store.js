import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice"; // Make sure the path is correct
import bannerReducer from "./features/banner/bannerSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    banner: bannerReducer,
  },
});
