import styles from './CartItem.module.css';

import { useCart } from '../../context/CartContext';


function CartItem({ id, title, image, price, quantity, noButton = false }) {
    const { cart, setCart } = useCart();

    const productDetailPageUrl = `/product/${id}`

    const handleRemoveFromCart = () => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const handleDecreaseQuantity = () => {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const handleIncreaseQuantity = () => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    return (
        <>
            <div className={styles.cartItemContainer}>
                <div>
                    <a href={productDetailPageUrl}>
                        <img src={image} className={styles.productImage} />
                    </a>
                </div>
                <div className={styles.productInfoContainer}>
                    <h2 className={styles.productName}>
                        <a href={productDetailPageUrl}>{title}</a>
                    </h2>
                    {!noButton && (
                        <button
                            onClick={handleRemoveFromCart}
                            type="button"
                            className={styles.removeButton}>Remove from basket</button>
                    )}
                </div>
                <div>
                    {!noButton && (
                        <button
                            onClick={handleDecreaseQuantity}
                            type="button"
                            className={styles.quantityHandlerButton}>-</button>
                    )}
                    <span>{quantity}</span>
                    {!noButton && (
                        <button
                            onClick={handleIncreaseQuantity}
                            type="button"
                            className={styles.quantityHandlerButton}>+</button>
                    )}
                </div>
                <div>
                    <span>{price * quantity}</span>
                </div>
            </div>
        </>
    )
}

export default CartItem;