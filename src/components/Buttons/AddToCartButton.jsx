import React from 'react';
import { useCart } from '../../context/CartContext';
import GenericButton from './GenericButton';
import styles from './AddToCartButton.module.css';

function AddToCartButton({ itemId, itemTitle, itemPrice, itemImage }) {
    const { cart, setCart } = useCart();

    const addToCart = () => {
        const existingItemIndex = cart.findIndex(item => item.id === itemId);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const newItem = {
                id: itemId,
                title: itemTitle,
                price: itemPrice,
                image: itemImage,
                quantity: 1
            };
            setCart(prevCart => [...prevCart, newItem]);
        }
    };

    return (
        <GenericButton onClick={addToCart} className={styles.AddToCartButton}>
            Add to cart
        </GenericButton>
    );
}

export default AddToCartButton;
