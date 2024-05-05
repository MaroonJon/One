import Header from '../components/Header/Header.jsx';
import Footer from "../components/Footer/Footer.jsx";
import SignupView from '../Views/SignupView/SignupView.jsx';

function SignupPage() {
    return (
        <div>
            <Header isHomePage={false} />
            <main>
                <SignupView />
            </main>
            <Footer />
        </div>

    );
}

export default SignupPage;
