import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../features/auth/slices/authslice';
import { getSale } from '../features/home/slices/homeSaleProductsslice';
import Index from '../layouts/Index';
import Home from '../features/home/pages/Home';
import SignUp from '../features/auth/pages/SignUp';
import SignIn from '../features/auth/pages/SignIn';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getSale());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
