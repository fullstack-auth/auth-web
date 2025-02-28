// src/App.tsx
import React, { FC }from 'react';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import LoginForm from './components/LoginForm';

const App: FC = () => {
  return (
    <div>
      <RegisterForm />
      <LoginForm />
      <UserList />
    </div>
  );
};

export default App;
