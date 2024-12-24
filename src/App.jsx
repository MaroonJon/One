import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';
import Main from './Main';

const App = () => {
    return (
        <AuthProvider>
            <FavoritesProvider>
                <CartProvider>
                    <BrowserRouter>
                        <Main />
                    </BrowserRouter>
                </CartProvider>
            </FavoritesProvider>
        </AuthProvider>
    );
};

export default App;
