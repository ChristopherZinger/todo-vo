import { Root } from 'postcss';
import React from 'react';
import { GlobalStyles } from './atoms/GlobalStyles';
import { AppRoutes } from "./pages/AppRoutes";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer />
    </>);
};

export default Index;