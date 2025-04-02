import { configureStore } from '@reduxjs/toolkit';
import bannerreducer from './slices/bannerslice';
import signupreducer from './slices/signupslice'

const store = configureStore({
  reducer: {
    banner : bannerreducer,
    signup : signupreducer
  }
});

export default store;
