import { configureStore } from '@reduxjs/toolkit';
import bannerreducer from './slices/bannerslice';
import authreducer  from './slices/authslice'


const store = configureStore({
  reducer: {
    banner : bannerreducer,
    auth : authreducer
  }
});

export default store;
