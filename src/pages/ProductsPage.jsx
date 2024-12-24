import { useState, useEffect } from 'react';
import ProductList from "../components/ProdductList/ProductList.jsx";
import { getProducts } from '../utils/apiService';
import { filterAndSortProducts } from '../utils/productUtils';

function ProductsPage() {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState('noFilter');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            setError(null);
            try {
                const products = await getProducts();
                if (products) {
                    setAllProducts(products);
                    setFilteredProducts(products);
                }
            } catch (error) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const handleFilter = (filter) => {
        setFilter(filter);
    };

    useEffect(() => {
        if (filter === 'noFilter') {
            setFilteredProducts(allProducts);
        } else {
            const newList = filterAndSortProducts(allProducts, filter);
            setFilteredProducts(newList);
        }
    }, [filter, allProducts]);

    return (
        <>
            <ul className="filterButtons">
                <li><button type="button" onClick={() => { handleFilter('cheapest') }}>Cheapest Price</button></li>
                <li><button type="button" onClick={() => { handleFilter('expensive') }}>Most Expensive</button></li>
                <li><button type="button" onClick={() => { handleFilter('newest') }}>Newest</button></li>
                <li><button type="button" onClick={() => { handleFilter('oldest') }}>Oldest</button></li>
            </ul>

            {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <ProductList products={filteredProducts} />}
        </>
    );
}

export default ProductsPage;
