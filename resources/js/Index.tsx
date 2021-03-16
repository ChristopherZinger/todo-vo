import { Root } from 'postcss';
import React from 'react';
import { GlobalStyles } from './atoms/GlobalStyles';
import { AppRoutes } from "./pages/AppRoutes";

const Index = () => {
  return <>
    <GlobalStyles />
    <AppRoutes />
  </>;
};

export default Index;