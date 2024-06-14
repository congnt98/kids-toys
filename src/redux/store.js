import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice"; // Make sure the path is correct
import bannerReducer from "./features/banner/bannerSlice";
import cardImageReducer from './features/cardImage/cardImageSlice'

export default configureStore({
  reducer: {
    product: productReducer,
    banner: bannerReducer,
    cardImage:cardImageReducer,
  },
});
