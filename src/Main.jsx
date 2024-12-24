import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignupPage';
import { ProtectedRoute } from './ProtectedRoute';
import ProfilePage from './pages/ProtectedRoutes/ProfilePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Main = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <Header isHomePage={isHomePage} />
            <main>
                <Routes>
                    <Route element={<IndexPage />} path="/" />
                    <Route element={<ProductsPage />} path="/products" />
                    <Route element={<ProductPage />} path="/product/:id" />
                    <Route element={<SearchPage />} path="/search/:keyword" />
                    <Route element={<CartPage />} path="/cart" />
                    <Route element={<CheckoutPage />} path="/checkout" />
                    <Route element={<AboutUsPage />} path="/about-us" />
                    <Route element={<ContactPage />} path="/contact" />
                    <Route element={<LoginPage />} path="/login" />
                    <Route element={<SignupPage />} path="/signup" />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default Main;
