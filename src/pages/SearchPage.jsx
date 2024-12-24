import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from "../components/ProdductList/ProductList.jsx";
import { getProducts } from '../utils/apiService';

function SearchPage() {
  let { keyword } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const products = await getProducts();
        if (products) {
          const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(keyword.toLowerCase())
          );
          setFilteredProducts(filteredProducts);
        } else {
          setFilteredProducts([]);
        }
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [keyword]);

  return (
    <>
      <div>Searching for {keyword}</div>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> :
        filteredProducts.length === 0 ? <p>No result...</p> :
          <ProductList products={filteredProducts} />
      }
    </>
  );
}

export default SearchPage;
