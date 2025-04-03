import { configureStore } from '@reduxjs/toolkit';
import bannerreducer from './slices/bannerslice';


const store = configureStore({
  reducer: {
    banner : bannerreducer,
  }
});

export default store;
