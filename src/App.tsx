import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Authentication/LoginPage/LoginPage';
import RegisterPage from './pages/Authentication/RegisterPage/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRoute from './components/AuthRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/home" 
          element={<ProtectedRoute element={<HomePage />} redirectTo="/login" />} 
        />
        <Route 
          path="/login" 
          element={<AuthRoute element={<LoginPage />} redirectTo="/home" />} 
        />
        <Route 
          path="/register" 
          element={<AuthRoute element={<RegisterPage />} redirectTo="/home" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
