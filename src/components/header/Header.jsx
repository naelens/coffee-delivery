import styles from './Header.module.css'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'

export default function Header() {
    return (
        <div className={styles.container}>
            <aside>
                <img src="src/assets/logo.svg" alt="Logo Coffee Delivery" />
            </aside>

            <nav className={styles.navbar}>
                <ul className={styles.navbarItems}>
                    <li className={styles.location}>
                        <a href=""><MapPin size={20} weight={'fill'} />
                            Manaus, AM
                        </a>
                    </li>
                    <li className={styles.cart}>
                        <a href=""><ShoppingCartSimple size={20} weight={'fill'} /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}