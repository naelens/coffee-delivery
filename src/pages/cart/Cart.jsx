import { Bank, CreditCard, MapPin, Money, Trash } from 'phosphor-react'
import styles from './Cart.module.css'

export default function Cart() {
    return (
        <div className={styles.container}>
            <div className={styles.contentLeft}>
                <div className={styles.contentName}>
                    <h1>Complete seu pedido</h1>
                </div>
                <div className={styles.adress}>
                    <header>
                        <aside><MapPin className={styles.iconMap} size={18} weight={'regular'} /></aside>
                        <section>
                            <h2>Endereço de entrega</h2>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </section>
                    </header>

                    <section className={styles.formArea}>
                        <form className={styles.formField}>
                            <input type="number" name="CEP" placeholder="CEP" id="" />
                            <input type="text" name="Rua" placeholder="Rua" id="" />
                            <input type="number" name="Número" placeholder="Número" id="" />
                            <input type="text" name="Complemento" placeholder="Complemento (Opcional)" id="" />
                            <input type="text" name="Bairro" placeholder="Bairro" id="" />
                            <input type="text" name="Estado" placeholder="Estado" id="" />
                            <input type="text" name="Cidade" placeholder="Cidade" id="" />
                        </form>
                    </section>
                </div>
                <div className={styles.payment}>
                    <header>
                        <aside><Money className={styles.iconMoney} size={18} weight={'regular'} /></aside>
                        <section>
                            <h2>Pagamento</h2>
                            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                        </section>
                    </header>
                    <section className={styles.paymentForms}>
                        <button>
                            <CreditCard className={styles.icons} size={16} />
                            Cartão de Crédito
                        </button>
                        <button>
                            <Bank className={styles.icons} size={16} />
                            Cartão de Débito
                        </button>
                        <button>
                            <Money className={styles.icons} size={16} />
                            Dinheiro
                        </button>
                    </section>
                </div>
            </div>

            <div className={styles.contentRight}>
                <div className={styles.contentName}>
                    <h1>Cafés selecionados</h1>
                </div>

                <section className={styles.checkout}>
                    <div className={styles.item}>
                        <div className={styles.containerImage}>
                            <img src="src/assets/expresso-tradicional.png" alt="" />
                        </div>

                        <div className={styles.cardItem}>
                            <div className={styles.itemDescription}>
                                <h2>Expresso tradicional</h2>
                                <p>R$ 9.49</p>
                            </div>
                            <div className={styles.buttons}>
                                <div className={styles.buttonQuantity}>
                                    <button>-</button>
                                        <p>1</p>
                                    <button>+</button>
                                </div>
                                <div className={styles.buttonRemover}>
                                    <button>
                                        <Trash className={styles.iconTrash} size={16} />
                                        REMOVER
                                    </button>
                                </div>
                            </div>    
                        </div>
                    </div>

                    <div className={styles.totalPrice}>
                        <div>
                            <h3>Total de itens</h3>
                            <span>R$ 9,49</span>
                        </div>

                        <div>
                            <h3>Entrega</h3>
                            <span>R$ 3,20</span>
                        </div>

                        <div className={styles.total}>
                            <h2>Total</h2>
                            <span>R$ 33,40</span>
                        </div>

                        <button>Confirmar pedido</button>
                    </div>
                </section>
            </div>
        </div>
    )
}