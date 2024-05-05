import Header from '../components/Header/Header.jsx';
import Footer from "../components/Footer/Footer.jsx";
import CheckoutDetail from '../Views/CheckoutDetail/CheckoutDetail.jsx';

function CheckoutPage() {
    return (
        <div>
            <Header isHomePage={false} />
            <main>
                <h1>Checkout</h1>
                <CheckoutDetail />
            </main>
            <Footer />
        </div>

    );
}

export default CheckoutPage;
