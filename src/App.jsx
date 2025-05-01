import './App.module.css'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes'

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

