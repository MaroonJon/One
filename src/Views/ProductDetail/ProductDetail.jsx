
import AddToCartButton from '../../components/Buttons/AddToCartButton'
import HeartButton from '../../components/Buttons/HeartButton'

import styles from './ProductDetail.module.css'

function ProductDetail({ data }) {
    return (
        <div className={styles.row}>
            <div className={styles.firstImage}>
                <img src={data.image} alt={`${data.title} photo`} />
            </div>

            <div className={styles.productDetail}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.price}>{data.price}</p>

                <p>{data.description}</p>
                <div className={styles.ctaContainer}>
                    <AddToCartButton itemId={data.id} itemTitle={data.title} itemPrice={data.price} itemImage={data.image} />
                    <HeartButton itemId={data.id} itemName={data.title} />
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;