// src/components/RegisterForm.tsx
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setUsername, 
  setPassword,
  setMessage,
  setMail,
  setBirthDate, 
  setGender,
  setPhoneNumber,
  setAdress,
  setCountry
} from '../features/registerSlice';
import { RootState } from '../store/store';
import { User } from './UserList';

const RegisterForm: FC = () => {
  const dispatch = useDispatch();
  const { username, password, mail, birthDate, gender, phoneNumber, adress, country, message} = useSelector(
    (state: RootState) => state.register
  );

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, mail, birthDate, gender, phoneNumber, adress, country }),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch(setMessage(`Success! [JWT]: ${data.access_token}`));
      } else {
        dispatch(setMessage(data.message || 'Registration failed'));
      }
    } catch (error) {
      dispatch(setMessage('Error occurred while registering user'));
    }
  };

  return (
    <div>
      <h4>Register</h4>
      <form onSubmit={handleRegister}>
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
        <div>
          <label htmlFor="mail">E-mail: </label>
          <input
            type="mail"
            id="mail"
            value={mail}
            onChange={(e) => dispatch(setMail(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date: </label>
          <input
            type="birthDate"
            id="birthDate"
            value={birthDate}
            onChange={(e) => dispatch(setBirthDate(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <input
            type="gender"
            id="gender"
            value={gender}
            onChange={(e) => dispatch(setGender(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e: any) => dispatch(setPhoneNumber(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="adress">Adress: </label>
          <input
            type="adress"
            id="adress"
            value={adress}
            onChange={(e) => dispatch(setAdress(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input
            type="country"
            id="country"
            value={country}
            onChange={(e) => dispatch(setCountry(e.target.value))}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
