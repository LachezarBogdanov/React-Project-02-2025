import styles from './Header.module.css'

export default function Header (){
    return (
        <header>
        <nav>
        <a className={styles.logo} href="#">
        WHEYPRO
        </a>
        <ul>
        <li>
        <a href="#">HOME</a>
        </li>
        <li>
        <a href="#">SHOP</a>
        </li>
        <li>
        <a href="#">ABOUT US</a>
        </li>
        <li>
        <a href="#">LOGIN</a>
        </li>
        <li>
        <a href="#">REGISTER</a>
        </li>
        <li>
        <a href="#">
        <i className="fa-solid fa-cart-shopping" />
        </a>
        </li>
        </ul>
        </nav>
        </header>
    )
}