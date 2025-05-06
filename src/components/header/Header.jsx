import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'

export default function Header() {
    return (
        <div className={styles.container}>
            <aside>
                <Link to="pagina-inicial">
                    <img src="src/assets/logo.svg" alt="Logo Coffee Delivery" />
                </Link>
            </aside>

            <nav className={styles.navbar}>
                <ul className={styles.navbarItems}>
                    <li className={styles.cart}>
                        <Link to="/carrinho"><ShoppingCartSimple size={20} weight={'fill'}></ShoppingCartSimple></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}