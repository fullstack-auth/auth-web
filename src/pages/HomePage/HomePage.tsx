import React from 'react';
import UserList from "../../components/UserList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    // Handle user logout
    const handleLogout = () => {
        // Remove token from localStorage to log out the user
        localStorage.removeItem('access_token');

        // Redirect to the login page
        navigate('/login');
    };

    return (
        <>
            <h3>Homepage</h3>
            <UserList />
            <button onClick={handleLogout}>Log Out</button>
        </>
    );
}

export default HomePage;
