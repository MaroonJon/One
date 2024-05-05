import CartItem from '../../components/CartItem/CartItem';
import { useCart } from '../../context/CartContext';

import styles from './CheckoutDetail.module.css'
import { useLocalStorage } from '../../hooks/useLocalStorage';

const deliveryCost = 20;

function CheckoutDetail() {
    const { cart } = useCart();
    const [discountCode, setDiscountCode] = useLocalStorage('discountCode', '')
    const [discountValue, setDiscountValue] = useLocalStorage('discountValue', 0)

    let totalCost = deliveryCost;
    for (let i = 0; i < cart.length; i++) {
        totalCost += cart[i].price * cart[i].quantity;
    }

    const handleRemoveDiscount = () => {
        setDiscountCode('')
        setDiscountValue(0)
    }

    return (
        <>
            {cart?.length === 0 && (
                <p>Your cart is empty.</p>
            )}

            {cart.length > 0 && cart.map((item, index) => <CartItem
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                noButton={true} />
            )}
            {cart.length > 0 && <div className={styles.discountContainer}>
                <input
                    type="text"
                    name="discount"
                    value={discountCode}
                />
                <button type="submit" disabled={true}>Enter</button>
            </div>}


            {cart.length > 0 && <div className={styles.deliveryAndTotalInfo}>
                <p>Delivery cost is {deliveryCost}</p>
                {discountValue > 0 && <p>Discount: {discountValue} - <button onClick={handleRemoveDiscount}>remove discount</button></p>}
                <p>total cost: {(totalCost - discountValue).toFixed(2)}</p>

                <button type="button" className={styles.checkoutButton}>Pay</button>
            </div>}
        </>
    )
}
export default CheckoutDetail;