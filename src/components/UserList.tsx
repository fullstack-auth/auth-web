import React, { useEffect, useState } from 'react';

export interface User {
  username: string;
  mail: string;
  birthDate: string;
  gender: string; 
  phoneNumber: number; 
  adress: string; 
  country: string; 
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    (async () => {
        try {
            const response = await fetch('http://localhost:3000/auth/users');
            const data = await response.json();
            setUsers(data);
            setMessage("Fetched successfully...");
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    })();
}, []);


  return (
    <div>
      <h4>Users List</h4>
      {message && <p>{message}</p>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <span><strong>Username:</strong> {user.username}</span>
            <br />
            <span><strong>Mail:</strong> {user.mail}</span>
            <br />
            <span><strong>Birth Date:</strong> {user.birthDate}</span>
            <br />
            <span><strong>Gender:</strong> {user.gender}</span>
            <br />
            <span><strong>Phone Number:</strong> {user.phoneNumber}</span>
            <br />
            <span><strong>Adress:</strong> {user.adress}</span>
            <br />
            <span><strong>Country:</strong> {user.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
