import { MapPin, Money, Timer } from 'phosphor-react'
import styles from './OrderConfirmation.module.css'

export default function OrderConfirmation() {
    return (
        <div className={styles.container}>
            <aside>
                <header className={styles.headerContent}>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </header>
                
                <section className={styles.orderInfo}>
                    <div className={styles.infoDelivery}>
                        <MapPin size={20} />
                        <div>
                            <p>Entrega em Rua João Daniel Martinelli, 102</p>
                            <span>Alvorada - Amazonas, AM</span>
                        </div>
                    </div>
                    <div className={styles.infoTimePrediction}>
                        <Timer size={20} />
                        <div>
                            <p>Previsão de entrega</p>
                            <span>20 min - 30 min</span>
                        </div>
                    </div>
                    <div className={styles.infoPayment}>
                        <Money size={20} />
                        <div>
                            <p>Pagamento na entrega</p>
                            <span>Cartão de Débito</span>
                        </div>
                    </div>
                </section>
            </aside>

            <section>
                <img src="/src/assets/illustration.png" alt="" />
            </section>
        </div>
    )
}