import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../api/utils'; // Your auth check function

interface AuthRouteProps {
  element: JSX.Element;
  redirectTo: string;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ element, redirectTo }) => {
  if (isAuthenticated()) {
    return <Navigate to={redirectTo} replace />;
  }
  return element;
};

export default AuthRoute;
