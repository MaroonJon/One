import Product from "../Product/Product.jsx";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
    return (
        <div className={styles.container}>
            {products.map((item) => {
                return <Product id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} />
            })}
        </div>
    )
}
export default ProductList;