import Header from '../../components/Header/Header.jsx';
import Footer from "../../components/Footer/Footer.jsx";
import { useAuth } from '../../context/AuthContext.js';

function ProfilePage() {
    const { logout } = useAuth();
    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <Header isHomePage={false} />
            <main>
                <h1>Profile</h1>
                <button onClick={handleLogout} type='button'>Logout</button>
            </main>
            <Footer />
        </div>

    );
}

export default ProfilePage;
