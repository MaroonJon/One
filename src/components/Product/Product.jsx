import styles from './Product.module.css';
import AddToCartButton from "../Buttons/AddToCartButton";
import HeartButton from "../Buttons/HeartButton.jsx";

function Product({ id, title, image, price }) {
    const productDetailPageUrl = `/product/${id}`

    return (
        <div className={styles.productContainer}>
            <a href={productDetailPageUrl}><img src={image} alt={`${title} photo`} className={styles.product_img}  /></a>
            <div className={styles.productInfo}>
                <h2 className={styles.productName}><a href={productDetailPageUrl}>{title}</a></h2>
                <span className={styles.productPrice}>{price}</span>
            </div>
            <div className={styles.ctaContainer}>
                <AddToCartButton itemId={id} itemTitle={title} itemPrice={price} itemImage={image} />
                <HeartButton itemId={id} itemName={title} />
            </div>
        </div>
    )
}

export default Product;