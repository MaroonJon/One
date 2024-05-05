import { useState, useEffect } from 'react'

import Header from '../components/Header/Header.jsx';
import ProductList from "../components/ProdductList/ProductList";
import Footer from "../components/Footer/Footer.jsx";

function IndexPage() {
  const [latestProducts, setLatestProducts] = useState([])
  const [cheapestProducts, setCheapestProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      let response = await fetch('https://fakestoreapi.com/products')
      response = await response.json()
      if (response) {
        const latest = response.sort((a, b) => a.id - b.id)
        setLatestProducts(latest.slice(0, 4))

        const cheapest = response.sort((a, b) => a.price - b.price)
        setCheapestProducts(cheapest.slice(0, 4))
      }
    }
    getProducts()
  }, [])


  return (
    <div>
      <Header isHomePage={true} />
      <main>
        <h2>Latest products <a href="/products">all</a></h2>
        {latestProducts && <ProductList products={latestProducts} />}

        <h2>Cheapest products <a href="/products">all</a></h2>
        {cheapestProducts && <ProductList products={cheapestProducts} />}
      </main>
      <Footer />
    </div>

  );
}

export default IndexPage;
