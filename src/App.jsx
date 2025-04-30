import './App.module.css'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes'
import Header from './components/header/Header'
import Home from './pages/home/Home'

export default function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

