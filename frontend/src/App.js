import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from './components/LoginPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import ChatPage from './components/ChatPage.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
