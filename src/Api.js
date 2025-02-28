import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; // Change this to your backend API URL

// Register new user
export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/register`, user);
    return response.data;
  } catch (error) {
    console.error('Error registering user', error);
    throw error;
  }
};

// Get the list of users (if you want to display them)
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
    throw error;
  }
};
