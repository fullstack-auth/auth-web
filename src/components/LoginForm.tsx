// src/components/LoginForm.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setMessage } from '../features/loginSlice';
import { RootState } from '../store/store';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { username, password, message } = useSelector(
    (state: RootState) => state.login
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch(setMessage(`Success: ${username} logged in`));
      } else {
        dispatch(setMessage(data.message || 'Login failed'));
      }
    } catch (error) {
      dispatch(setMessage('Error occurred while logging in'));
    }
  };

  return (
    <div>
      <h4>Log in</h4>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
