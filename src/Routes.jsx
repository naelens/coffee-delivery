import { Routes, Route} from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/pagina-inicial' element={<Home />} />
                <Route path='/carrinho' element={<Cart />} />
            </Route>
        </Routes>
    )
}