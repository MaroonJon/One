import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { VscSearch } from "react-icons/vsc";
import { TiThMenu } from "react-icons/ti";
import { LuShoppingCart } from "react-icons/lu";
import { GrClose } from "react-icons/gr";

import { useCart } from '../../context/CartContext';

import styles from './Header.module.css';
import { useAuth } from '../../context/AuthContext';

const Header = ({ isHomePage = false }) => {
    const { cart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchText, setSearchText] = useState('')

    const onChangeHandler = event => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        console.log('searching for ', searchText)
        navigate(`/search/${searchText}`)
    }

    return <>
        <header className={isHomePage ? styles.header : styles.smallHeader}>
            <div className={styles.searchbarAndMenu}>
                <div className={styles.menu} onClick={() => { setIsMenuOpen(true) }}>
                    <TiThMenu size={25} className={styles.menuLogo} />
                </div>
                <div className={styles.searchBox}>
                    <input
                        placeholder='Search...'
                        onChange={onChangeHandler}
                        value={searchText}
                        className={styles.searchBoxInput} />
                    <VscSearch onClick={handleSearch} size={20} className={styles.searchbarIcon} />
                </div>
            </div>

            <div className={styles.brandName}>
                <a href={'/'}>ONE</a>
            </div>

            <div className={styles.shoppingCartLogo}>
                <a href={'/cart'}>
                    <span className={styles.shoppingCartCount}>{cart.length}</span>
                    <LuShoppingCart size={25} />
                </a>
            </div>
        </header>


        <div className={styles.sidemenu} style={{ left: isMenuOpen && 0 }}>
            <div className={styles.sidemenuContainer}>
                <div className={styles.closeButton} onClick={() => { setIsMenuOpen(false) }}>
                    <GrClose size={25} />
                </div>

                <ul className={styles.sidebarMenu}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about-us">About us</a></li>
                    {!user?.token && (
                        <>
                            <li><a href="/signup">Signup</a></li>
                            <li><a href="/login">Login</a></li>
                        </>
                    )}
                    {user?.token && (
                        <>
                            <li><a href="/profile">Profile</a></li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    </>
}
export default Header;
