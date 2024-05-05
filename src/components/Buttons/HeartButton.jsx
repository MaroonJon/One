import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import styles from "./AddToCartButton.module.css";

function HeartButton({ itemId, itemName }) {
    const { favorites, setFavorites } = useFavorites();

    const isLiked = favorites.some(item => item.id === itemId);

    const addToFavorites = () => {
        if (!isLiked) {
            const newFavorite = { id: itemId, name: itemName };
            setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
        } else {
            const updatedFavorites = favorites.filter(item => item.id !== itemId);
            setFavorites(updatedFavorites);
        }
    };

    return (
        <div>
            <button onClick={addToFavorites} className={styles.FavButton}>
                {isLiked ? <LiaHeartSolid size={20} className={styles.favLogoLiked} /> : <LiaHeart size={20} />}
            </button>
        </div>
    );
}

export default HeartButton;
