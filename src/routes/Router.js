import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPage from '../pages/FormPage';
import Home from '../pages/Home';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/edit/:editId' element={<FormPage />} />
        <Route path='/projects/create' element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
