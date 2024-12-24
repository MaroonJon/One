import { useState, useEffect } from 'react'

import ProductList from "../components/ProdductList/ProductList";
import { getProducts } from '../utils/apiService';
import { getLatestProducts, getCheapestProducts } from '../utils/productUtils';


function IndexPage() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [cheapestProducts, setCheapestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const products = await getProducts();
        if (products) {
          setLatestProducts(getLatestProducts(products));
          setCheapestProducts(getCheapestProducts(products));
        }
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);


  return (
    <>
      <h2>Latest products <a href="/products">all</a></h2>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <ProductList products={latestProducts} />}

      <h2>Cheapest products <a href="/products">all</a></h2>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <ProductList products={cheapestProducts} />}
    </>
  )
}

export default IndexPage;
