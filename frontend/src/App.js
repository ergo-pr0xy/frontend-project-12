import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import PrivateOutlet from './components/PrivateOutlet.js';
import ChatPage from './components/ChatPage.js';
import LoginPage from './components/LoginPage.js';
import NotFoundPage from './components/NotFoundPage.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateOutlet />}>
        <Route index element={<ChatPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
