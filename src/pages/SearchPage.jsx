import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Footer from "../components/Footer/Footer.jsx";
import ProductList from "../components/ProdductList/ProductList.jsx";

function SearchPage() {
    let { keyword } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            let response = await fetch('https://fakestoreapi.com/products')
            response = await response.json()
            if (response) {
                const filteredProducts = response.filter(product =>
                    product.title.toLowerCase().includes(keyword.toLowerCase())
                );
                setFilteredProducts(filteredProducts)
            }
        }
        getProducts()
    }, [keyword])

    return (
        <div>
            <Header isHomePage={false} />
            <main>
                <div>Searching for {keyword}</div>
                {filteredProducts.length === 0 && <p>No result...</p>}
                {filteredProducts.length > 0 && <ProductList products={filteredProducts} />}
            </main>
            <Footer />
        </div>

    );
}

export default SearchPage;
