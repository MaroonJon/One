import styles from "./Footer.module.css"
import { TiSocialInstagram } from "react-icons/ti";
import { FaRegCopyright } from "react-icons/fa6";


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerMenu}>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about-us">About us</a></li>
            </ul>
            <div className={styles.copyRight}>
                <p><FaRegCopyright size={15} /></p> <p>{(new Date().getFullYear())}</p>
            </div>
            <div className={styles.socials}>
                <p><TiSocialInstagram size={25} /></p>
            </div>
        </footer>
    )
}

export default Footer;