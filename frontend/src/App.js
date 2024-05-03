import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import NotFoundPage from './components/NotFoundPage.js';

const App = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default App;
