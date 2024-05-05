import { useState, useEffect } from 'react'

import Header from '../components/Header/Header.jsx';
import Footer from "../components/Footer/Footer.jsx";
import ProductList from "../components/ProdductList/ProductList.jsx";

function ProductsPage() {
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filter, setFilter] = useState('noFilter')

    useEffect(() => {
        async function getProducts() {
            let response = await fetch('https://fakestoreapi.com/products')
            response = await response.json()
            if (response) {
                setAllProducts(response)
                setFilteredProducts(response)
            }
        }
        getProducts()
    }, [])

    const handleFilter = (filter) => {
        setFilter(filter)
    }

    useEffect(() => {
        if (filter === 'noFilter') {
            setFilteredProducts(allProducts);
            return;
        }

        let newList = [...allProducts];

        if (filter === 'cheapest') {
            newList.sort((a, b) => a.price - b.price);
        } else if (filter === 'expensive') {
            newList.sort((a, b) => b.price - a.price);
        } else if (filter === 'newest') {
            newList.sort((a, b) => b.id - a.id);
        } else if (filter === 'oldest') {
            newList.sort((a, b) => a.id - b.id);
        }

        setFilteredProducts(newList);
    }, [filter, allProducts]);

    return (
        <div>
            <Header isHomePage={false} />
            <main>
                <ul className="filterButtons">
                    <li><button type="button" onClick={() => { handleFilter('cheapest') }}>Cheapest Price</button></li>
                    <li><button type="button" onClick={() => { handleFilter('expensive') }}>Most expensive</button></li>
                    <li><button type="button" onClick={() => { handleFilter('newest') }}>Newest</button></li>
                    <li><button type="button" onClick={() => { handleFilter('oldest') }}>Oldest</button></li>
                </ul>

                {filteredProducts && <ProductList products={filteredProducts} />}
            </main>
            <Footer />
        </div>

    );
}

export default ProductsPage;
