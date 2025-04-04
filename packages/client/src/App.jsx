import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { checkAuth } from '../redux/slices/authslice';
import { useDispatch } from 'react-redux';
import Index from './routes/Index';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
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
