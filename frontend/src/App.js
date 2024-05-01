import React from 'react';
import { Route, Routes } from'react-router-dom';
import LoginPage from './components/LoginPage.js';
import NotFoundPage from './components/NotFoundPage.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
