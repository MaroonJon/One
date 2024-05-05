import Header from '../components/Header/Header.jsx';
import Footer from "../components/Footer/Footer.jsx";
import LoginView from '../Views/LoginView/LoginView.jsx';

function LoginPage() {
    return (
        <div>
            <Header isHomePage={false} />
            <main>
                <LoginView />
            </main>
            <Footer />
        </div>
    );
}

export default LoginPage;
