import { createContext, useState } from "react"

export const CartContext = createContext([]);

export function CartProvider(props) {
    const [item, setItem] = useState([])

    const handleNewItem = (product) => {
        const itemExists = item.find(currentItem => currentItem.id === product.id);
        if(!itemExists) {
            setItem(prev => [...prev, {...product, quantity: 1}]);
            console.log("Adicionado")
        } else {
            console.log("Produto já adicionado")
        }
    }

    return (
        <CartContext.Provider value={{ handleNewItem }}>
            {props.children}
        </CartContext.Provider>
    )
}