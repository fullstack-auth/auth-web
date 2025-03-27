import React from 'react';
import UserList from "../../components/UserList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
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
