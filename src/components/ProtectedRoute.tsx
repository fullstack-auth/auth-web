import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../api/utils';

interface ProtectedRouteProps {
  element: JSX.Element;
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, redirectTo }) => {
  if (!isAuthenticated()) {
    return <Navigate to={redirectTo} replace />;
  }
  return element;
};

export default ProtectedRoute;
