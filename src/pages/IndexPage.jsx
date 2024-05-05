import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function IndexPage() {
    return (
        <div>
            <Header isHomePage={true}/>
            <h1>index page</h1>
            <Footer/>
        </div>
    );
}

export default IndexPage;
