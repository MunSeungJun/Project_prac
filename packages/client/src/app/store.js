import { configureStore } from '@reduxjs/toolkit';
import bannerreducer from '../features/home/slices/bannerslice';
import homeSaleProductsreducer from '../features/home/slices/homeSaleProductsslice'
import authreducer  from '../features/auth/slices/authslice'


const store = configureStore({
  reducer: {
    banner : bannerreducer,
    homeSaleProducts: homeSaleProductsreducer,
    auth : authreducer
  }
});

export default store;
