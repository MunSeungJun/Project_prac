import { configureStore } from '@reduxjs/toolkit';
import bannerreducer from '../features/home/homeslice';
import authreducer  from '../features/auth/authslice'


const store = configureStore({
  reducer: {
    banner : bannerreducer,
    auth : authreducer
  }
});

export default store;
