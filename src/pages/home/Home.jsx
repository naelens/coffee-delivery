import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import styles from './Home.module.css'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Context';

const products = [
    {
        id: 1,
        imageUrl: "src/assets/expresso-tradicional.png",
        tag: ["Tradicional"],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 2,
        imageUrl: "src/assets/expresso-americano.png",
        tag: ["Tradicional"],
        name: "Expresso americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 3,
        imageUrl: "src/assets/expresso-cremoso.png",
        tag: ["Tradicional"],
        name: "Expresso cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 4,
        imageUrl: "src/assets/expresso-gelado.png",
        tag: ["Tradicional", "Gelado"],
        name: "Expresso gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 5,
        imageUrl: "src/assets/cafe-com-leite.png",
        tag: ["Tradicional", "Com leite"],
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 6,
        imageUrl: "src/assets/latte.png",
        tag: ["Tradicional", "Com leite"],
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 7,
        imageUrl: "src/assets/capuccino.png",
        tag: ["Tradicional", "Com leite"],
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 8,
        imageUrl: "src/assets/macchiato.png",
        tag: ["Tradicional", "Com leite"],
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 9,
        imageUrl: "src/assets/mocaccino.png",
        tag: ["Tradicional", "Com leite"],
        name: "Mocacciono",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 12,
        imageUrl: "src/assets/chocolate-quente.png",
        tag: ["Especial", "Com leite"],
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 13,
        imageUrl: "src/assets/cubano.png",
        tag: ["Especial", "Alcoólico"],
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 14,
        imageUrl: "src/assets/havaiano.png",
        tag: ["Especial"],
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 15,
        imageUrl: "src/assets/arabe.png",
        tag: ["Especial"],
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.49,
        quantity: 1,
    },
    {
        id: 16,
        imageUrl: "src/assets/irlandes.png",
        tag: ["Especial", "Alcoólico"],
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.49,
        quantity: 1,
    }
]

export default function Home() {
    const { handleNewItem } = useContext(CartContext);

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
                                <ShoppingCartSimple className={styles.cartIcon} size={18} weight={'fill'} />
                                <p>Compra simples e segura</p>
                            </div>
                            <div className={styles.delivery}>
                                <Timer className={styles.timerIcon} size={18} weight={'fill'} />
                                <p>Entrega rápida e rastreada</p>
                            </div>
                        </div>
                        <div className={styles.secondColumn}>
                            <div className={styles.package}>
                                <Package className={styles.packageIcon} size={18} weight={'fill'} />
                                <p>Embalagem mantém o café intacto</p>
                            </div>
                            <div className={styles.coffee}>
                                <Coffee className={styles.coffeeIcon} size={18} weight={'fill'} />
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
                    {products.map(product => (
                        <div key={product.id} className={styles.coffeeInfoCards}>
                            <div className={styles.coffeeImage}>
                                <img src={product.imageUrl} alt="Imagem dos cafés" />

                                <div className={styles.tags}>
                                    {product.tag.map((tags, index) => (
                                        <span key={index}>{tags}</span>
                                    ))}  
                                </div>   
                            </div>
                            
                            <div className={styles.coffeeDescription}>
                                <div className={styles.coffeeInfoText}>
                                    <h1>{product.name}</h1>
                                    <p>{product.description}</p>
                                </div>

                                <div className={styles.coffeeBuy}>
                                    <div className={styles.price}>
                                        <span>R$ <strong>{product.price}</strong></span>
                                    </div>

                                    <div className={styles.buttonsActions}>
                                        <div className={styles.buttonQuantity}>
                                            <button>-</button>
                                            <p>{product.quantity}</p>
                                            <button>+</button>
                                        </div>
                                        
                                        <div className={styles.buttonAddToCart}>
                                            <button onClick={() => handleNewItem(product)}><ShoppingCartSimple size={18} weight={'fill'} /></button>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
        
    )
}