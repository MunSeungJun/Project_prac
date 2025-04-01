import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Outlet } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
