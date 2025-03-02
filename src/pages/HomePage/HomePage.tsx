import UserList from "../../components/UserList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const handleLogout = () => { navigate('/login') }
    return (
        <>
            <h3>Dashboard</h3>
            <UserList />
            <button onClick={handleLogout}>Log Out</button>
        </>
    )
}

export default HomePage;