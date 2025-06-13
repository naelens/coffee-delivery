import './App.module.css'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes'
import { CartProvider } from './contexts/Context'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  )
}

