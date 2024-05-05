import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import './index.css';
import IndexPage from "./pages/IndexPage";
import {FavoritesProvider} from "./context/FavoritesContext";
import {AuthProvider} from "./context/AuthContext";
import {CartProvider} from "./context/CartContext";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                element={<IndexPage/>}
                path="/"
            />
            <Route
                element={<ProductsPage/>}
                path="/products"
            />
            <Route
                element={<ProductPage/>}
                path="/product/:id"
            />
            <Route
                element={<SearchPage/>}
                path="/search/:keyword"
            />
        </>
    ));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <FavoritesProvider>
                <CartProvider>
                    <RouterProvider router={router}/>
                </CartProvider>
            </FavoritesProvider>
        </AuthProvider>
    </React.StrictMode>
);
