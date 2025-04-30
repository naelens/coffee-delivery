import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import styles from './Home.module.css'

export default function Home() {
    return (
        <>
            <div className={styles.main}>
                <section className={styles.MainContent}>
                    <div className={styles.primaryContent}>
                        <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>

                    <div className={styles.secondaryContent}>
                        <div className={styles.firstColumn}>
                            <div className={styles.shopping}>
                                <ShoppingCartSimple size={18} weight={'fill'} />
                                <p>Compra simples e segura</p>
                            </div>
                            <div className={styles.delivery}>
                                <Timer size={18} weight={'fill'} />
                                <p>Entrega rápida e rastreada</p>
                            </div>
                        </div>
                        <div className={styles.secondColumn}>
                            <div className={styles.package}>
                                <Package size={18} weight={'fill'} />
                                <p>Embalagem mantém o café intacto</p>
                            </div>
                            <div className={styles.coffee}>
                                <Coffee size={18} weight={'fill'} />
                                <p>O café chega fresquinho até você</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.containerImage}>
                    <img src="src/assets/coffee-delivery.png" alt="Coffee Delivery" />
                </section>
            </div>

            <div className={styles.coffeeProducts}>
                <section className={styles.sectionName}>
                    <h1>Nossos cafés</h1>
                </section>

                <section className={styles.coffeeCards}>
                    <div className={styles.coffeeInfoCards}>
                        <div className={styles.coffeeImage}>
                            <img src="src/assets/expresso-tradicional.png" alt="" />
                            <span>Tradicional</span>
                        </div>
                        
                        <div className={styles.coffeeDescription}>
                            <div className={styles.coffeeInfoText}>
                                <h1>Expresso tradicional</h1>
                                <p>O tradicional café feito com água quente e grãos moídos.</p>
                            </div>

                            <div className={styles.coffeeBuy}>
                                <div className={styles.price}>
                                    <span>R$ <strong>9,90</strong></span>
                                </div>

                                <div className={styles.buttonsActions}>
                                    <div className={styles.buttonQuantity}>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                    
                                    <div className={styles.buttonAddToCart}>
                                        <button><ShoppingCartSimple size={18} weight={'fill'} /></button>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
        
    )
}