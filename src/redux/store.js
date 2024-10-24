
import { configureStore } from '@reduxjs/toolkit';
import MyProductReducer from '../redux/MyProductSlice'
import CartSliceReducer from './CartSlice';
const store = configureStore({
  reducer: {
    product:MyProductReducer,
    cart:CartSliceReducer
  },
});

export default store;
