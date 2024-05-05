import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Footer from "../components/Footer/Footer.jsx";
import ProductDetail from '../Views/ProductDetail/ProductDetail.jsx';

function ProductPage({ }) {
    const [productDetailData, setProductDetailData] = useState(null)
    let { id } = useParams();

    useEffect(() => {
        async function getProduct() {
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)
            response = await response.json()
            if (response) {
                setProductDetailData(response)
            }
        }
        getProduct()
    }, [])

    return (
        <div>
            <Header isHomePage={false} />
            <main>
                {productDetailData && <ProductDetail data={productDetailData} />}
            </main>
            <Footer />
        </div>

    );
}

export default ProductPage;
