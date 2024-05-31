import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/productSlice'; // Make sure the path is correct

export default configureStore({
  reducer: {
    product: productReducer,
  },
});