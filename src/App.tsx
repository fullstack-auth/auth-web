import React, { FC }from 'react';
import Login from './pages/Authentication/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Authentication/LoginPage/LoginPage'; 
import HomePage from './pages/HomePage/HomePage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
