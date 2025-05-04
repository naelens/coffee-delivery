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
                        <MapPin className={styles.iconMap} size={20} />
                        <div>
                            <p>Entrega em Rua <strong>João Daniel Martinelli</strong>, 102</p>
                            <span>Alvorada - Amazonas, AM</span>
                        </div>
                    </div>
                    <div className={styles.infoTimePrediction}>
                        <Timer className={styles.iconTimer} size={20} />
                        <div>
                            <p>Previsão de entrega</p>
                            <span><strong>20 min - 30 min</strong></span>
                        </div>
                    </div>
                    <div className={styles.infoPayment}>
                        <Money className={styles.iconMoney} size={20} />
                        <div>
                            <p>Pagamento na entrega</p>
                            <span><strong>Cartão de Débito</strong></span>
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