import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './routes/Index';
import Home from './routes/Home';
import SignUp from './routes/SignUp';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home/>}  />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
