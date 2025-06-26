import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './layout/main-page';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
