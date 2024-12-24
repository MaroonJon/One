import { useAuth } from '../../context/AuthContext.js';

function ProfilePage() {
    const { logout } = useAuth();
    const handleLogout = () => {
        logout()
    }

    return (
        <>
            <h1>Profile</h1>
            <button type='button' onClick={handleLogout}>Logout</button>
        </>

    );
}

export default ProfilePage;
