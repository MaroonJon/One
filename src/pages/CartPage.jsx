import Header from '../components/Header/Header.jsx';
import Footer from "../components/Footer/Footer.jsx";
import CartDetail from '../Views/CartDetail/CartDetail.jsx';

function CartPage() {
    return (
        <div>
            <Header isHomePage={false} />
            <main>
                <h1>My cart</h1>
                <CartDetail />
            </main>
            <Footer />
        </div>

    );
}

export default CartPage;
